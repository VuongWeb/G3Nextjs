/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/About.module.css";
type Props = {};

const About = (props: Props) => {
  return (
    <main>
      <div className={style.About_page}>
        <div className={style.banner}>
          <img
            className=" w-[100%]"
            src="https://cdn.shopify.com/s/files/1/0456/5070/6581/files/574-GREY-DAY-HOME-BANNER_882X262_5d07350f-394b-4bb0-beb6-e67edc67ee96.jpg?v=1620808280"
            alt=""
          />
        </div>
      </div>
      <div className={style.text}>
        <p className="mt-10">About</p>
      </div>
      <div className={style.title}>
        <h1>Our New Balence History</h1>
      </div>
      <div className={style.info__about__page}>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth.
        </p>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth.
        </p>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth.
        </p>
      </div>
    </main>
  );
};

export default About;
