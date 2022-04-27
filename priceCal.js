function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  let t = (ticknum+selectObj+eventId);
  return t;
  // ไม่เข้าใจว่าจะเอาค่าใน select boxมาคำนวณด้วยยังไง ลองหลายวิธีแล้วแต่ก็ไม่ได้+ใช้เวลานานเกินไป เลยไว้แค่นี้
}


