function generateResume() {
    const template = document.getElementById('templateSelect').value;
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    let resumeHTML = '';

    if (template === 'template1') {
        resumeHTML = `
            <h2>${name}</h2>
            <p><strong>Contact:</strong> ${contact}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Work Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
    } else if (template === 'template2') {
        resumeHTML = `
            <h1>${name}</h1>
            <p><i>${contact}</i></p>
            <h2>Education</h2>
            <ul><li>${education}</li></ul>
            <h2>Experience</h2>
            <ul><li>${experience}</li></ul>
            <h2>Skills</h2>
            <ul><li>${skills}</li></ul>
        `;
    }

    document.getElementById('resumePreview').innerHTML = resumeHTML;
}

function downloadPDF() {
    const doc = new jsPDF();
    const resumeContent = document.getElementById('resumePreview').innerHTML;
    doc.fromHTML(resumeContent, 15, 15, {
        'width': 170
    });
    doc.save('resume.pdf');
}
