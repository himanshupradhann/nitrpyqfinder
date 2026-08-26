const generateLink = (subject,year,semester,examType) => {
    if (!subject || !year) return alert("Bhosdi ke, भोसड़ी , ଭୋସଡି କେ , 请填写所有必填字段。, போஸ்டி கே , ഭോസ്ഡി കെ");

    let yearPart = "";

    if (semester === "Summer") {
      yearPart = `${year} (${semester})`;
    } else {
      const nextYear = parseInt(year) + 1;
      yearPart = `${year}-${nextYear.toString().slice(-2)} (${semester})`;
    }

    const url = `https://eapplication.nitrkl.ac.in/nitris/docs/Examination/QuestionPaperUpload/${encodeURIComponent(
      yearPart
    )}/${examType}%20Semester/${subject.toUpperCase()}.pdf`;

    return url;
  };
  export default generateLink;