import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import styles from "./RegisteredEmails.module.scss";
import useAdmin from "../../../apis/useAdmin";
import Button from "../../../components/Button/Button";

const RegisteredEmails = () => {
  const { getRegisteredEmails } = useAdmin();

  const [emails, setEmails] = useState(null);
  useEffect(() => {
    getRegisteredEmails((data) => {
      setEmails(
        data.data?.map((obj) => {
          return { mail: obj.email.toString() };
        })
      );
    });
  }, []);
  return (
    <div className={styles.registeredEmails}>
      {emails && (
        <CSVLink className={styles.downloadBtn} data={emails}>
          {" "}
          Download as CSV
        </CSVLink>
      )}
      <div className={styles.emails}>
        {emails?.map((email, index) => {
          return (
            <div className={styles.email} key={index}>
              <span>{index + 1}.</span>
              <span>{email.mail}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RegisteredEmails;
