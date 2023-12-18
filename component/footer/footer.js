"use client";

import styles from "./footer.module.css";
import Link from "next/link";
import Code from "./../code/code";

export default function Footer() {
  const contacts = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          dataSlot="icon"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      content: "palyi.kristof@gmail.com"
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          dataSlot="icon"
          className="w-6 h-6"
        >
          <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
          <path
            fillRule="evenodd"
            d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      content: "06-30-6677-899"
    }
  ];

  const socials = [
    {
      text: "Facebook",
      link: "https://www.facebook.com/palyikristof"
    },
    {
      text: "Instagram",
      link: "https://www.instagram.com/palyikristof/"
    },
    {
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/palyikristof/"
    },
    {
      text: "GitHub",
      link: "https://github.com/palyikristof"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.dataWrapper}>
        {contacts.map((contact, index) => {
          return (
            <div key={index} className={styles.contact}>
              {contact.svg}
              <p>
                {contact.content}
              </p>
            </div>
          );
        })}
      </div>
      <div className={styles.dataWrapper}>
        {socials.map((social, index) => {
          return (
            <div className={styles.links}>
              <Code text="socials" size="20px" />
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
              >
                {social.text}
              </Link>
              <Code text="socials" size="20px" isEnd={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
