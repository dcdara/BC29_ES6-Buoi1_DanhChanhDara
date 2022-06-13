const getEle = (id) => document.getElementById(id);

//Ham tinh diem trung binh
tinhDTB = (...diem) => {
    let dtb = 0;
    return (
        diem.map((diem) => {
            dtb += parseFloat(diem);
        }),
        (dtb / diem.length)
    );
},
    getEle("btnKhoi1").onclick = () => {
        let toan = getEle("inpToan").value;
            ly = getEle("inpLy").value;
            hoa = getEle("inpHoa").value;
        getEle("tbKhoi1").innerHTML = tinhDTB(toan, ly, hoa);
    },

    getEle("btnKhoi2").onclick = () => {
        let van = getEle("inpVan").value;
            su = getEle("inpSu").value;
            dia = getEle("inpDia").value;
            engLish = getEle("inpEnglish").value;
        getEle("tbKhoi2").innerHTML = tinhDTB(van, su, dia, engLish);
    };