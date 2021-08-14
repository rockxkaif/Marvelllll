import React from "react";
import Card from "./Movies";
import Series from "./series";
const Body = () => {
  const youtubelink = {
    ironman: "https://www.youtube.com/embed/KAE5ymVLmZg",
    hulk:"https://www.youtube.com/embed/xbqNb2PFKKA",
    ironman2:"https://www.youtube.com/embed/BoohRoVA9WQ",
    ironman3:"https://www.youtube.com/embed/zoWMW2O2rzc",
    thor:"https://www.youtube.com/embed/JOddp-nlNvQ",
    thor2:"https://www.youtube.com/embed/npvJ9FTgZbM",
    thor3:"https://www.youtube.com/embed/ue80QwXMRHg",
    captainamerica:"https://www.youtube.com/embed/JerVrbLldXw",
    captainamerica2:"https://www.youtube.com/embed/7SlILk2WMTI",
    captainamerica3:"https://www.youtube.com/embed/dKrVegVI0Us",
    avenger:"https://www.youtube.com/embed/eOrNdBpGMv8",
    avenger2:"https://www.youtube.com/embed/tmeOjFno6Do",
    avenger3:"https://www.youtube.com/embed/6ZfuNTqbHE8",
    avenger4:"https://www.youtube.com/embed/TcMBFSGVi1c",
    antman:"https://www.youtube.com/embed/pWdKf3MneyI",
    antman2:"https://www.youtube.com/embed/8_rTIAOohas",
    doctorstrange:"https://www.youtube.com/embed/HSzx-zryEgM",
    Guardians:"https://www.youtube.com/embed/d96cjJhvlMA",
    Guardians2:"https://www.youtube.com/embed/wUn05hdkhjM",
    spiderman:"https://www.youtube.com/embed/39udgGPyYMg",
    spiderman2:"https://www.youtube.com/embed/VUFmhKpZKlE",
    blackpanther:"https://www.youtube.com/embed/xjDjIWPwcPU",
    captainmarvel:"https://www.youtube.com/embed/0LHxvxdRnYc",
    blackwidow: "https://www.youtube.com/embed/Fp9pNPdNwjI",
    
  };

  return (
    <div className="bg-dark">
      <div className="container-fluid bg-danger text-light p-4 text-center ">
        <h1>Watch All Marvel Movies on Disney+ Hotstar</h1>
      </div>
      <div
        className="container-fluid   p-3 mb-5"
        style={{ background: "#fff" }}
      >
        <div className="row">
          <div className="col">
            <Card
              img="https://mypostercollection.com/wp-content/uploads/2018/08/Iron-Man-Poster-2008-MyPosterCollection.com-3-683x1024.jpg"
              title="Iron Man"
              id="a"
              date="2008/05/02"
              ytlink={youtubelink.ironman}
            />
          </div>
          <div className="col">
            <Card
              img="https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg"
              title="The Incredible Hulk"
              date="2008/06/13"
              id="b"
              ytlink={youtubelink.hulk}
            />
          </div>
          <div className="col">
            <Card
              img="https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg"
              title="Iron Man 2"
              id="c"
              date="2010/05/07"
              ytlink={youtubelink.ironman2}
            />
          </div>
          <div className="col">
            <Card
              img="https://m.media-amazon.com/images/I/81J92wTovHL._AC_SY741_.jpg"
              title="Thor"
              id="d"
              date="2011/05/06"
              ytlink={youtubelink.thor}
            />
          </div>
          <div className="col">
            <Card
              img="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e5b711eb334a692f7be29efaf18eafdb_efa9d9c1-09e6-49a6-aff4-0d2d2d9571a5_480x.progressive.jpg?v=1573584624"
              title="Captain America: The First Avenger"
              id="e"
              date="2011/07/22"
              ytlink={youtubelink.captainamerica}
            />
          </div>
          <div className="col">
            <Card
              img="https://m.media-amazon.com/images/I/719SFBdxRtL._AC_SL1000_.jpg"
              title="The Avengers"
              id="f"
              date="2012/05/04"
              ytlink={youtubelink.avenger}
            />
          </div>
          <div className="col">
            <Card
              img="https://collider.com/wp-content/uploads/iron-man-3-international-poster1.jpg"
              id="g"
              title="Iron Man 3"
              date="2013/05/03"
              ytlink={youtubelink.ironman3}
            />
          </div>
          <div className="col">
            <Card
              img="https://media.comicbook.com/wp-content/uploads/2013/09/Thor_Un_Mundo_Oscuro_Poster_Latino_ex_JPosters.jpg"
              title="Thor: The Dark World"
              id="h"
              date="2013/11/08"
              ytlink={youtubelink.thor2}
            />
          </div>
          <div className="col">
            <Card
              img="http://cdn.shopify.com/s/files/1/0037/8008/3782/products/Captain_America_-_The_Winters_Soldier_-_Int_Advance_One_Sheet-2-725754_1200x1200.jpg?v=1611687839"
              title="Captain America: The Winter Soldier"
              id="i"
              date="2014/04/04"
              ytlink={youtubelink.captainamerica2}
            />
          </div>
          <div className="col">
            <Card
              img="https://m.media-amazon.com/images/I/71lbFfxfMtL._AC_SY741_.jpg"
              title="Guardians of the Galaxy"
              id="j"
              date="2014/08/01"
              ytlink={youtubelink.Guardians}
            />
          </div>
          <div className="col">
            <Card
              img="https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg"
              title="Avengers: Age of Ultron"
              id="x"
              date="2015/05/01"
              ytlink={youtubelink.avenger2}
            />
          </div>
          <div className="col">
            <Card
              img="https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg"
              title="Ant-Man"
              id="k"
              date="2015/07/17"
              ytlink={youtubelink.antman}
            />
          </div>
          <div className="col">
            <Card
              img="https://i.pinimg.com/originals/46/05/c3/4605c3ad7ac5e92998ea80f57209ba4f.jpg"
              title="	Captain America: Civil War"
              id="l"
              date="2016/05/06"
              ytlink={youtubelink.captainamerica3}
            />
          </div>
          <div className="col">
            <Card
              img="https://mypostercollection.com/wp-content/uploads/2019/08/doctor-strange-2.jpg"
              title="Doctor Strange"
              id="m"
              date="2016/11/04"
              ytlink={youtubelink.doctorstrange}
            />
          </div>
          <div className="col">
            <Card
              img="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_.jpg"
              title="Guardians of the Galaxy Vol. 2"
              id="n"
              date="2017/05/05"
              ytlink={youtubelink.Guardians2}
            />
          </div>
          <div className="col">
            <Card
              img="https://mypostercollection.com/wp-content/uploads/2018/07/Spider-Man-Homecoming-Printable-Posters-MyPosterCollection.com-27.jpg"
              title="Spider-Man: Homecoming"
              id="o"
              date="2017/07/07"
              ytlink={youtubelink.spiderman}
            />
          </div>
          <div className="col">
            <Card
              img="https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg"
              title="	Thor: Ragnarok"
              id="p"
              date="2017/11/03"
              ytlink={youtubelink.thor3}
            />
          </div>
          <div className="col">
            <Card
              img="https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg"
              title="Black Panther"
              id="q"
              date="2018/02/16"
              ytlink={youtubelink.blackpanther}
            />
          </div>
          <div className="col">
            <Card
              img="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
              title="The Avengers: Infinity War"
              date="2018/04/27"
              id="r"
              ytlink={youtubelink.avenger3}
            />
          </div>
          <div className="col">
            <Card
              img="https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
              title="Ant-Man And The Wasp"
              date="2018/07/06"
              id="s"
              ytlink={youtubelink.antman2}
            />
          </div>
          <div className="col">
            <Card
              img="https://cdn.europosters.eu/image/750/posters/captain-marvel-epic-i71851.jpg"
              title="Captain Marvel"
              id="t"
              date="2019/03/08"
              ytlink={youtubelink.captainmarvel}
            />
          </div>
          <div className="col">
            <Card
              img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg"
              title="The Avengers: Endgame"
              id="u"
              date="2019/04/26"
              ytlink={youtubelink.avenger4}
            />
          </div>
          <div className="col">
            <Card
              img="https://media.comicbook.com/2019/08/spiderman-1185098.jpeg?auto=webp&width=500&height=738&crop=500:738,smart"
              title="Spider-Man Far From Home"
              date="2019/07/05"
              id="v"
              ytlink={youtubelink.spiderman2}
            />
          </div>
          <div className="col">
            <Card
              img="https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
              title="Black Widow"
              id="w"
              date="2021/07/09"
              ytlink={youtubelink.blackwidow}
            />
        </div>

       
        </div>
      </div>

      <div className="container-fluid bg-danger  text-light p-4 text-center">
        <h1>Watch All Series of Marvel on Disney+ Hotstar</h1>
      </div>

      <Series
        name="Wanda Vision"
        img="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/02/EtJXFJyVEAER0n3.jpeg"
        text="WandaVision premiered with its first two episodes on January 15, 2021, and ran for nine episodes, concluding on March 5. It is the first series, and beginning, of Phase Four of the MCU. The series received praise from critics for its sitcom settings and tropes, dark tonal shifts, and the performances of Olsen, Bettany, and Hahn. It was widely discussed and analyzed by fans based on various popular theories and perceived mysteries, as well as for its use of sitcom references and exploration of grief. The series received 23 Primetime Emmy Awards nominations, among other accolades. WandaVision serves as a direct set up to the film Doctor Strange in the Multiverse of Madness (2022), in which Olsen reprises her role as Maximoff."
      />

      <Series
        name="Falcon and the Winter Soldier"
        img="https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_.jpg"
        text="The Falcon and the Winter Soldier premiered on March 19, 2021, and ran for six episodes until April 23. It is part of Phase Four of the MCU. The series received positive reviews, with critics highlighting the actors' chemistry and the series' social commentary, but criticizing its pacing. A fourth Captain America film is in development as a continuation of the series."
      />

      <Series
        name="Loki"
        img="https://terrigen-cdn-dev.marvel.com/content/prod/1x/online_9.jpg"
        text="Loki is an American television series created by Michael Waldron for the streaming service Disney+, based on Marvel Comics featuring the character of the same name. It is the third television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, sharing continuity with the films of the franchise. The series takes place after the events of the film Avengers: Endgame (2019), in which an alternate version of Loki created a new timeline. Waldron serves as head writer, with Kate Herron directing for the first season.
      
     Loki premiered on June 9, 2021. Its first season, consisting of six episodes, concluded on July 14 and is part of Phase Four of the MCU. It received positive reviews, with praise for the performances, musical score, and visuals. A second season is in development"
      />

      <Series
        name="WHAT IF"
        img="https://media.comicbook.com/2021/07/marvel-what-if-tv-series-poster-official-disney-plus-1274908.jpeg?auto=webp&width=1280&height=1897&crop=1280:1897,smart"
        text="What If...? is an upcoming American animated anthology series created by A.C. Bradley for the streaming service Disney+, based on the Marvel Comics series of the same name. It is intended to be the fourth television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, and the studio's first animated series. The series explores alternate timelines in the multiverse that show what would happen if major moments from the MCU films occurred differently. Bradley serves as head writer with Bryan Andrews directing."
      />
    </div>
  );
};

export default Body;
