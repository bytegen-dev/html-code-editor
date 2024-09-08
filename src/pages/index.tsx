import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import { FaArrowRight, FaCss3, FaGithub, FaGlobe, FaHtml5, FaJs } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`page home`}
      >
        <section className="heading">
          <p>
            welcome dev<span className="animate">_</span>
          </p>
        </section>
        <section>
          <h1>
            minimal <span>Code</span> Editor
          </h1>
        </section>
        <section className="languages">
          <div className="language">
            <FaHtml5 />
          </div>
          <div className="language">
            <FaCss3 />
          </div>
          <div className="language">
            <FaJs />
          </div>
        </section>
        <section className="button-holder">
          <Link className="button outline" href={`/workspace/create`}>
            Get Started <FaArrowRight className="circular" />
          </Link>
        </section>
        <div className="bottom-fixed">
          <a href="https://bytegen.dev" target="_blank" className="link">
            <FaGlobe />
          </a>
          <a href="https://github.com/bytegen-dev" target="_blank" className="link">
            <FaGithub />
          </a>
          <a href="https://x.com/bytegen_dev" target="_blank" className="link">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </>
  );
}