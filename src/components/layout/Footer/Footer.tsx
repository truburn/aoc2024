import Link from "@components/Link";
import { useFooterClasses } from "@layout/Footer";

export function Footer() {
  const classes = useFooterClasses();

  return (
    <footer className={classes.root}>
      <div>
        <i className="fa-light fa-copyright" />
        Copyright 2024{" "}
        <Link
          to="https://www.jsburn.com/"
          external
          title="View my work"
          className={classes.link}
        >
          Jenny Seburn
        </Link>
      </div>
      <div>
        <Link
          to="https://github.com/truburn/aoc2024"
          external
          title="View GitHub Repository"
          className={classes.link}
        >
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link
          to="https://www.linkedin.com/in/jenniferseburn"
          external
          title="Connect on LinkedIn"
          className={classes.link}
        >
          <i className="fa-brands fa-linkedin"></i>
        </Link>
      </div>
    </footer>
  );
}
