/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import useNews from "../../hook/useNews";
import { TNews } from "../../models/news";
import style from "../../styles/news.module.css";
type Props = {};

const News = (props: Props) => {

  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useNews();

  if (!data) return <div className='text-center p-12 text-2xl text-[32px]'>Loading ...</div>
  if (error) return <div className='text-center p-12 text-2xl text-[32px]'>Faild to load</div>
  return (
    <main>
      <div className={style.news_page}>
      <div className={style.news_1} >
        {data.map((item: TNews, index: number) => (
          
            <div key={index}>
              <a href="">
                <img src={item?.img.toString()} alt="" />
              </a>
              <h3>{item.title}</h3>
              <p>
                {item.description}
              </p>
            </div>

         
        ))}
         </div>

        <div className={style.button_newspage}> <button>See more</button></div>
      </div>
    </main>
  );
};

export default News;
