// seedSubjects.js
import { Pool } from 'pg';
import dotenv from 'dotenv';
import cuid from 'cuid';    // npm install cuid

dotenv.config();

const subjectsDataRaw = [
  // Semester 1
  { name: 'Mathematics for Computing 1', semester: 1 },
  { name: 'Computational Physics', semester: 1 },
  { name: 'Problem Solving & C Programming', semester: 1 },
  { name: 'Elements of Computing Systems 1', semester: 1 },
  { name: 'Discrete Mathematics', semester: 1 },
  { name: 'Foundations of Indian Heritage', semester: 1 },
  { name: 'Technical Communication', semester: 1 },
  { name: 'Mastery Over Mind (MAOM)', semester: 1 },

  // Semester 2
  { name: 'Mathematics for Computing 2', semester: 2 },
  { name: 'Object Oriented Programming in Java', semester: 2 },
  { name: 'Data Structures & Algorithms 1', semester: 2 },
  { name: 'Elements of Computing Systems - 2', semester: 2 },
  { name: 'Introduction to Electrical and Electronics Engineering', semester: 2 },
  { name: 'User Interface Design', semester: 2 },
  { name: 'Glimpses of Glorious India', semester: 2 },

  // Semester 3
  { name: 'Mathematics for Computing 3', semester: 3 },
  { name: 'Fundamentals of AI', semester: 3 },
  { name: 'Operating Systems', semester: 3 },
  { name: 'Data Structures & Algorithms 2', semester: 3 },
  { name: 'Introduction to Computer Networks', semester: 3 },
  { name: 'Introduction to Python', semester: 3 },
  { name: 'Intelligence of Biological Systems - 1', semester: 3 },

  // Semester 4
  { name: 'Mathematics for Computing 4', semester: 4 },
  { name: 'Introduction to Communication & IoT', semester: 4 },
  { name: 'Design and Analysis of Algorithms', semester: 4 },
  { name: 'Machine Learning', semester: 4 },
  { name: 'Introduction to AI Robotics', semester: 4 },
  { name: 'Intelligence of Biological Systems 2', semester: 4 },
  { name: 'Environmental Science', semester: 4 },
  { name: 'Soft Skills I', semester: 4 },

  // Semester 5
  { name: 'Probabilistic Reasoning', semester: 5 },
  { name: 'Formal language and Automata', semester: 5 },
  { name: 'Database Management Systems', semester: 5 },
  { name: 'Deep Learning', semester: 5 },
  { name: 'Introduction to Cloud Computing', semester: 5 },
  { name: 'Soft Skills II', semester: 5 },

  // Semester 6
  { name: 'Software Engineering (Project-Based)', semester: 6 },
  { name: 'Big Data Analytics', semester: 6 },
  { name: 'Computer Vision & Image Processing', semester: 6 },
  { name: 'Computer Security', semester: 6 },
  { name: 'Natural Language Processing', semester: 6 },
  { name: 'Soft Skills III', semester: 6 },

  // Semester 7
  { name: 'Reinforcement Learning', semester: 7 },
  { name: 'Indian Constitution', semester: 7 },
];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const client = await pool.connect();

  try {
    console.log('→ BEGIN TRANSACTION');
    await client.query('BEGIN');

    // 1) Look up the AIE department
    const dept = await client.query(
      `SELECT id FROM "Department" WHERE name = $1`,
      ['AIE']
    );
    if (dept.rowCount === 0) {
      throw new Error('Department "AIE" not found. Create it first.');
    }
    const aieDeptId = dept.rows[0].id;
    console.log(`→ AIE dept id = ${aieDeptId}`);

    // 2) Wipe out any existing subjects for AIE
    await client.query(
      `DELETE FROM "Subject" WHERE "departmentId" = $1`,
      [aieDeptId]
    );
    console.log('→ Deleted existing Subject rows for AIE');

    // 3) Insert _all_ entries
    for (const { name, semester } of subjectsDataRaw) {
      const id = cuid();
      await client.query(
        `INSERT INTO "Subject"(id, name, semester, "departmentId")
         VALUES ($1, $2, $3, $4)`,
        [id, name, semester, aieDeptId]
      );
      console.log(`   • [sem ${semester}] ${name}`);
    }

    await client.query('COMMIT');
    console.log('✅ Seed complete!');
  } catch (err) {
    console.error('❌ Error:', err);
    await client.query('ROLLBACK');
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch(console.error);
