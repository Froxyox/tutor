import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'applications.json')

function readApplications(): object[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

function writeApplications(data: object[]) {
  const dir = path.dirname(DATA_FILE)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const required = ['studentFirstName', 'studentLastName', 'parentName', 'email', 'phone', 'grade', 'currentSchool']
    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === '') {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    const application = {
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
      studentName: `${body.studentFirstName.trim()} ${body.studentLastName.trim()}`,
      parentName: body.parentName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      grade: body.grade,
      currentSchool: body.currentSchool.trim(),
      targetSchools: body.targetSchools ?? [],
      helpNeeded: body.helpNeeded ?? [],
      previousExperience: body.previousExperience ?? 'no',
      practiceScore: body.practiceScore?.trim() ?? '',
      availability: body.availability ?? [],
      hearAboutUs: body.hearAboutUs?.trim() ?? '',
      goals: body.goals?.trim() ?? '',
      status: 'new',
    }

    const apps = readApplications()
    apps.push(application)
    writeApplications(apps)

    return NextResponse.json({ success: true, id: application.id }, { status: 201 })
  } catch (err) {
    console.error('Application error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  const apps = readApplications()
  return NextResponse.json({ count: apps.length, applications: apps })
}
