student_list.sort((a, b) => a.age_in_days - b.age_in_days);
console.log("Danh sách sinh viên theo thứ tự số tuổi tăng dần:");
for (const student of student_list) {
  console.log(`- ${student.full_name}: ${student.age_in_years} tuổi (${student.age_in_days} ngày)`);
}
console.log(`Kích thước màn hình: ${window.innerWidth} x ${window.innerHeight} pixel`);