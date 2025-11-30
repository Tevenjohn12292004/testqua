function scanAttendance() {
    let id = document.getElementById("studentId").value;
    if (id.trim() === "") {
        alert("Enter a valid Student ID!");
        return;
    }
    let now = new Date();
    let record = {
        studentId: id,
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString()
    };
    let attendance = JSON.parse(localStorage.getItem("attendance")) || [];
    attendance.push(record);
    localStorage.setItem("attendance", JSON.stringify(attendance));
    alert("Attendance recorded!");
    document.getElementById("studentId").value = "";
}

function loadAttendance() {
    let attendance = JSON.parse(localStorage.getItem("attendance")) || [];
    let tbody = document.querySelector("#attendanceTable tbody");
    attendance.forEach(rec => {
        tbody.innerHTML += `<tr>
            <td>${rec.studentId}</td>
            <td>${rec.date}</td>
            <td>${rec.time}</td>
        </tr>`;
    });
}