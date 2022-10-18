function send() {
    let msg = document.getElementById("output").value
    if(msg == '') return alert('Error กรุณาใส่ข้อความที่จะส่ง')
    let Webhook = 'https://discord.com/api/webhooks/1031864990367494205/-wTu3ggR7X5MmPM_BDR_c-XmT9VtC6NHrzCWhrVOkWn16VOJfRt-IKxBVmmztl33pyJJ'
    const postRequest = new XMLHttpRequest();
    postRequest.open("POST", Webhook);
    postRequest.setRequestHeader("Content-type", "application/json");
    const params = {
        username: "LOG MESSAGE",
        content:`\`\`\`yaml\n${msg}\n\`\`\``,
    }
    postRequest.send(JSON.stringify(params))
    alert('ส่งข้อความสำเร็จ!')
    document.getElementById("output").reset()
};