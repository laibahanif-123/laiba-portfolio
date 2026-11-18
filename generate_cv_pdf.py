import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.units import inch

def generate_pdf():
    pdf_path = os.path.join(os.path.dirname(__file__), 'client', 'public', 'Laiba_Hanif_CV.pdf')
    os.makedirs(os.path.dirname(pdf_path), exist_ok=True)
    
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    primary_color = colors.HexColor('#1E293B')
    accent_blue = colors.HexColor('#2563EB')
    gray_text = colors.HexColor('#475569')
    light_border = colors.HexColor('#E2E8F0')

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=primary_color,
        alignment=0
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=accent_blue,
        alignment=0
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=gray_text,
        alignment=0
    )

    heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=accent_blue,
        spaceAfter=4,
        textTransform='uppercase'
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=primary_color
    )

    bold_item = ParagraphStyle(
        'BoldItem',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=primary_color
    )

    sub_item = ParagraphStyle(
        'SubItem',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11,
        textColor=gray_text
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        leftIndent=12,
        textColor=colors.HexColor('#334155')
    )

    elements = []

    # Header
    elements.append(Paragraph("LAIBA HANIF", title_style))
    elements.append(Spacer(1, 2))
    elements.append(Paragraph("Software Engineering Student | MERN Stack Developer", subtitle_style))
    elements.append(Spacer(1, 4))
    
    contact_text = (
        "Mian Channu, Punjab, Pakistan &nbsp;|&nbsp; "
        "Phone: +92 312 4850025 &nbsp;|&nbsp; "
        "Email: laibahanif0909@gmail.com<br/>"
        "LinkedIn: linkedin.com/in/laibahanif-b42a7035b &nbsp;|&nbsp; "
        "GitHub: github.com/laibahanif-123"
    )
    elements.append(Paragraph(contact_text, contact_style))
    elements.append(Spacer(1, 6))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=accent_blue, spaceAfter=8, spaceBefore=2))

    # Professional Summary
    elements.append(Paragraph("PROFESSIONAL SUMMARY", heading_style))
    summary_text = (
        "Dedicated Software Engineering student (2023–2027) at COMSATS University Islamabad, Sahiwal Campus, "
        "with hands-on full-stack development experience across three professional internships and academic systems. "
        "Proficient in modern web technologies including React.js, Node.js, Express.js, MongoDB, JavaScript, and Tailwind CSS. "
        "Currently architecting PakTeeth, an intelligent Dental Clinic Management System featuring automated appointment workflows and "
        "AI-assisted X-ray pathology analysis as my Final Year Project (FYP). Seeking a software engineering internship or junior developer role "
        "to contribute to high-impact web products and scalable distributed architectures."
    )
    elements.append(Paragraph(summary_text, body_style))
    elements.append(Spacer(1, 8))

    # Technical Skills
    elements.append(Paragraph("TECHNICAL SKILLS", heading_style))
    skills_data = [
        [
            Paragraph("<b>Frontend & UI:</b>", bold_item),
            Paragraph("React.js, JavaScript (ES6+), Tailwind CSS, Bootstrap 5, HTML5, CSS3, Responsive Design", body_style)
        ],
        [
            Paragraph("<b>Backend & APIs:</b>", bold_item),
            Paragraph("Node.js, Express.js, RESTful APIs, Python (FastAPI), PHP", body_style)
        ],
        [
            Paragraph("<b>Databases:</b>", bold_item),
            Paragraph("MongoDB (Mongoose), MySQL, Database Schema Design, Data Modeling", body_style)
        ],
        [
            Paragraph("<b>Tools & Practices:</b>", bold_item),
            Paragraph("Git, GitHub, VS Code, Postman, Electron, Object-Oriented Programming (OOP), Web Security (SQLi/XSS Prevention)", body_style)
        ],
        [
            Paragraph("<b>Core CS:</b>", bold_item),
            Paragraph("Data Structures & Algorithms, C++, Java, Software Requirements & Architecture", body_style)
        ]
    ]
    t = Table(skills_data, colWidths=[120, 420])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 8))

    # Experience
    elements.append(Paragraph("WORK EXPERIENCE", heading_style))
    
    # Job 1
    exp1_head = [
        [Paragraph("<b>Full Stack Development Intern</b> | Tech Step IT Training Center / Software House", bold_item), Paragraph("<b>Jul – Sep 2026</b>", ParagraphStyle('Right', parent=bold_item, alignment=2))]
    ]
    t1 = Table(exp1_head, colWidths=[400, 140])
    t1.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    elements.append(t1)
    elements.append(Paragraph("• Gained practical experience in frontend and backend development, building and testing web applications with REST APIs, database integration, and responsive design.", bullet_style))
    elements.append(Paragraph("• Collaborated in a software house environment, adhering to agile sprints, modular code reviews, and industry-standard version control.", bullet_style))
    elements.append(Spacer(1, 5))

    # Job 2
    exp2_head = [
        [Paragraph("<b>Full Stack Development Intern</b> | DevelopersHub Corporation <font color='#F59E0B'><b>(★ Best Award Winner)</b></font>", bold_item), Paragraph("<b>May – Jun 2026 (6 Weeks)</b>", ParagraphStyle('Right', parent=bold_item, alignment=2))]
    ]
    t2 = Table(exp2_head, colWidths=[400, 140])
    t2.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    elements.append(t2)
    elements.append(Paragraph("• Completed an intensive 6-week software engineering program with exceptional performance, recognized with the highest honor: <b>The Best Award</b>.", bullet_style))
    elements.append(Paragraph("• Developed and deployed full-stack web applications integrating React frontends with Node/Express backends and database management.", bullet_style))
    elements.append(Spacer(1, 5))

    # Job 3
    exp3_head = [
        [Paragraph("<b>Frontend Web Development Intern</b> | Elevvo Pathways", bold_item), Paragraph("<b>Sep 2025 (1 Month)</b>", ParagraphStyle('Right', parent=bold_item, alignment=2))]
    ]
    t3 = Table(exp3_head, colWidths=[400, 140])
    t3.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    elements.append(t3)
    elements.append(Paragraph("• Built responsive, accessible UI components using HTML5, CSS3, and modern JavaScript, optimizing user experience across mobile and desktop devices.", bullet_style))
    elements.append(Paragraph("• Collaborated with team members to refine frontend workflows with mentorship on clean, maintainable, component-driven design.", bullet_style))
    elements.append(Spacer(1, 8))

    # Projects
    elements.append(Paragraph("FEATURED PROJECTS", heading_style))
    
    # Project 1
    p1 = [
        [Paragraph("<b>PakTeeth – Dental Clinic Management & AI System</b> | <i>Final Year Project (In Progress)</i>", bold_item), Paragraph("Electron, React, Node, Express, MongoDB, Python, YOLOv8", sub_item)]
    ]
    tp1 = Table(p1, colWidths=[330, 210])
    tp1.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    elements.append(tp1)
    elements.append(Paragraph("• Architecting a web & desktop system to digitize dental clinic workflows: patient electronic health records, automated scheduling, and invoicing.", bullet_style))
    elements.append(Paragraph("• Integrating AI-powered dental X-ray analysis leveraging YOLOv8 and FastAPI microservices for rapid diagnostic assistance.", bullet_style))
    elements.append(Spacer(1, 4))

    # Project 2
    p2 = [
        [Paragraph("<b>Soulmate – Modern Dating & Matchmaking Web App</b> | <i>Full Stack MERN</i>", bold_item), Paragraph("React.js, Node.js, Express.js, MongoDB, Socket.io, Tailwind", sub_item)]
    ]
    tp2 = Table(p2, colWidths=[330, 210])
    tp2.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    elements.append(tp2)
    elements.append(Paragraph("• Built an interactive dating platform with smart compatibility matching based on interests, age preferences, and geographic location.", bullet_style))
    elements.append(Paragraph("• Engineered real-time 1-on-1 instant messaging and notifications utilizing Socket.io, card swipe interactions, and JWT authentication.", bullet_style))
    elements.append(Spacer(1, 4))

    # Project 3
    p3 = [
        [Paragraph("<b>HR Portal & Attendance Management System</b> | <i>Enterprise HRMS</i>", bold_item), Paragraph("React.js, Node.js, Express.js, MongoDB, REST APIs, JWT", sub_item)]
    ]
    tp3 = Table(p3, colWidths=[330, 210])
    tp3.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    elements.append(tp3)
    elements.append(Paragraph("• Streamlined organizational HR & attendance workflows: employee directory, daily clock-in tracking, leave approval pipelines, and RBAC.", bullet_style))
    elements.append(Paragraph("• Automated payroll calculations, generated downloadable salary slips, and built real-time attendance analytics dashboards.", bullet_style))
    elements.append(Spacer(1, 8))

    # Education
    elements.append(Paragraph("EDUCATION", heading_style))
    edu_data = [
        [
            Paragraph("<b>Bachelor of Software Engineering (BS SE)</b><br/>COMSATS University Islamabad, Sahiwal Campus", bold_item),
            Paragraph("<b>2023 – 2027 (Currently Pursuing)</b><br/>Focus: Distributed Systems, MERN Stack, AI & Systems", ParagraphStyle('Right', parent=sub_item, alignment=2))
        ],
        [
            Paragraph("<b>Intermediate (Pre-Medical)</b><br/>Superior College, Mian Channu", bold_item),
            Paragraph("<b>2021 – 2023</b><br/>Biology, Physics & Chemistry", ParagraphStyle('Right', parent=sub_item, alignment=2))
        ],
        [
            Paragraph("<b>Matriculation (Science)</b><br/>Govt. Girls Model High School, Mian Channu", bold_item),
            Paragraph("<b>2019 – 2021</b><br/>Distinction in Science subjects", ParagraphStyle('Right', parent=sub_item, alignment=2))
        ]
    ]
    tedu = Table(edu_data, colWidths=[360, 180])
    tedu.setStyle(TableStyle([
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('TOPPADDING', (0,0), (-1,-1), 3),
    ]))
    elements.append(tedu)
    elements.append(Spacer(1, 8))

    # Certifications
    elements.append(Paragraph("CERTIFICATIONS & HONORS", heading_style))
    elements.append(Paragraph("• <b>Best Award & Certificate of Achievement</b> – Full Stack Development Internship, DevelopersHub Corporation (May–Jun 2026)", bullet_style))
    elements.append(Paragraph("• <b>Certificate of Achievement</b> – Full Stack Development Internship, Tech Step IT Training Center / Software House (Jul–Sep 2026)", bullet_style))
    elements.append(Paragraph("• <b>Certificate of Achievement</b> – Front-End Web Development Internship, Elevvo Pathways (Sep 2025)", bullet_style))

    doc.build(elements)
    print("CV PDF created successfully at:", pdf_path)

if __name__ == '__main__':
    generate_pdf()
