// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ],
    enrollStudent: function(sectionNum) {
    const sectionIndex = this.sections.findIndex(section => section.sectionNum === sectionNum);
    if (sectionIndex !== -1) {
      this.sections[sectionIndex].enrolled += 1;
      renderSections(this.sections);
    }
  },
  dropStudent: function(sectionNum) {
    const sectionIndex = this.sections.findIndex(section => section.sectionNum === sectionNum);
    if (sectionIndex !== -1) {
      this.sections[sectionIndex].enrolled -= 1;
      renderSections(this.sections);
    }
  }
};

function setCourseInfo(course) {
  const courseName = document.querySelector("#courseName");
  const coursecode = document.querySelector("#courseCode");
  courseName.textContent = course.name;
  coursecode.textContent = course.code;
}

function renderSections(sections) {
    const table = document.querySelector('#sections');
    table.innerHTML = '';
    sections.forEach(section => {
    const row = document.createElement('tr');

    const sectionNumCell = document.createElement('td');
    sectionNumCell.textContent = section.sectionNum;
    row.appendChild(sectionNumCell);

    const roomNumCell = document.createElement('td');
    roomNumCell.textContent = section.roomNum;
    row.appendChild(roomNumCell);

    const enrolledCell = document.createElement('td');
    enrolledCell.textContent = section.enrolled;
    row.appendChild(enrolledCell);

    const daysCell = document.createElement('td');
    daysCell.textContent = section.days;
    row.appendChild(daysCell);

    const instructorCell = document.createElement('td');
    instructorCell.textContent = section.instructor;
    row.appendChild(instructorCell);

    table.appendChild(row);
  });
}

document.querySelector('#enrollStudent').addEventListener('click', function() {
  const sectionNum = parseInt(document.querySelector('#sectionNumber').value);
  aCourse.enrollStudent(sectionNum);
});

document.querySelector('#dropStudent').addEventListener('click', function() {
  const sectionNum = parseInt(document.querySelector('#sectionNumber').value);
  aCourse.dropStudent(sectionNum);
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);