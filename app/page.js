"use client";

import { HomeIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./page.module.css";

const LINK = { name: "Dashboard", href: "/dashboard", icon: HomeIcon };

export default function Home() {
  const pathname = usePathname();
  const LinkIcon = LINK.icon;
  return (
    <main className={styles.main}>
      <nav>
        <ul className={styles.nav_list}>
          <li>
            <Link
              key={LINK.name}
              href={LINK.href}
              className={clsx(styles.nav_item, {
                "bg-sky-100 text-blue-600": pathname === LINK.href,
              })}
            >
              <LinkIcon className={styles.nav_item_icon} />
              <p className="hidden md:block">{LINK.name}</p>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
