import React, { useState, useEffect } from "react";
import generateLink  from "../utilities/generateUrl";
import { styles } from "./styles";
import { subjects } from "../data/subjects"
function Form() {
    const [subject, setSubject] = useState("");
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("Spring");
    const [examType, setExamType] = useState("End");
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredSubjects, setFilteredSubjects] = useState([]);


    {/* handle Generate Link */}
      const handleGenerate = () => {
        const url = generateLink(subject, year, semester , examType);
        window.open(url);
    };
    {/* closes the subject dropdown*/}
      useEffect(() => {
        const handleClickOutside = () => setShowDropdown(false);
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
      }, []);

    return (
        <div style={styles.form}>
            {/* SUBJECT INPUT + DROPDOWN */}
            <div onClick={(e) => e.stopPropagation()}>
                <input
                    placeholder="Subject Code or Name"
                    value={subject}
                    onChange={(e) => {
                        const value = e.target.value;
                        setSubject(value);

                        if (value.trim() !== "") {
                            const filtered = subjects.filter(
                                (sub) =>
                                    sub.code.toLowerCase().includes(value.toLowerCase()) ||
                                    sub.name.toLowerCase().includes(value.toLowerCase())
                            );

                            setFilteredSubjects(filtered);
                            setShowDropdown(true);
                        } else {
                            setShowDropdown(false);
                        }
                    }}
                    onFocus={() => subject && setShowDropdown(true)}
                    style={styles.input1}
                />

                {showDropdown && (
                    <div style={styles.dropdown}>
                        {filteredSubjects.length > 0 ? (
                            filteredSubjects.map((sub, index) => (
                                <div
                                    key={index}
                                    style={styles.dropdownItem}
                                    onClick={() => {
                                        setSubject(sub.code);
                                        setShowDropdown(false);
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.background = "#00f0ff22")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.background = "transparent")
                                    }
                                >
                                    <div style={styles.code}>{sub.code}</div>
                                    <div style={styles.name}>{sub.name}</div>
                                </div>
                            ))
                        ) : (
                            <div style={styles.noResult}>No subjects found in the dataset but still can be searchable</div>
                        )}
                    </div>
                )}
            </div>

            {/* YEAR */}
            <input
                placeholder="Year (2023)"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                style={styles.input1}
            />

            {/* SEMESTER */}
            <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                style={styles.input}
            >
                <option>Spring</option>
                <option>Autumn</option>
                <option>Summer</option>
            </select>

            {/* EXAM TYPE */}
            <select
                value={examType}
                onChange={(e) => setExamType(e.target.value)}
                style={styles.input}
            >
                <option>End</option>
                <option>Mid</option>
            </select>

            <button onClick={handleGenerate} style={styles.button}>
                OPEN PAPER
            </button>
        </div>
    );
}

export default Form