import React from "react";
import Styles from "../../styles/contacts.module.css";
import ContactCard from "../../components/ContactCard";
import { secyData } from "../../data/secyData";
export default function Secretaries() {
  return (
    <div>
      <h2 className={Styles.postHeading}>Secretaries</h2>
      <div className={Styles.multipleCards}>
        {secyData.data.map((member, index) => {
          return (
            <ContactCard
              name={member.Name}
              designation={member.Post}
              email={member.Email}
              imgSrc={`../../data/images/secyImages/${member.RollNo}.png`}
            />
          );
        })}
      </div>
    </div>
  );
}