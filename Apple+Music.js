// const appleMusic = document.querySelector("apple-music-container");

// appleMusic.addEventListener("load", function () {
//   alert("Apple Music is loaded");
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const iframes = document.querySelectorAll("iframe[data-src]");
//   let currentIndex = 0;

//   function loadIframes() {
//     const batchSize = 1;
//     for (
//       let i = currentIndex;
//       i < currentIndex + batchSize && i < iframes.length;
//       i++
//     ) {
//       const iframe = iframes[i];
//       iframe.src = iframe.getAttribute("data-src");
//     }
//     currentIndex += batchSize;
//   }

//   // Load iframes every ? seconds
//   setInterval(() => {
//     if (currentIndex < iframes.length) {
//       loadIframes();
//     }
//   }, 500);

//   // Initial load
//   loadIframes();
// });



const appleMusic = [
    {
        artist: "A$AP Rocky",
        birthday: [{ month: "October", day: 3, year: 1988 }],
        songs: [
            {
                title: "D.M.B.",
                src: "https://embed.music.apple.com/us/music-video/d-m-b/1622413782"
            },
            {
                title: "F**kin' Problems (feat. Drake, 2 Chainz & Kendrick Lamar)",
                src: "https://embed.music.apple.com/us/music-video/f-kin-problems-feat-drake-2-chainz-kendrick-lamar/584098214"
            },
            {
                title: "Goldie",
                src: "https://embed.music.apple.com/us/music-video/goldie/1281276464"
            }
        ],
        
    },
    {
        artist: "Aaliyah",
        birthday: [{ month:"January", day: 16, year: 1979 }],
        songs: [
            {
                title: "Rock The Boat",
                src: "https://embed.music.apple.com/us/music-video/rock-the-boat/1585461561"
            }
        ]
    },
    {
        artist: "ABBA",
        birthday: [{ month: "April", day: 5, year: 1950 }, { month: "April", day: 25, year: 1945 }, { month: "December", day: 16, year: 1946 }, { month: "November", day: 15, year: 1945 }],
        songs: [
            {
                title: "Dancing Queen",
                src: "https://embed.music.apple.com/us/music-video/dancing-queen/1440982435"
            }
        ]
    },
    {
        artist: "Ace Hood",
        birthday: [{ month:"May", day: 11, year: 1988 }],
        songs: [
            {
                title: "Bugatti (feat. Future & Rick Ross)",
                src: "https://embed.music.apple.com/us/music-video/bugatti-feat-future-rick-ross/1444338055"
            },
            {
                title: "Hustle Hard (Remix) [feat. Rick Ross & Lil Wayne]",
                src: "https://embed.music.apple.com/us/music-video/hustle-hard-remix-feat-rick-ross-lil-wayne-video/1445753102"
            }
        ]
    },
    {
        artist: "Addison Rae",
        birthday: [{ month: "October", day: 6, year: 2000 }],
        songs: [
            {
                title: "Aquamarine",
                src: "https://embed.music.apple.com/us/music-video/aquamarine/1776001281"
            }
        ]
    },
    {
        artist: "Adele",
        birthday: [{ month: "May", day: 5, year: 1988 }],

        songs: [
            {
                title: "Easy On Me",
                src: "https://embed.music.apple.com/us/music-video/easy-on-me/1590364511"
            },
            {
                title: "Hello",
                src: "https://embed.music.apple.com/us/music-video/hello/1544490140"
            },
            {
                title: "I Drink Wine",
                src: "https://embed.music.apple.com/us/music-video/i-drink-wine/1651250399"
            },
            {
                title: "Oh My God",
                src: "https://embed.music.apple.com/us/music-video/oh-my-god/1604429663"
            },
            {
                title: "Someone Like You",
                src: "https://embed.music.apple.com/us/music-video/someone-like-you/471366076"
            }
        ]
    },
    {
        artist: "aespa",
        birthday: [{ month: "April", day: 11, year: 2000 },{ month: "October", day: 30, year: 2000 },{ month: "January", day: 1, year: 2001 },{ month: "October", day: 23, year: 2002 }],    
        songs: [
            {
                title: "Spicy",
                src: "https://embed.music.apple.com/us/music-video/spicy/1687220466"
            },
            {
                title: "Whiplash",
                src: "https://embed.music.apple.com/us/music-video/whiplash/1775679946"
            }
        ]
    },
    
   
    {
        artist: "Akon",
        birthday: [{ month: "April", day: 16, year: 1973 }],

        songs: [
            {
                title: "Don't Matter",
                src: "https://embed.music.apple.com/us/music-video/dont-matter/1446006069"
            },
            {
                title: "Smack That (feat. Eminem)",
                src: "https://embed.music.apple.com/us/music-video/smack-that-feat-eminem/1445893631"
            },
            {
                title: "Akon's Beautiful Day",
                src: "https://embed.music.apple.com/us/music-video/akons-beautiful-day/1771920539"
            }
        ]
        
    
    },
    {
        artist: "Akon & T-Pain",
        birthday: [{ month: "April", day: 16, year: 1973 } , { month: "September", day: 30, year: 1984 }],
        songs: [
            {
                title: "Bartender (feat. Akon)",
                src: "https://embed.music.apple.com/us/music-video/bartender-feat-akon/262804746"
            }
        ]
    },
   {
        artist: "Alabama",
        birthday: [{ month: "January", day: 22, year: 1952 }, { month: "December", day: 13, year: 1949 }],
        songs: [
            {
                title: "God Must Have Spent A Little More Time On You (feat. *NSYNC)",
                src: "https://embed.music.apple.com/us/music-video/god-must-have-spent-a-little-more-time-on-you-feat-nsync/275888624"
            }
        ]
    },
    {
        artist: "Alesso & Katy Perry",
        birthday: [{ month: "July", day: 7, year: 1991 }, { month: "October", day: 25, year: 1984 }],
        songs: [
            {
                title: "When I'm Gone",
                src: "https://embed.music.apple.com/us/music-video/when-im-gone/1603752492"
            }
        ]
    },
    {
        artist: "Alesso & Nate Smith",
        birthday: [{ month: "July", day: 7, year: 1991 } , { month: "September", day: 19, year: 1985 }],
        songs: [
            {
                title: "I Like It",
                src: "https://embed.music.apple.com/us/music-video/i-like-it/1756815859"
            }
        ]
    },
    {
        artist: "Alesso & Zara Larsson",
        birthday: [{ month: "July", day: 7, year: 1991 } , { month: "December", day: 16, year: 1997 }],
        songs: [
            {
                title: "Words",
                src: "https://embed.music.apple.com/us/music-video/words/1620620421"
            }
        ]
    },
    {
        artist: "Alexandra Stan",
        birthday: [{ month: "June", day: 10, year: 1989 }],
        songs: [
            {
                title: "Mr. Saxobeat",
                src: "https://embed.music.apple.com/us/music-video/mr-saxobeat/424917556"
            },
            {
                title: "1,000,000 (feat. Carlprit)",
                src: "https://embed.music.apple.com/us/music-video/1-000-000-feat-carlprit/502647964"
            }
        ]
    },

    {
        artist: "Alexandra Stan & MATTN",
        birthday: [{ month: "June", day: 10, year: 1989 }, { month: "December", day: 18, year: 1992 }], 
        songs: [
            {
                title: "Bitch Is Fire",
                src: "https://embed.music.apple.com/us/music-video/bitch-is-fire/1702028112"
            }
        ]
    },
    {
        artist: "Alicia Keys",
        birthday: [{ month: "January", day: 25, year: 1981 }],
        songs: [
            {
                title: "Brand New Me",
                src: "https://embed.music.apple.com/us/music-video/brand-new-me/587601423"
            },
            {
                title: "Doesn't Mean Anything",
                src: "https://embed.music.apple.com/us/music-video/doesnt-mean-anything/337973037"
            },
            {
                title: "How Come You Don't Call Me",
                src: "https://embed.music.apple.com/us/music-video/how-come-you-dont-call-me/454278660"
            },
            {
                title: "If I Ain't Got You",
                src: "https://embed.music.apple.com/us/music-video/if-i-aint-got-you/548916403"
            },
            {
                title: "LaLa (Unlocked) [feat. Swae Lee]",
                src: "https://embed.music.apple.com/us/music-video/lala-unlocked-feat-swae-lee/1587027578"
            },
            {
                title: "No One",
                src: "https://embed.music.apple.com/us/music-video/no-one/265677944"
            },
            {
                title: "Superwoman",
                src: "https://embed.music.apple.com/us/music-video/superwoman/285734147"
            },
            {
                title: "Teenage Love Affair",
                src: "https://embed.music.apple.com/us/music-video/teenage-love-affair/279662062"
            },
            {
                title: "Un-Thinkable (I'm Ready)",
                src: "https://embed.music.apple.com/us/music-video/un-thinkable-im-ready/372489642"
            },
            {
                title: "A Woman's Worth",
                src: "https://embed.music.apple.com/us/music-video/a-womans-worth/548915941"
            },
            {
                title: "You Don't Know My Name",
                src: "https://embed.music.apple.com/us/music-video/you-dont-know-my-name/1348934836"
            }
        ]
    },
 

    {
        artist: "Amerie",
        birthday: [{ month: "January", day: 12, year: 1980 }],
        songs: [
            {
                title: "Touch",
                src: "https://embed.music.apple.com/us/music-video/touch/1288834969"
            },
            {
                title: "Why Don't We Fall In Love",
                src: "https://embed.music.apple.com/us/music-video/why-dont-we-fall-in-love/327235997"
            },
            {
                title: "Why R U (Bonus Video)",
                src: "https://embed.music.apple.com/us/music-video/why-r-u-bonus-video/1445743818"
            },
            {
                title: "1 Thing",
                src: "https://embed.music.apple.com/us/music-video/1-thing/278170378"
            },

        ]
    },

    {
        artist: "Amil & Beanie Sigel",
        birthday: [{ month: "September", day: 19, year: 1973 }, { month: "March", day: 6, year: 1974 }],
        songs: [
            {
                title: "4 Da Fam (feat. Beanie Sigel, Memphis Bleek & Jay-Z)",
                src: "https://embed.music.apple.com/us/music-video/4-da-fam-feat-beanie-sigel-memphis-bleek-jay-z/327832309"
            }
        ]
    },

    {
        artist: "Anitta",
        birthday: [{ month: "March", day: 30, year: 1993 }],
        songs: [
    {
        title: "Girl from Rio (feat. DaBaby)",
        src: "https://embed.music.apple.com/us/music-video/girl-from-rio-feat-dababy/1570199195"
    },
]
    },

    {
        artist: "Anne-Marie",
        birthday: [{ month: "April", day: 7, year: 1991 }],
        songs: [
    {
        title: "To Be Young",
        src: "https://embed.music.apple.com/us/music-video/to-be-young-feat-doja-cat/1524291684"
    },
]
    },
    {
        artist: "Ari Lennox",
        birthday: [{ month: "March", day: 26, year: 1991 }],

        songs: [
    {
        title: "Get Close",
        src: "https://embed.music.apple.com/us/music-video/get-close/1715941906"
    },
]
    },

    {
        artist: "Ariana Grande",  
        birthday: [{ month: "June", day: 26, year: 1993 }],
        songs: [
    {
        title: "Break Free (feat. Zedd)",
        src: "https://embed.music.apple.com/us/music-video/break-free-feat-zedd/1445058651"
    },
    {
        title: "Break Up with Your Girlfriend, I'm Bored",
        src: "https://embed.music.apple.com/us/music-video/break-up-with-your-girlfriend-im-bored/1451875682"
    },
    {
        title: "Dangerous Woman",
        src: "https://embed.music.apple.com/us/music-video/dangerous-woman/1545270396"
    },
    {
        title: "Everyday (feat. Future)",
        src: "https://embed.music.apple.com/us/music-video/everyday-feat-future/1444610101"
    },
    {
        title: "Focus",
        src: "https://embed.music.apple.com/us/music-video/focus/1445019082"
    },
    {
        title: "God is a woman",
        src: "https://embed.music.apple.com/us/music-video/god-is-a-woman/1411795534"
    },
    {
        title: "Into You",
        src: "https://embed.music.apple.com/us/music-video/into-you/1545270403"
    },
    {
        title: "No Tears Left to Cry",
        src: "https://embed.music.apple.com/us/music-video/no-tears-left-to-cry/1374328492"
    },
    {
        title: "positions",
        src: "https://embed.music.apple.com/us/music-video/positions/1536980163"
    },
    {
        title: "Problem feat. Iggy Azalea",
        src: "https://embed.music.apple.com/us/music-video/problem-feat-iggy-azalea/1467930749"
    },
    {
        title: "Side to Side (feat. Nicki Minaj)",
        src: "https://embed.music.apple.com/us/music-video/side-to-side-feat-nicki-minaj/1545270404"
    },
    {
        title: "We Can't Be Friends (Wait for Your Love)",
        src: "https://embed.music.apple.com/us/music-video/we-cant-be-friends-wait-for-your-love/1734866871"
    },
    { 
        title: "yes, and?",
        src: "https://embed.music.apple.com/us/music-video/yes-and/1725424454"
    },
    {
        title: "7 rings",
        src: "https://embed.music.apple.com/us/music-video/7-rings-bonus-video/1544323622"
    },
    {
        title: "34+35",
        src: "https://embed.music.apple.com/us/music-video/34-35/1540810862"
    },
    {
        title: "34+35 (feat. Doja Cat & Megan Thee Stallion) [Remix]",
        src: "https://embed.music.apple.com/us/music-video/34-35-feat-doja-cat-megan-thee-stallion-remix/1553403346"
    },
]
    },
    {
        artist: "Ariana Grande & Justin Bieber",
        birthday: [{ month: "June", day: 26, year: 1993 }, { month: "March", day: 1, year: 1994 }],
        songs: [

    {
        title: "Stuck with U",
        src: "https://embed.music.apple.com/us/music-video/stuck-with-u/1512294094"
    },
]
    },
    {
        artist: "Ariana Grande, Miley Cyrus & Lana Del Rey",
        birthday: [{ month: "June", day: 26, year: 1993 }, { month: "November", day: 23, year: 1992 }, { month: "June", day: 21, year: 1985 }],
        songs: [
    {
        title: "Don't Call Me Angel (Charlie's Angels)",
        src: "https://embed.music.apple.com/us/music-video/dont-call-me-angel-charlies-angels/1479592590"
    },
]
    },
    {
        artist: "Ashanti",
        birthday: [{ month: "October", day: 13, year: 1980 }],

        songs: [
    {
        title: "Baby",
        src: "https://embed.music.apple.com/us/music-video/baby/1446006185"
    },
    {
        title: "Foolish",
        src: "https://embed.music.apple.com/us/music-video/foolish/1445842541"
    },
    {
        title: "Happy (Edited Version)",
        src: "https://embed.music.apple.com/us/music-video/happy-edited-version/1445729298"
    },
    {
        title: "The Way That I Love You",
        src: "https://embed.music.apple.com/us/music-video/the-way-that-i-love-you/1446732087"
    },

]
    },
    {
        artist: "Ashanti, Ja Rule, Charli Baltimore & Hussein Fatal",
        songs: [
 {
        title: "Rain on Me",
        src: "https://embed.music.apple.com/us/music-video/rain-on-me/1445841190"
    },

]
    },
    {
        artist: "Ashnikko",
        birthday: [{ month: "February", day: 19, year: 1996 }],

        songs: [
    {
        title: "Slumber Party (feat. Princess Nokia)",
        src: "https://embed.music.apple.com/us/music-video/slumber-party-feat-princess-nokia/1567395206"
    },
        ]
    },
    {
        artist: "Ava Max",
        birthday: [{ month: "February", day: 16, year: 1994 }],

        songs: [
    {
        title: "Kings & Queens",
        src: "https://embed.music.apple.com/us/music-video/kings-queens/1505217080"
    },
    {
        title: "Million Dollar Baby",
        src: "https://embed.music.apple.com/us/music-video/million-dollar-baby/1643490240"
    },
    {
        title: "My Head & My Heart",
        src: "https://embed.music.apple.com/us/music-video/my-head-my-heart/1555580461"
    },
    {
        title: "My Oh My",
        src: "https://embed.music.apple.com/us/music-video/my-oh-my/1739483412"
    },
]
    },
    {
        artist: "B.o.B",
        birthday: [{ month: "November", day: 15, year: 1988 }],
        songs: [
    {
        title: "Both of Us (feat. Taylor Swift)",
        src: "https://embed.music.apple.com/us/music-video/both-of-us-feat-taylor-swift/541199433"
    },
    {
        title: "Headband (feat. 2 Chainz)",
        src: "https://embed.music.apple.com/us/music-video/headband-feat-2-chainz/677518497"
    },
]
    },
    {
        artist: "Backstreet Boys", 
        birthdays: [
            { month: "August", day: 22, year: 1973 },
            { month: "January", day: 9, year: 1978 },
            { month: "January", day: 28, year: 1980 },
            { month: "October", day: 3, year: 1971 },
            { month: "February", day: 20, year: 1975 }
        ],
        songs: [
    {
        title: "Everybody (Backstreet's Back)",
        src: "https://embed.music.apple.com/us/music-video/everybody-backstreets-back/670191042"
    },
    {
        title: "I Want It That Way",
        src: "https://embed.music.apple.com/us/music-video/i-want-it-that-way/670190078"
    },
    {
        title: "Larger Than Life",
        src: "https://embed.music.apple.com/us/music-video/larger-than-life/580662466"
    },
]
    },
    {
        artist: "Bankroll Freddie & Megan Thee Stallion", 
        songs: [
    {
        title: "Pop It",
        src: "https://embed.music.apple.com/us/music-video/pop-it/1561635220"
    },
]
    },
    {
        artist: "Bea Miller", 
        birthday: [{ month: "February", day: 7, year: 1999 }],
        songs: [
    {
        title: "Buy Me Diamonds",
        src: "https://embed.music.apple.com/us/music-video/buy-me-diamonds/1444848716"
    },
    {
        title: "cynical",
        src: "https://embed.music.apple.com/us/music-video/cynical/1671693355"
    },
    {
        title: "Feel Something",
        src: "https://embed.music.apple.com/us/music-video/feel-something/1476307294"
    },
    {
        title: "forever is a lie",
        src: "https://embed.music.apple.com/us/music-video/forever-is-a-lie/1539911696"
    },
    {
        title: "gauche",
        src: "https://embed.music.apple.com/us/music-video/gauche/1707111662"
    },
    {
        title: "i never wanna die",
        src: "https://embed.music.apple.com/us/music-video/i-never-wanna-die/1542922695"
    },
    {
        title: "Like That",
        src: "https://embed.music.apple.com/us/music-video/like-that/1445010769"
    },
    {
        title: "lonely bitch",
        src: "https://embed.music.apple.com/us/music-video/lonely-bitch/1663393043"
    },
    {
        title: "making bad decisions",
        src: "https://embed.music.apple.com/us/music-video/making-bad-decisions/1537571425"
    },
    {
        title: "Repercussions",
        src: "https://embed.music.apple.com/us/music-video/repercussions/1445008452"
    },
    {
        title: "S.L.U.T.",
        src: "https://embed.music.apple.com/us/music-video/s-l-u-t/1445021519"
    },
    {
        title: "Song Like You",
        src: "https://embed.music.apple.com/us/music-video/song-like-you/1444849901"
    },
    {
        title: "this call is coming from inside the house",
        src: "https://embed.music.apple.com/us/music-video/this-call-is-coming-from-inside-the-house/1684650334"
    },
    {
        title: "Yes Girl",
        src: "https://embed.music.apple.com/us/music-video/yes-girl/1444848095"
    },
]
    },

    {
        artist: "Bea Miller & 6LACK", 
        songs: [
    {
        title: "it's not u it's me",
        src: "https://embed.music.apple.com/us/music-video/its-not-u-its-me/1458911230"
    }
]
    },
    {
        artist: "beabadoobee", 
        birthday: [{ month: "June", day: 3, year: 2000 }],
        songs: [
    {
        title: "Ever Seen",
        src: "https://embed.music.apple.com/us/music-video/ever-seen/1754265610"
    },
    {
        title: "Sunny Day",
        src: "https://embed.music.apple.com/us/music-video/sunny-day/1634111840"
    },
    {
        title: "Take A Bite",
        src: "https://embed.music.apple.com/us/music-video/take-a-bite/1744236065"
    },
    {
        title: "the way things go",
        src: "https://embed.music.apple.com/us/music-video/the-way-things-go/1698390092"
    },
]
},
{
    artist: "Bebe Rexha",
    birthday: [{ month: "August", day: 30, year: 1989 }],
    songs: [
    {
        title: "Baby, I'm Jealous (feat. Doja Cat)",
        src: "https://embed.music.apple.com/us/music-video/baby-im-jealous-feat-doja-cat/1535667658"
    },
    {
        title: "Break My Heart Myself (feat. Travis Barker)",
        src: "https://embed.music.apple.com/us/music-video/break-my-heart-myself-feat-travis-barker/1566549248"
    },
    {
        title: "F.F.F. (feat. G-Eazy)",
        src: "https://embed.music.apple.com/us/music-video/f-f-f-feat-g-eazy/1213441116"
    },
    {
        title: "Ferrari",
        src: "https://embed.music.apple.com/us/music-video/ferrari/1545553920"
    },
    {
        title: "Heart Wants What It Wants",
        src: "https://embed.music.apple.com/us/music-video/heart-wants-what-it-wants/1671880745"
    },
    {
        title: "I Got You",
        src: "https://embed.music.apple.com/us/music-video/i-got-you/1192025275"
    },
    {
        title: "Last Hurrah",
        src: "https://embed.music.apple.com/us/music-video/last-hurrah/1453866107"
    },
    {
        title: "Meant to Be (feat. Florida Georgia Line)",
        src: "https://embed.music.apple.com/us/music-video/meant-to-be-feat-florida-georgia-line/1299445080"
    },
    {
        title: "No Broken Hearts (feat. Nicki Minaj)",
        src: "https://embed.music.apple.com/us/music-video/no-broken-hearts-feat-nicki-minaj/1107825391"
    },
    {
        title: "The Way I Are (Dance With Somebody) [feat. Lil Wayne]",
        src: "https://embed.music.apple.com/us/music-video/the-way-i-are-dance-with-somebody-feat-lil-wayne/1241299094"
    },
    {
        title: "You Can't Stop The Girl (From Disney's 'Maleficent: Mistress of Evil')",
        src: "https://embed.music.apple.com/us/music-video/you-cant-stop-the-girl-from-disneys-maleficent/1484723675"
    },
]
},
    {
        artist: "Bebe Rexha & David Guetta", 
        songs: [
    {
        title: "One in a Million",
        src: "https://embed.music.apple.com/us/music-video/one-in-a-million/1708511574"
    },
]
},
{
    artist: "Becky G.", 
    birthday: [{ month: "March", day: 2, year: 1997 }],
    songs: [
    {
        title: "Becky from the Block",
        src: "https://embed.music.apple.com/us/music-video/becky-from-the-block/639842562"
    },
    {
        title: "Break a Sweat",
        src: "https://embed.music.apple.com/us/music-video/break-a-sweat/1049108777"
    },
    {
        title: "Can't Get Enough (feat. Pitbull)",
        src: "https://embed.music.apple.com/us/music-video/cant-get-enough-feat-pitbull/876575915"
    },
    {
        title: "Can't Stop Dancin'",
        src: "https://embed.music.apple.com/us/music-video/cant-stop-dancin/947978288"
    },
    {
        title: "Green Light Go",
        src: "https://embed.music.apple.com/us/music-video/green-light-go/1459578955"
    },
    {
        title: "Lovin' So Hard",
        src: "https://embed.music.apple.com/us/music-video/lovin-so-hard/992173889"
    },
    {
        title: "Play It Again",
        src: "https://embed.music.apple.com/us/music-video/play-it-again/644668786"
    },
    {
        title: "Problem (The Monster Remix) [feat. will.i.am]",
        src: "https://embed.music.apple.com/us/music-video/problem-the-monster-remix-feat-will-i-am/561318480"
    },
    {
        title: "Shower",
        src: "https://embed.music.apple.com/us/music-video/shower/893764093"
    },
]
},
 {
        artist: "Becky G. & Natti Natasha", 
        songs: [
    {
        title: "Sin Pijama",
        src: "https://embed.music.apple.com/us/music-video/sin-pijama/1374667561"
    }
]
},
{
    artist: "Beenie Man & Mya", 
    songs: [

    {
        title: "Girls Dem Sugar (feat. Mya)",
        src: "https://embed.music.apple.com/us/music-video/girls-dem-sugar-feat-mya/720136449"
    },
    ]
},
    {
        artist: "Beenie Man, Ms. Thing & Shawna",  
        songs: [
    {
        title: "Dude",
        src: "https://embed.music.apple.com/us/music-video/dude/720310158"
    },
]
    },
    {
        artist: "Bella Thorne",  
        birthday: [{ month: "October", day: 8, year: 1997 }],
        songs: [
    {
        title: "Call It Whatever",
        src: "https://embed.music.apple.com/us/music-video/call-it-whatever/1445004267"
    },
]
    },
    {
        artist: "Beyoncé",
        birthday: [{ month: "September", day: 4, year: 1981 }],  
        songs: [
    {
        title: "Best Thing I Never Had",
        src: "https://embed.music.apple.com/us/music-video/best-thing-i-never-had/449227765"
    },
    {
        title: "Dance for You",
        src: "https://embed.music.apple.com/us/music-video/dance-for-you/483001092"
    },
    {
        title: "Déjà Vu",
        src: "https://embed.music.apple.com/us/music-video/d%C3%A9j%C3%A0-vu-feat-jay-z/585819766"
    },
    {
        title: "Diva",
        src: "https://embed.music.apple.com/us/music-video/diva/300462208"
    },
    {
        title: "Drunk in Love (feat. JAY Z)",
        src: "https://embed.music.apple.com/us/music-video/drunk-in-love-feat-jay-z/790644918"
    },
    {
        title: "Ego (Remix) [feat. Kanye West]",
        src: "https://embed.music.apple.com/us/music-video/ego-remix-feat-kanye-west/319783403"
    },
    {
        title: "Grown Woman",
        src: "https://embed.music.apple.com/us/music-video/grown-woman/939778272"
    },
    {
        title: "Halo",
        src: "https://embed.music.apple.com/us/music-video/halo/300707141"
    },
    {
        title: "I Was Here (United Nations World Humanitarian Day Performance)",
        src: "https://embed.music.apple.com/us/music-video/i-was-here-united-nations-world-humanitarian-day-performance/554453695"
    },
    {
        title: "If I Were a Boy",
        src: "https://embed.music.apple.com/us/music-video/if-i-were-a-boy-video-version/295784195"
    },
    {
        title: "Irreplaceable",
        src: "https://embed.music.apple.com/us/music-video/irreplaceable/585818711"
    },
    {
        title: "Listen",
        src: "https://embed.music.apple.com/us/music-video/listen/585819824"
    },
    {
        title: "Love On Top",
        src: "https://embed.music.apple.com/us/music-video/love-on-top/511139521"
    },
    {
        title: "Me, Myself and I",
        src: "https://embed.music.apple.com/us/music-video/me-myself-and-i/498493304"
    },
    {
        title: "Mine (feat. Drake)",
        src: "https://embed.music.apple.com/us/music-video/mine-feat-drake/939778253"
    },
        {
            title: 'Partition',
            src: 'https://embed.music.apple.com/us/music-video/partition/1282584515'
        },
        {
            title: 'Party (feat. J. Cole)',
            src: 'https://embed.music.apple.com/us/music-video/party-feat-j-cole/476320439'
        },
        {
            title: 'Pretty Hurts',
            src: 'https://embed.music.apple.com/us/music-video/pretty-hurts/1282467769'
        },
        {
            title: 'Run the World (Girls)',
            src: 'https://embed.music.apple.com/us/music-video/run-the-world-girls/439027556'
        },
        {
            title: 'Single Ladies (Put a Ring on It) [Video Version]',
            src: 'https://embed.music.apple.com/us/music-video/single-ladies-put-a-ring-on-it-video-version/295784205'
        },
        {
            title: 'Sweet Dreams',
            src: 'https://embed.music.apple.com/us/music-video/sweet-dreams/323242741'
        },
        {
            title: 'Upgrade U (feat. Jay-Z)',
            src: 'https://embed.music.apple.com/us/music-video/upgrade-u-feat-jay-z/585818786'
        },
        {
            title: 'Video Phone (feat. Lady Gaga) [Extended Remix]',
            src: 'https://embed.music.apple.com/us/music-video/video-phone-feat-lady-gaga-extended-remix/341677542'
        },
        {
            title: '1+1',
            src: 'https://embed.music.apple.com/us/music-video/1-1/460944314'
        },
        {
            title: '7/11',
            src: 'https://embed.music.apple.com/us/music-video/7-11/947130657'
        },
    ]
},
{
    artist: "Beyoncé & Jay-Z",  
    songs: [
        {
            title: 'Crazy in Love',
            src: 'https://embed.music.apple.com/us/music-video/crazy-in-love/980687544'
        },
    ]
},
{
    artist: "Beyoncé, Blue Ivy, SAINt JHN & WizKid",  
    songs: [
        {
            title: 'Brown Skin Girl',
            src: 'https://embed.music.apple.com/us/music-video/brown-skin-girl/1528922670'
        },
    ]
},
{
    artist: "Beyoncé, JAY Z & Childish Gambino",  
    songs: [
        {
            title: 'MOOD 4 EVA (feat. Oumou Sangaré)',
            src: 'https://embed.music.apple.com/us/music-video/mood-4-eva-feat-oumou-sangar%C3%A9/1579578153'
        },
    ]
},
{
    artist: "Beyoncé, Shatta Wale & Major Lazer",  
    songs: [
        {
            title: 'ALREADY',
            src: 'https://embed.music.apple.com/us/music-video/already/1524881143'
        },
    ]
},
{
    artist: "Bhad Bhabie",
    birthday: [{ month: "March", day: 26, year: 2003 }],  
    songs: [
        {
            title: 'Do It Like Me',
            src: 'https://embed.music.apple.com/us/music-video/do-it-like-me/1534346669'
        },
        {
            title: 'Gucci Flip Flops (feat. Lil Yachty)',
            src: 'https://embed.music.apple.com/us/music-video/gucci-flip-flops-feat-lil-yachty/1384478593'
        },
        {
            title: 'I Got It',
            src: 'https://embed.music.apple.com/us/music-video/i-got-it/1331133129'
        },
    ]
},
{
    artist: "BIA",
    birthday: [{ month: "August", day: 16, year: 1991 }],  
    songs: [
        {
            title: 'LONDON (feat. J. Cole)',
            src: 'https://embed.music.apple.com/us/music-video/london-feat-j-cole/1618345574'
        },
        {
            title: 'MILLIONS',
            src: 'https://embed.music.apple.com/us/music-video/millions/1699825268'
        },
    ]
},
{
    artist: "BIA & JID",  
    songs: [
        {
            title: 'LIGHTS OUT',
            src: 'https://embed.music.apple.com/us/music-video/lights-out/1750545638'
        },
    ]
},
{
    artist: "BIA & Lil Yachty",  
    songs: [
        {
        title: 'PISSED OFF',
        src: 'https://embed.music.apple.com/us/music-video/pissed-off/1770842730'
    },
    ]
},
{
    artist: "BIA & Timbaland",  
    songs: [
        {
            title: "I'M THAT BITCH",
            src: 'https://embed.music.apple.com/us/music-video/im-that-bitch/1678614033'
        }
    ]
},

{
    artist: "Big K.R.I.T.", 
    birthday: [{ month: "August" , day: 26, year: 1986 }], 
    songs: [
             {
                  title: "1999 (feat. Lloyd)",
                  src: "https://embed.music.apple.com/us/music-video/1999-feat-lloyd/1711293653"
                },
            ]
        },
        {
            artist: "Big Tymers",
            birthday: [{ month: "February", day: 15, year: 1969 },{ month: "March", day: 20, year: 1969 }], 
            songs: [
                {
                  title: "This Is How We Do (Cash Money Mix) [Version 1]",
                  src: "https://embed.music.apple.com/us/music-video/this-is-how-we-do-cash-money-mix-version-1/1445858853"
                },
                {
                  title: "1 Stunna (feat. Juvenile & Lil Wayne)",
                  src: "https://embed.music.apple.com/us/music-video/1-stunna-feat-juvenile-lil-wayne/1621696853"
                },
            ]
        },
                {
                    artist: "Big Tymers & R. Kelly",  
                    songs: [
                {
                  title: "Gangsta Girl (Closed Captioned)",
                  src: "https://embed.music.apple.com/us/music-video/gangsta-girl-closed-captioned/1445850918"
                },
            ]
        },
        {
            artist: "BIG30",
            birthday: [{ month: "December", day: 28, year: 1999 }],  
            songs: [

                {
                  title: "Too Official (feat. Yo Gotti)",
                  src: "https://embed.music.apple.com/us/music-video/too-official-feat-yo-gotti/1574739989"
                },
            ]
        },
        {
            artist: "Billie Eilish",
            birthday: [{ month: "December", day: 18, year: 2001 }],  
            songs: [
                {
                  title: "all the good girls go to hell",
                  src: "https://embed.music.apple.com/us/music-video/all-the-good-girls-go-to-hell/1478796256"
                },
                {
                  title: "LUNCH",
                  src: "https://embed.music.apple.com/us/music-video/lunch/1746864776"
                },
                {
                  title: "Your Power",
                  src: "https://embed.music.apple.com/us/music-video/your-power/1565280313"
                },
            ]
        },
        {
            artist: "Birdman",
            birthday: [{ month: "February", day: 15, year: 1969 }],  
            songs: [
                {
                  title: "Fire Flame (feat. Lil Wayne)",
                  src: "https://embed.music.apple.com/us/music-video/fire-flame-feat-lil-wayne/1445832139"
                },
                {
                  title: "Fire Flame (Viral / Internet Version)",
                  src: "https://embed.music.apple.com/us/music-video/fire-flame-viral-internet-version/1445834666"
                },
                {
                  title: "Money to Blow (feat. Lil Wayne & Drake)",
                  src: "https://embed.music.apple.com/us/music-video/money-to-blow-feat-lil-wayne-drake/1445863026"
                },
                {
                  title: "100 Million (feat. Young Jeezy, Rick Ross & Lil Wayne)",
                  src: "https://embed.music.apple.com/us/music-video/100-million-feat-young-jeezy-rick-ross-lil-wayne/1446733227"
                },
            ]
        },
        {
            artist: "Birdman & Jacquees",  
            songs: [
                {
                  title: "Presidential",
                  src: "https://embed.music.apple.com/us/music-video/presidential/1442527210"
                },
            ]
        },
        {
            artist: "Birdman & Lil Wayne",   
            songs: [
                {
                  title: "Leather So Soft",
                  src: "https://embed.music.apple.com/us/music-video/leather-so-soft/1445868536"
                },
            ]
        },
        {
            artist: "Birdman, Drake & Lil Wayne",  
            songs: [
                {
                  title: "4 My Town (Play Ball) [Edited Version]",
                  src: "https://embed.music.apple.com/us/music-video/4-my-town-play-ball-edited-version/1445843881"
                },
            ]
        },
        {
            artist: "Black Eyed Peas",
            birthday: [{ month: "March", day: 15, year: 1975 }, { month: "November", day: 28, year: 1974 }, { month: "July", day: 14, year: 1975 }, { month: "March", day: 27, year: 1975 }],  
            songs: [
                {
                  title: "GUARANTEE",
                  src: "https://embed.music.apple.com/us/music-video/guarantee/1707942500"
                },
            ]
        },
        {
            artist: "Black Eyed Peas & Shakira",  
            songs: [
                {
                  title: "GIRL LIKE ME",
                  src: "https://embed.music.apple.com/us/music-video/girl-like-me/1542838238"
                },
            ]
        },
        {
            artist: "BLACKPINK & Selena Gomez",  
            songs: [
                {
                  title: "Ice Cream",
                  src: "https://embed.music.apple.com/us/music-video/ice-cream/1529654090"
                },
            ]
        },
        {
            artist: "Blaque", 
            birthday: [{ month: "February", day: 22, year: 1980 }, { month: "October", day: 28, year: 1980 },{ month: "October", day: 5, year: 1982 }],  
            songs: [
                {
                  title: "Bring It All to Me (feat. *NSYNC)",
                  src: "https://embed.music.apple.com/us/music-video/bring-it-all-to-me-feat-nsync/1366595282"
                },
            ]
        },
        {
            artist: "Blondie", 
            birthday: [{ month: "July", day: 1, year: 1945 }, { month: "January", day: 5, year: 1950 }, { month: "November ", day: 24, year: 1954 }],
            songs: [
                {
                  title: "Call Me",
                  src: "https://embed.music.apple.com/us/music-video/call-me/719686775"
                },
            ]
        },
        {
            artist: "Blvk H3ro, Wayne J & Skillibeng",  
            songs: [
                {
                  title: "Young Boss (Remix)",
                  src: "https://embed.music.apple.com/us/music-video/young-boss-remix/1534824615"
                },
            ]
        },
        {
            artist: "Bobby Shmurda",
            birthday: [{ month: "August", day: 4, year: 1994 }],  
            songs: [
                {
                  title: "Bobby Bitch",
                  src: "https://embed.music.apple.com/us/music-video/bobby-bitch/937419757"
                },
            ]
        },
        {
            artist: "Bodybangers",  
            songs: [
                {
                  title: "Aftershock (feat. Ella Poletti)",
                  src: "https://embed.music.apple.com/us/music-video/aftershock-feat-ella-poletti/1538534627"
                },
                {
                  title: "Again",
                  src: "https://embed.music.apple.com/us/music-video/again/1476089378"
                },
                {
                  title: "Ciuri Ciuri",
                  src: "https://embed.music.apple.com/us/music-video/ciuri-ciuri/1442598509"
                },
                {
                  title: "Europe (feat. Victoria Kern, Nicco)",
                  src: "https://embed.music.apple.com/us/music-video/europe-feat-victoria-kern-nicco/1278909738"
                },
                {
                  title: "Let You Know (feat. Menno)",
                  src: "https://embed.music.apple.com/us/music-video/let-you-know-feat-menno/1245583260"
                },
                {
                  title: "Megamix",
                  src: "https://embed.music.apple.com/us/music-video/megamix/1181878330"
                },
                {
                  title: "Sunglasses at Night",
                  src: "https://embed.music.apple.com/us/music-video/sunglasses-at-night/1176721531"
                },
                {
                  title: "Tonight (feat. Victoria Kern)",
                  src: "https://embed.music.apple.com/us/music-video/tonight-feat-victora-kern/568042903"
                },
            ]
        },
        {
            artist: "Bodybangers & LIZOT",  
            songs: [
                {
                  title: "Mad Love (feat. ByMia)",
                  src: "https://embed.music.apple.com/us/music-video/mad-love-feat-bymia/1519016388"
                },
            ]
        },
        {
            artist: "Bodybangers,Alex Parker & Alis Shuka",  
            songs: [
                {
                  title: "Bum Bum",
                  src: "https://embed.music.apple.com/us/music-video/bum-bum/1593131588"
                },
            ]
        },
        {
            artist: "Bow Wow",
            birthday: [{ month: "March", day: 9, year: 1987 }],  
            songs: [
                {
                  title: "Let Me Hold You (feat. Omarion)",
                  src: "https://embed.music.apple.com/us/music-video/let-me-hold-you-feat-omarion/1349028003"
                },
                {
                  title: "You Can Get It All",
                  src: "https://embed.music.apple.com/us/music-video/you-can-get-it-all/305373393"
                },
            ]
        },
        {
            artist: "Bow Wow & Omarion",  
            songs: [
                {
                  title: "Girlfriend",
                  src: "https://embed.music.apple.com/us/music-video/girlfriend/268589422"
                },
            ]
        },
        {
            artist: "Brandy",
            birthday: [{ month: "February", day: 11, year: 1979 }], 
            songs: [
                {
                  title: "Put It Down (feat. Chris Brown)",
                  src: "https://embed.music.apple.com/us/music-video/put-it-down-feat-chris-brown/553041803"
                },
            ]
        },
        {
            artist: "Brent Faiyaz",
            birthday: [{ month: "September", day: 19, year: 1995 }],  
            songs: [
                {
                  title: "JACKIE BROWN",
                  src: "https://embed.music.apple.com/us/music-video/jackie-brown/1704215219"
                },
            ]
        },
        {
            artist: "Bridgit Mendler",
            birthday: [{ month: "December", day: 18, year: 1992 }],  
            songs: [
                {
                  title: "Ready or Not",
                  src: "https://embed.music.apple.com/us/music-video/ready-or-not/1445826725"
                },
            ]
        },
        {
            artist: "Britney Spears",
            birthday: [{ month: "December", day: 2, year: 1981 }],  
            songs: [
                {
                  title: "Circus",
                  src: "https://embed.music.apple.com/us/music-video/circus/299162151"
                },
                {
                  title: "Gimme More",
                  src: "https://embed.music.apple.com/us/music-video/gimme-more/521739389"
                },
                {
                  title: "I'm a Slave 4 U",
                  src: "https://embed.music.apple.com/us/music-video/im-a-slave-4-u/326339365"
                },
                {
                  title: "Lucky",
                  src: "https://embed.music.apple.com/us/music-video/lucky/548916624"
                },
                {
                  title: "Make Me... (feat. G-Eazy)",
                  src: "https://embed.music.apple.com/us/music-video/make-me-feat-g-eazy/1141479070"
                },
                {
                  title: "Slumber Party (feat. Tinashe)",
                  src: "https://embed.music.apple.com/us/music-video/slumber-party-feat-tinashe/1178082629"
                },
                {
                  title: "Toxic",
                  src: "https://embed.music.apple.com/us/music-video/toxic/276269931"
                },
            ]
        },
        {
            artist: "Britney Spears & Iggy Azalea",  
            songs: [
                {
                  title: "Pretty Girls",
                  src: "https://embed.music.apple.com/us/music-video/pretty-girls/994250002"
                },
            ]
        },
        {
            artist: "Bruno Mars",
            birthday: [{ month: "October", day: 8, year: 1985 }],  
            songs: [
                {
                  title: "Locked Out of Heaven",
                  src: "https://embed.music.apple.com/us/music-video/locked-out-of-heaven/572578572"
                },
            ]
        },
        {
            artist: "Bryan Adams",
            birthday: [{ month: "November", day: 5, year: 1959 }],  
            songs: [
                {
                  title: "(Everything I Do) I Do It for You",
                  src: "https://embed.music.apple.com/us/music-video/everything-i-do-i-do-it-for-you/1543135207"
                },
                {
                  title: "Heaven",
                  src: "https://embed.music.apple.com/us/music-video/heaven/1445828930"
                },
                {
                  title: "Summer of '69",
                  src: "https://embed.music.apple.com/us/music-video/summer-of-69/1446738248"
                },
            ]
        },
        {
            artist: "Bryson Tiller",
            birthday: [{ month: "January", day: 2, year: 1993 }],  
            songs: [
                {
                  title: "Whatever She Wants",
                  src: "https://embed.music.apple.com/us/music-video/whatever-she-wants/1730994145"
                },
            ]
        },
        {
            artist: "Bubba Sparxxx",
            birthday: [{ month: "March", day: 6, year: 1977 }],  
            songs: [
                {
                  title: "Country Folks (feat. Colt Ford & Danny Boone)",
                  src: "https://embed.music.apple.com/us/music-video/country-folks-feat-colt-ford-danny-boone/687081184"
                },
            ]
        },
                {
                    artist: "Bubba Sparxxx,Mr. Collipark & Ying Yang Twins",  
                    songs: [
                {
                  title: "Ms. New Booty",
                  src: "https://embed.music.apple.com/us/music-video/ms-new-booty/719632692"
                },
            ]
        },
        {
            artist: "Buju Banton",
            birthday: [{ month: "July", day: 15, year: 1973 }],  
            songs: [
                {
                  title: "Untold Stories",
                  src: "https://embed.music.apple.com/us/music-video/untold-stories/1445893377"
                },
                {
                  title: "Wanna Be Loved",
                  src: "https://embed.music.apple.com/us/music-video/wanna-be-loved/1445851181"
                },
            ]
        },
        {
            artist: "Burna Boy",
            birthday: [{ month: "July", day: 2, year: 1991 }],  
            songs: [
                {
                  title: "Tested,Approved & Trusted",
                  src: "https://embed.music.apple.com/us/music-video/tested-approved-trusted/1738324911"
                },
            ]
        },
        {
            artist: "Busta Rhymes",
            birthday: [{ month: "May", day: 20, year: 1972 }],  
            songs: [
                {
                  title: "HOMAGE (feat. Kodak Black)",
                  src: "https://embed.music.apple.com/us/music-video/homage-feat-kodak-black/1743073540"
                },
                {
                  title: "Pass the Courvoisier Part II (feat. P. Diddy & Pharrell Williams) [Long Version]",
                  src: "https://embed.music.apple.com/us/music-video/pass-the-courvoisier-part-ii-feat-p-diddy-pharrell/1538410630"
                },
                {
                  title: "Put Your Hands Where My Eyes Could See",
                  src: "https://embed.music.apple.com/us/music-video/put-your-hands-where-my-eyes-could-see/560984540"
                },
            ]
        },
                {
                    artist: "Ca$h Out",
                    birthday: [{ month: "August", day: 15, year: 1990 }],  
                    songs: [
                {
                  title: "Cashin' Out",
                  src: "https://embed.music.apple.com/us/music-video/cashin-out/1538085460"
                },
            ]
        },
        {
            artist: "Calvin Harris & Ellie Goulding",  
            songs: [
                {
                  title: "Miracle",
                  src: "https://embed.music.apple.com/us/music-video/miracle/1678495297"
                },
            ]
        },
        {
            artist: "Calvin Harris & Rihanna",  
            songs: [
                {
                  title: "This Is What You Came For",
                  src: "https://embed.music.apple.com/us/music-video/this-is-what-you-came-for/1125405366"
                },
            ]
        },
        {
            artist: "Calvin Harris & Sam Smith",  
            songs: [
                {
                  title: "Desire",
                  src: "https://embed.music.apple.com/us/music-video/desire/1702043530"
                },
            ]
        },
        {
            artist: "Calvin Harris,Charlie Puth & Shenseea",  
            songs: [
                {
                  title: "Obsessed",
                  src: "https://embed.music.apple.com/us/music-video/obsessed/1647266855"
                },
            ]
        },
        {
            artist: "Cam'ron",
            birthday: [{ month: "February", day: 4, year: 1976 }],  
            songs: [
                {
                  title: "Get 'Em Girls",
                  src: "https://embed.music.apple.com/us/music-video/get-em-girls/1446741552"
                },
                {
                  title: "What Means the World to You",
                  src: "https://embed.music.apple.com/us/music-video/what-means-the-world-to-you/958613036"
                },
            ]
        },
        {
            artist: "Camila Cabello",
            birthday: [{ month: "March", day: 3, year: 1997 }],  
            songs: [
                {
                  title: "Don't Go Yet",
                  src: "https://embed.music.apple.com/us/music-video/dont-go-yet/1577802469"
                },
                {
                  title: "Havana (feat. Young Thug)",
                  src: "https://embed.music.apple.com/us/music-video/havana-feat-young-thug/1299575340"
                },
                {
                  title: "Liar",
                  src: "https://embed.music.apple.com/us/music-video/liar/1479793860"
                },
                {
                  title: "My Oh My (feat. DaBaby)",
                  src: "https://embed.music.apple.com/us/music-video/my-oh-my-feat-dababy/1498709790"
                },
                {
                  title: "Never Be the Same",
                  src: "https://embed.music.apple.com/us/music-video/never-be-the-same/1356757463"
                },
            ]
        },
        {
            artist: "Cardi B",
            birthday: [{ month: "October", day: 11, year: 1992 }],  
            songs: [
                {
                  title: "Bodak Yellow",
                  src: "https://embed.music.apple.com/us/music-video/bodak-yellow/1537435016"
                },
                {
                  title: "Enough (Miami)",
                  src: "https://embed.music.apple.com/us/music-video/enough-miami/1736620835"
                },
                {
                  title: "Like What (Freestyle)",
                  src: "https://embed.music.apple.com/us/music-video/like-what-freestyle/1733941653"
                },
                {
                  title: "Ring (feat. Kehlani)",
                  src: "https://embed.music.apple.com/us/music-video/ring-feat-kehlani/1433831106"
                },
            ]
        },
        {
            artist: "Cardi B & Megan Thee Stallion",  
            songs: [
                {
                  title: "Bongos",
                  src: "https://embed.music.apple.com/us/music-video/bongos/1706428864"
                },
            ]
        },
        {
            artist: "Caely Rae Jepsen",
            birthday: [{ month: "November", day: 21, year: 1985 }],  
            songs: [
                {
                  title: "Call Me Maybe",
                  src: "https://embed.music.apple.com/us/music-video/call-me-maybe/1445866423"
                },
                {
                  title: "Me and the Boys in the Band",
                  src: "https://embed.music.apple.com/us/music-video/me-and-the-boys-in-the-band/1527848891"
                },
                {
                  title: "Now That I Found You",
                  src: "https://embed.music.apple.com/us/music-video/now-that-i-found-you/1456180819"
                },
                {
                  title: "Party for One",
                  src: "https://embed.music.apple.com/us/music-video/party-for-one/1440701450"
                },
                {
                  title: "Run Away with Me",
                  src: "https://embed.music.apple.com/us/music-video/run-away-with-me/1444854384"
                },
                {
                  title: "This Kiss",
                  src: "https://embed.music.apple.com/us/music-video/this-kiss/1445863456"
                },
                {
                  title: "Too Much",
                  src: "https://embed.music.apple.com/us/music-video/too-much/1463893874"
                },
                {
                  title: "Want You in My Room",
                  src: "https://embed.music.apple.com/us/music-video/want-you-in-my-room/1480854378"
                },
                {
                  title: "Western Wind",
                  src: "https://embed.music.apple.com/us/music-video/western-wind/1622749923"
                },
                {
                  title: "Your Type",
                  src: "https://embed.music.apple.com/us/music-video/your-type/1444874560"
                },
            ]
        },
        {
            artist: "carolesdaughter",
            birthday: [{ month: "November", day: 23, year: 2002 }],
            songs: [
                {
                  title: "Good in Bed",
                  src: "https://embed.music.apple.com/us/music-video/good-in-bed/1707221223"
                },
            ]
        },
        {
            artist: "Cash Cobain,Ice Spice & Bay Swag",  
            songs: [
                {
                  title: "Fisherrr (Remix)",
                  src: "https://embed.music.apple.com/us/music-video/fisherrr-remix/1743867555"
                },
            ]
        },
        {
            artist: "Cassidy",
            birthday: [{ month: "July", day: 7, year: 1982 }],  
            songs: [
                {
                  title: "Get No Better (feat. Mashonda)",
                  src: "https://embed.music.apple.com/us/music-video/get-no-better-feat-mashonda/548915922"
                },
                {
                  title: "Hotel (feat. R. Kelly)",
                  src: "https://embed.music.apple.com/us/music-video/hotel-feat-r-kelly/312882996"
                },
                {
                  title: "I'm a Hustla",
                  src: "https://embed.music.apple.com/us/music-video/im-a-hustla/1380530091"
                },
                {
                  title: "My Drink N' My 2 Step (feat. Swizz Beatz)",
                  src: "https://embed.music.apple.com/us/music-video/my-drink-n-my-2-step-feat-swizz-beatz/351874544"
                },
            ]
        },
        {
            artist: "Cassie",
            birthday: [{ month: "August", day: 26, year: 1986 }],  
            songs: [
                {
                  title: "King of Hearts",
                  src: "https://embed.music.apple.com/us/music-video/king-of-hearts/1445834435"
                },
                {
                  title: "Long Way 2 Go",
                  src: "https://embed.music.apple.com/us/music-video/long-way-2-go/281880251"
                },
                {
                  title: "Me & U",
                  src: "https://embed.music.apple.com/us/music-video/me-u/172564945"
                },
                {
                  title: "Official Girl (feat. Lil Wayne)",
                  src: "https://embed.music.apple.com/us/music-video/official-girl-feat-lil-wayne/289782079"
                },
            ]
        },
        {
            artist: "Chamillionaire featuring Krayzie Bone",  
            songs: [
                {
                  title: "Ridin' (feat. Krayzie Bone)",
                  src: "https://embed.music.apple.com/us/music-video/ridin-feat-krayzie-bone/1445847240"
                },
            ]
        },
        {
            artist: "Charli XCX",
            birthday: [{ month: "August", day: 2, year: 1992 }],  
            songs: [
                {
                  title: "Superlove",
                  src: "https://embed.music.apple.com/us/music-video/superlove/718183558"
                },
                {
                  title: "What I Like",
                  src: "https://embed.music.apple.com/us/music-video/what-i-like/642696017"
                },
            ]
        },
        {
            artist: "Cher Lloyd",
            birthday: [{ month: "July", day: 28, year: 1993 }],  
            songs: [
                {
                  title: "Oath (feat. Becky G)",
                  src: "https://embed.music.apple.com/us/music-video/oath-feat-becky-g/568187153"
                },
                {
                  title: "Swagger Jagger",
                  src: "https://embed.music.apple.com/us/music-video/swagger-jagger/447765067"
                },
                {
                  title: "Want U Back",
                  src: "https://embed.music.apple.com/us/music-video/want-u-back/523277908"
                },
                {
                  title: "With Ur Love (feat. Mike Posner)",
                  src: "https://embed.music.apple.com/us/music-video/with-ur-love-feat-mike-posner/470689719"
                }
              ]
            },
            {
              artist: "Chingy, Snoop Dogg & Ludacris",
              songs: [
                {
                  title: "Holidae In",
                  src: "https://embed.music.apple.com/us/music-video/holidae-in/719983687"
                }
              ]
            },
            {
              artist: "Chloe & Chris Brown",
              songs: [
                {
                  title: "How Does It Feel",
                  src: "https://embed.music.apple.com/us/music-video/how-does-it-feel/1674032591"
                }
              ]
            },
            {
              artist: "Chris Brown",
              birthday: [{ month: "May", day: 5, year: 1989 }],
              songs: [
                {
                  title: "Don't Judge Me",
                  src: "https://embed.music.apple.com/us/music-video/dont-judge-me/566463863"
                },
                {
                  title: "Fine China",
                  src: "https://embed.music.apple.com/us/music-video/fine-china/628154158"
                },
                {
                  title: "Forever",
                  src: "https://embed.music.apple.com/us/music-video/forever/279919104"
                },
                {
                  title: "Liquor",
                  src: "https://embed.music.apple.com/us/music-video/liquor/1042679400"
                },
                {
                  title: "Little More (Royalty)",
                  src: "https://embed.music.apple.com/us/music-video/little-more-royalty/1069521489"
                },
                {
                  title: "Love More (feat. Nicki Minaj)",
                  src: "https://embed.music.apple.com/us/music-video/love-more-feat-nicki-minaj/695396013"
                },
                {
                  title: "Loyal (feat. Lil Wayne & Tyga)",
                  src: "https://embed.music.apple.com/us/music-video/loyal-feat-lil-wayne-tyga/847632157"
                },
                {
                  title: "New Flame (feat. Usher & Rick Ross)",
                  src: "https://embed.music.apple.com/us/music-video/new-flame-feat-usher-rick-ross/909486628"
                },
                {
                  title: "Pills & Automobiles (feat. Yo Gotti, A Boogie wit da Hoodie & Kodak Black)",
                  src: "https://embed.music.apple.com/us/music-video/pills-automobiles-feat-yo-gotti-a-boogie-wit-da/1275662432"
                },
                {
                  title: "Privacy",
                  src: "https://embed.music.apple.com/us/music-video/privacy/1226766637"
                },
                {
                  title: "Sensational (feat. Davido & Lojay)",
                  src: "https://embed.music.apple.com/us/music-video/sensational-feat-davido-lojay/1712902741"
                },
                {
                  title: "She Ain't You",
                  src: "https://embed.music.apple.com/us/music-video/she-aint-you/435177314"
                },
                {
                  title: "Summer Too Hot",
                  src: "https://embed.music.apple.com/us/music-video/summer-too-hot/1703115620"
                },
                {
                  title: "Sweet Love",
                  src: "https://embed.music.apple.com/us/music-video/sweet-love/530291959"
                },
                {
                  title: "Zero",
                  src: "https://embed.music.apple.com/us/music-video/zero/1042686643"
                },
            ]
        },
        {
            artist: "Chris Brown & Tyga",
            songs: [
                {
                  title: "Ayo",
                  src: "https://embed.music.apple.com/us/music-video/ayo/964651630"
                }
              ]
            },
            {
              artist: "Chris de Burgh",
              songs: [
                {
                  title: "The Lady in Red",
                  src: "https://embed.music.apple.com/us/music-video/the-lady-in-red/1444337671"
                },
            ]
        },
        {
            artist: "Chris Robinson, Danielle Shilling-Lovett,Jadakiss,Mya & Roseanne Cunningham",
            songs: [
                {
                  title: "The Best of Me (Dirty Audio Version)",
                  src: "https://embed.music.apple.com/us/music-video/the-best-of-me-dirty-audio-version/1445847204"
                },
            ]
        },
                {
                    artist: "Christina Aguilera",
                    birthday: [{ month: "December", day: 18, year: 1980 }],
                    songs: [
                {
                  title: "Accelerate (feat. Ty Dolla $ign & 2 Chainz)",
                  src: "https://embed.music.apple.com/us/music-video/accelerate-feat-ty-dolla-%24ign-2-chainz/1379090666"
                },
                {
                  title: "Candyman",
                  src: "https://embed.music.apple.com/us/music-video/candyman/319924626"
                },
                {
                  title: "Fall In Line (feat. Demi Lovato)",
                  src: "https://embed.music.apple.com/us/music-video/fall-in-line-feat-demi-lovato/1388255752"
                },
                {
                  title: "Genie In a Bottle (Edited Version)",
                  src: "https://embed.music.apple.com/us/music-video/genie-in-a-bottle-edited-version/312885030"
                },
                {
                  title: "What a Girl Wants",
                  src: "https://embed.music.apple.com/us/music-video/what-a-girl-wants/300708665"
                }
              ]
            },
            {
              artist: "Ciara",
              birthday: [{ month: "October", day: 25, year: 1985 }],
              songs: [
                {
                  title: "Ride (feat. Ludacris)",
                  src: "https://embed.music.apple.com/us/music-video/ride-feat-ludacris/368841890"
                },
                {
                  title: "1, 2 Step (feat. Missy Elliott)",
                  src: "https://embed.music.apple.com/us/music-video/1-2-step-feat-missy-elliott/332781775"
                },
            ]
        },
                {
                    artist: "Ciara & Chris Brown",
                    songs: [
                {
                  title: "How We Roll",
                src: "https://embed.music.apple.com/us/music-video/how-we-roll/1779215642"
                },
            ]
        },
        {
            artist: "City Girls",
            birthday: [{ month: "February", day: 11, year: 1994 },{ month: "December", day: 3, year: 1992 }],
            songs: [
                {
                  title: "Pussy Talk (feat. Doja Cat)",
                  src: "https://embed.music.apple.com/us/music-video/pussy-talk-feat-doja-cat/1522104426"
                }
              ]
            },
            {
              artist: "Clipse",
              birthday: [{ month: "May", day: 13, year: 1977 },{ month: "August", day: 18, year: 1972 }],
              songs: [
                {
                  title: "Grindin'",
                  src: "https://embed.music.apple.com/us/music-video/grindin/1366595358"
                },
                {
                  title: "Hot Damn",
                  src: "https://embed.music.apple.com/us/music-video/hot-damn/643507103"
                },
                {
                  title: "Mr. Me Too (Semi Clean Version feat. Pharrell Williams)",
                  src: "https://embed.music.apple.com/us/music-video/mr-me-too-semi-clean-version-feat-pharrell-williams/303219789"
                },
                {
                  title: "Popular Demand (Popeyes feat. Cam'ron)",
                  src: "https://embed.music.apple.com/us/music-video/popular-demand-popeyes-feat-camron/341093651"
                },
            ]
        },
        {
            artist: "Coi Leray",
            birthday: [{ month: "May", day: 11, year: 1997 }],
            songs: [
                {
                  title: "Bops",
                  src: "https://embed.music.apple.com/us/music-video/bops/1690863120"
                },
                {
                  title: "Isabel Marant",
                  src: "https://embed.music.apple.com/us/music-video/isabel-marant/1704961399"
                },
                {
                  title: "Players (DJ Smallz 732 Jersey Club Remix)",
                  src: "https://embed.music.apple.com/us/music-video/players-dj-smallz-732-jersey-club-remix/1666006004"
                }
              ]
            },
            {
                artist: "Cordae",
                birthday: [{ month: "August", day: 26, year: 1997 }],
                songs: [
                  {
                    title: "Syrup Sandwiches (feat. Joey Bada$$)",
                    src: "https://embed.music.apple.com/us/music-video/syrup-sandwiches-feat-joey-bada%24%24/1779112214"
                  }
                ]
              },
            {
              artist: "Cory Gunz & Lil Wayne",
              songs: [
                {
                  title: "6 Foot 7 Foot (feat. Cory Gunz)",
                  src: "https://embed.music.apple.com/us/music-video/6-foot-7-foot-feat-cory-gunz/1445830620"
                }
              ]
            },
            {
              artist: "Craig David",
              birthday: [{ month: "May", day: 5, year: 1981 }],
              songs: [
                {
                  title: "Fill Me In",
                  src: "https://embed.music.apple.com/us/music-video/fill-me-in/1356864175"
                },
                {
                  title: "Hidden Agenda",
                  src: "https://embed.music.apple.com/us/music-video/hidden-agenda/1402272730"
                }
              ]
            },
            {
              artist: "Cyndi Lauper",
              birthday: [{ month: "June", day: 22, year: 1953 }],
              songs: [
                {
                  title: "Girls Just Want to Have Fun",
                  src: "https://embed.music.apple.com/us/music-video/girls-just-want-to-have-fun/275614769"
                }
              ]
            },
            {
              artist: "D-Block",
              songs: [
                {
                  title: "Get That Paper (Director's Cut)",
                  src: "https://embed.music.apple.com/us/music-video/get-that-paper-directors-cut/319388900"
                }
              ]
            },
            {
              artist: "Da Brat",
              birthday: [{ month: "April", day: 14, year: 1974 }],
              songs: [
                {
                  title: "Sittin' on Top of the World",
                  src: "https://embed.music.apple.com/us/music-video/sittin-on-top-of-the-world/1535293484"
                },
            ]
        },
        {
            artist: "Da Brat & Tyrese",
            songs: [
                {
                  title: "What'chu Like",
                  src: "https://embed.music.apple.com/us/music-video/whatchu-like/1536521020"
                },
            ]
        },
        {
            artist: "Danielle Bradbery",
            birthday: [{ month: "July", day: 23, year: 1996 }],
            songs: [
                {
                  title: "Friend Zone",
                  src: "https://embed.music.apple.com/us/music-video/friend-zone/1444851309"
                },
                {
                  title: "The Heart of Dixie",
                  src: "https://embed.music.apple.com/us/music-video/the-heart-of-dixie/1444844168"
                },
                {
                  title: "Never Have I Ever",
                  src: "https://embed.music.apple.com/us/music-video/never-have-i-ever/1517918401"
                },
                {
                  title: "Stop Draggin' Your Boots",
                  src: "https://embed.music.apple.com/us/music-video/stop-draggin-your-boots/1578536326"
                },
                {
                  title: "Worth It",
                  src: "https://embed.music.apple.com/us/music-video/worth-it/1384508915"
                },
                {
                  title: "Young In America",
                  src: "https://embed.music.apple.com/us/music-video/young-in-america/1444880003"
                },
            ]
        },
                {
                    artist: "Danity Kane",
                    birthday: [{ month: "June", day: 29, year: 1983 },{ month: "July", day: 6, year: 1985 },{ month: "March", day: 22, year: 1980 },{ month: "August", day: 5, year: 1983 },{ month: "February", day: 11, year: 1984 }],
                    songs: [
                {
                  title: "Damaged",
                  src: "https://embed.music.apple.com/us/music-video/damaged/276222425"
                },
                {
                  title: "Show Stopper (video) FEAT. YUNG JOC",
                  src: "https://embed.music.apple.com/us/music-video/show-stopper-feat-yung-joc/212006328"
                }
              ]
            },
            {
              artist: "Dave East",
              birthday: [{ month: "June", day: 3, year: 1988 }],
              songs: [
                {
                  title: "HUSTLERS (feat. Tyga)",
                  src: "https://embed.music.apple.com/us/music-video/hustlers-feat-tyga/1697031382"
                },
            ]
        },
                {
                    artist: "David Guetta & Bebe Rexha",
                    songs: [
                {
                  title: "I'm Good (Blue)",
                  src: "https://embed.music.apple.com/us/music-video/im-good-blue/1646266064"
                },
            ]
        },
        {
            artist: "Davido,Sean Paul & Ding Dong",
            songs: [
                {
                  title: "UNAVAILABLE (feat. Musa Keys) [Sean Paul & DING DONG Remix]",
                  src: "https://embed.music.apple.com/us/music-video/unavailable-feat-musa-keys-sean-paul-ding-dong-remix/1715576873"
                },
            ]
        },
        {
            artist: "Daya",
            birthday: [{ month: "October", day: 24, year: 1998 }],
            songs: [
                {
                  title: "Bad Girl",
                  src: "https://embed.music.apple.com/us/music-video/bad-girl/1551996599"
                },
                {
                  title: "First Time",
                  src: "https://embed.music.apple.com/us/music-video/first-time/1537094555"
                },
                {
                  title: "Hide Away",
                  src: "https://embed.music.apple.com/us/music-video/hide-away/1054293637"
                },
                {
                  title: "Insomnia",
                  src: "https://embed.music.apple.com/us/music-video/insomnia/1457624961"
                },
                {
                  title: "Left Me Yet",
                  src: "https://embed.music.apple.com/us/music-video/left-me-yet/1469130928"
                },
                {
                  title: "New",
                  src: "https://embed.music.apple.com/us/music-video/new/1445001815"
                },
                {
                  title: "Safe",
                  src: "https://embed.music.apple.com/us/music-video/safe/1411760257"
                },
                {
                  title: "Sit Still, Look Pretty",
                  src: "https://embed.music.apple.com/us/music-video/sit-still-look-pretty/1155730687"
                },
            ]
        },
        {
            artist: "Daya & RL Grime",
            songs: [
                {
                  title: "I Wanna Know (feat. Daya)",
                  src: "https://embed.music.apple.com/us/music-video/i-wanna-know-feat-daya/1707062873"
                },
            ]
        },
        {
            artist: "Deana Carter",
            birthday: [{ month: "January", day: 4, year: 1966 }],
            songs: [
                {
                  title: "Strawberry Wine",
                  src: "https://embed.music.apple.com/us/music-video/strawberry-wine/719674407"
                },
            ]
        },
        {
            artist: "DeJ Loaf",
            birthday: [{ month: "April", day: 8, year: 1991 }],
            songs: [
                {
                  title: "Back Up (feat. Big Sean)",
                  src: "https://embed.music.apple.com/us/music-video/back-up-feat-big-sean/1538532420"
                },
            ]
        },
        {
            artist: "Demi Lovato",
            birthday: [{ month: "August", day: 20, year: 1992 }],
            songs: [
                {
                  title: "Confident",
                  src: "https://embed.music.apple.com/us/music-video/confident/1444881969"
                },
                {
                  title: "Cool for the Summer",
                  src: "https://embed.music.apple.com/us/music-video/cool-for-the-summer/1445017460"
                },
                {
                  title: "Dancing with the Devil",
                  src: "https://embed.music.apple.com/us/music-video/dancing-with-the-devil/1561226849"
                },
                {
                  title: "Give Your Heart a Break",
                  src: "https://embed.music.apple.com/us/music-video/give-your-heart-a-break/1446733619"
                },
                {
                  title: "Still Alive (from the Original Motion Picture Scream VI)",
                  src: "https://embed.music.apple.com/us/music-video/still-alive-from-the-original-motion-picture-scream-vi/1675344041"
                },
                {
                  title: "SWINE",
                  src: "https://embed.music.apple.com/us/music-video/swine/1693935043"
                },
                {
                  title: "Tell Me You Love Me",
                  src: "https://embed.music.apple.com/us/music-video/tell-me-you-love-me/1445025749"
                }
              ]
            },
            {
                artist: "Denzel Curry",
                birthday: [{ month: "February", day: 16, year: 1995 }],
                songs: [
                    {
                      title: "GOT ME GEEKED",
                      src: "https://embed.music.apple.com/us/music-video/got-me-geeked/1779350587"
                    },
                ]
            },
            {
              artist: "Destiny's Child",
              songs: [
                {
                  title: "Soldier (feat. T.I. & Lil Wayne)",
                  src: "https://embed.music.apple.com/us/music-video/soldier-feat-t-i-lil-wayne/659677830"
                },
            ]
        },
                {
                    artist: "Dev",
                    birthday: [{ month: "July", day: 2, year: 1989 }],
                    songs: [
                {
                  title: "Kiss My Lips (feat. Fabolous)",
                  src: "https://embed.music.apple.com/us/music-video/kiss-my-lips-feat-fabolous/1445747251"
                },
            ]
        },
        {
            artist: "Diddy - Dirty Money & Rick Ross",
            songs: [
                {
                  title: "Angels (Remix)",
                  src: "https://embed.music.apple.com/us/music-video/angels-remix/1445892898"
                },
            ]
        },
        {
            artist: "Dido",
            birthday: [{ month: "December", day: 25, year: 1971 }],
            songs: [
                {
                  title: "Thank You",
                  src: "https://embed.music.apple.com/us/music-video/thank-you/279025575"
                }
              ]
            },
            {
              artist: "Diggy",
              birthday: [{ month: "March", day: 21, year: 1995 }],
              songs: [
                {
                  title: "4 Letter Word",
                  src: "https://embed.music.apple.com/us/music-video/4-letter-word/536724001"
                },
            ]
        },
        {
            artist: "Dimitri Vegas & Like Mike & Paris Hilton",
            songs: [
                {
                  title: "Best Friend's Ass",
                  src: "https://embed.music.apple.com/us/music-video/best-friends-ass/1467972325"
                }
              ]
            },
            {
              artist: "DJ Drama",
              birthday: [{ month: "April", day: 22, year: 1978 }], 
              songs: [
                {
                  title: "Forever (feat. Fabolous, Benny the Butcher, Jim Jones & Capella Grey)",
                  src: "https://embed.music.apple.com/us/music-video/forever-feat-fabolous-benny-the-butcher-jim-jones/1630997974"
                },
            ]
        },
        {
            artist: "DJ Khaled",
            birthday: [{ month: "November", day: 26, year: 1975 }],
            songs: [
                {
                  title: "Do You Mind (feat. Nicki Minaj, Chris Brown, August Alsina, Jeremih, Future & Rick Ross)",
                  src: "https://embed.music.apple.com/us/music-video/do-you-mind-feat-nicki-minaj-chris-brown-august-alsina/1161802982"
                },
                {
                  title: "EVERY CHANCE I GET (feat. Lil Baby & Lil Durk)",
                  src: "https://embed.music.apple.com/us/music-video/every-chance-i-get-feat-lil-baby-lil-durk/1566098646"
                },
                {
                  title: "Fed Up (Director's Cut) [feat. Usher, Drake, Rick Ross & Young Jeezy]",
                  src: "https://embed.music.apple.com/us/music-video/fed-up-directors-cut-feat-usher-drake-rick-ross-young-jeezy/346267940"
                },
                {
                  title: "Gold Slugs (feat. Chris Brown, August Alsina & Fetty Wap)",
                  src: "https://embed.music.apple.com/us/music-video/gold-slugs-feat-chris-brown-august-alsina-fetty-wap/1445238190"
                },
                {
                  title: "I DID IT (feat. Post Malone, Megan Thee Stallion, Lil Baby & DaBaby)",
                  src: "https://embed.music.apple.com/us/music-video/i-did-it-feat-post-malone-megan-thee-stallion-lil-baby-dababy/1569647572"
                },
                {
                  title: "I Got the Keys (feat. JAY-Z, Future)",
                  src: "https://embed.music.apple.com/us/music-video/i-got-the-keys-feat-jay-z-future/1127471230"
                },
                {
                  title: "STAYING ALIVE (feat. Drake, Lil Baby)",
                  src: "https://embed.music.apple.com/us/music-video/staying-alive-feat-drake-lil-baby/1638226599"
                },
                {
                  title: "WHERE YOU COME FROM (feat. Buju Banton, Capleton, Bounty Killer)",
                  src: "https://embed.music.apple.com/us/music-video/where-you-come-from-feat-buju-banton-capleton-bounty-killer/1565625277"
                },
                {
                  title: "Wild Thoughts (feat. Rihanna & Bryson Tiller)",
                  src: "https://embed.music.apple.com/us/music-video/wild-thoughts-feat-rihanna-bryson-tiller/1248906873"
                },
            ]
        },
                {
                    artist: "DMX",
                    birthday: [{ month: "December", day: 18, year: 1970 }],
                    songs: [
                {
                  title: "What They Really Want (feat. Sisqó)",
                  src: "https://embed.music.apple.com/us/music-video/what-they-really-want-feat-sisq%C3%B3/1617129177"
                }
              ]
            },
            {
              artist: "Doja Cat",
              birthday: [{ month: "October", day: 21, year: 1995 }],
              songs: [
                {
                  title: "Agora Hills",
                  src: "https://embed.music.apple.com/us/music-video/agora-hills/1708315527"
                },
                {
                  title: "Attention",
                  src: "https://embed.music.apple.com/us/music-video/attention/1692434857"
                },
                {
                  title: "Demons",
                  src: "https://embed.music.apple.com/us/music-video/demons/1705231214"
                },
                {
                  title: "Kiss Me More (feat. SZA)",
                  src: "https://embed.music.apple.com/us/music-video/kiss-me-more-feat-sza/1562243421"
                },
                {
                  title: "Paint the Town Red",
                  src: "https://embed.music.apple.com/us/music-video/paint-the-town-red/1701008023"
                },
                {
                  title: "Say So",
                  src: "https://embed.music.apple.com/us/music-video/say-so/1500333920"
                },
                {
                  title: "Vegas (from the Original Motion Picture Soundtrack ELVIS)",
                  src: "https://embed.music.apple.com/us/music-video/vegas-from-the-original-motion-picture-soundtrack-elvis/1627107052"
                },
                {
                  title: "Woman",
                  src: "https://embed.music.apple.com/us/music-video/woman/1598227453"
                },
            ]
        },
        {
            artist: "Doja Cat & Tyga",
            songs: [
                {
                  title: "Juicy (Official Video)",
                  src: "https://embed.music.apple.com/us/music-video/juicy/1560225429"
                }
              ]
            },
            {
                artist: "Don Toliver",
                birthday: [{ month: "June", day: 12, year: 1994 }],
                songs: [
                    {
                      title: "BROTHER STONE (feat. KODAK BLACK)",
                      src: "https://embed.music.apple.com/us/music-video/brother-stone-feat-kodak-black/1752748296"
                    }
                  ]
                },
            {
              artist: "Donell Jones",
              birthday: [{ month: "May", day: 22, year: 1973 }],
              songs: [
                {
                  title: "U Know What's Up",
                  src: "https://embed.music.apple.com/us/music-video/u-know-whats-up/646692933"
                },
            ]
        },
                {
                    artist: "DOPE LEMON",
                    birthday: [{ month: "April", day: 27, year: 1986 }],
                    songs: [
                {
                  title: "Kimosabè",
                  src: "https://embed.music.apple.com/us/music-video/kimosab%C3%A8/1690690933"
                }
              ]
            },
            {
              artist: "Dr. Dre",
              birthday: [{ month: "February", day: 18, year: 1965 }],
              songs: [
                {
                  title: "Still D.R.E. (feat. Snoop Dogg)",
                  src: "https://embed.music.apple.com/us/music-video/still-d-r-e-feat-snoop-dogg/1445730676"
                },
            ]
        },
        {
            artist: "Dr. Dre & Eminem",
            songs: [
                {
                  title: "Guilty Conscience (Director's Cut)",
                  src: "https://embed.music.apple.com/us/music-video/guilty-conscience-directors-cut/1445846801"
                },
            ]
        },
        {
            artist: "Dr. Dre, Akon & Snoop Dogg",
            songs: [
                {
                  title: "Kush (feat. Akon & Snoop Dogg)",
                  src: "https://embed.music.apple.com/us/music-video/kush-feat-akon-snoop-dogg/1445852639"
                },
            ]
        },
        {
            artist: "Dr. Dre, Snoop Dogg, Eminem, Mary J. Blige, Kendrick Lamar & 50 Cent",
            songs: [
                {
                  title: "Pepsi Super Bowl LVI Halftime Show (Live)",
                  src: "https://embed.music.apple.com/us/music-video/pepsi-super-bowl-lvi-halftime-show-live/1609894651"
                }
              ]
            },
            {
              artist: "Drake",
              birthday: [{ month: "October", day: 24, year: 1986 }],
              songs: [
                {
                  title: "Another Late Night (feat. Lil Yachty)",
                  src: "https://embed.music.apple.com/us/music-video/another-late-night-feat-lil-yachty/1711506381"
                },
                {
                  title: "Energy",
                  src: "https://embed.music.apple.com/us/music-video/energy/1018467093"
                },
                {
                  title: "First Person Shooter (feat. J. Cole)",
                  src: "https://embed.music.apple.com/us/music-video/first-person-shooter-feat-j-cole/1717084940"
                },
                {
                  title: "In My Feelings",
                  src: "https://embed.music.apple.com/us/music-video/in-my-feelings/1421568453"
                },
                {
                  title: "Nice for What",
                  src: "https://embed.music.apple.com/us/music-video/nice-for-what/1369645446"
                },
                {
                  title: "Nonstop",
                  src: "https://embed.music.apple.com/us/music-video/nonstop/1418838859"
                },
                {
                  title: "Over",
                  src: "https://embed.music.apple.com/us/music-video/over/1445829522"
                },
                {
                  title: "Rich Baby Daddy (feat. SEXXY RED & SZA)",
                  src: "https://embed.music.apple.com/us/music-video/rich-baby-daddy-feat-sexxy-red-sza/1731033374"
                },
                {
                  title: "Take Care (feat. Rihanna)",
                  src: "https://embed.music.apple.com/us/music-video/take-care-feat-rihanna/1445859539"
                },
            ]
        },
        {
            artist: "Drake & 21 Savage",
            songs: [
                {
                  title: "Spin Bout U",
                  src: "https://embed.music.apple.com/us/music-video/spin-bout-u/1674251945"
                },
            ]
        },
        {
            artist: "Drake & Nicki Minaj",
            songs: [
                {
                  title: "Moment 4 Life (feat. Drake)",
                  src: "https://embed.music.apple.com/us/music-video/moment-4-life-feat-drake/1446741240"
                },
            ]
        },
        {
            artist: "Drake & Rihanna",
            songs: [
                {
                  title: "What's My Name? (feat. Drake)",
                  src: "https://embed.music.apple.com/us/music-video/whats-my-name-feat-drake/1445826170"
                }
              ]
            },
            {
              artist: "Drake,Kanye West,Lil Wayne & Eminem",
              songs: [
                {
                  title: "Forever",
                  src: "https://embed.music.apple.com/us/music-video/forever/1445713900"
                },
            ]
        },
                {
                    artist: "DreamDoll",
                    birthday: [{ month: "February", day: 28, year: 1992 }],
                    songs: [
                {
                  title: "Who You Loving? (feat. G-Eazy & Rahky)",
                  src: "https://embed.music.apple.com/us/music-video/who-you-loving-feat-g-eazy-rahky/1498143190"
                }
              ]
            },
            {
                artist: "Drewski",
                birthday: [{ month: "August", day: 22, year: 1987 }],
                songs: [
           
                {
                  title: "Water (feat. DreamDoll, Molly Brazy & Rubi Rose)",
                  src: "https://embed.music.apple.com/us/music-video/water-feat-dreamdoll-molly-brazy-rubi-rose/1521323897"
                }
              ]
            },
            {
              artist: "Dua Lipa",
              birthday: [{ month: "August", day: 22, year: 1995 }],
              songs: [
                {
                    title: "Blow Your Mind (Mwah)",
                      src: "https://embed.music.apple.com/us/music-video/blow-your-mind-mwah/1155100384"
                  },
               {
                    title: "Houdini",
                  src: "https://embed.music.apple.com/us/music-video/houdini/1715832411"
                  },
                {
                  title: "Levitating (feat. DaBaby)",
                  src: "https://embed.music.apple.com/us/music-video/levitating-feat-dababy/1534312182"
                },
                {
                  title: "New Rules",
                  src: "https://embed.music.apple.com/us/music-video/new-rules/1258705880"
                },
                {
                  title: "We're Good",
                  src: "https://embed.music.apple.com/us/music-video/were-good/1553279848"
                },
            ]
        },
        {
            artist: "Elaine",
            birthday: [{ month: "April", day: 2, year: 1999 }],
            songs: [
                {
                  title: "Right Now",
                  src: "https://embed.music.apple.com/us/music-video/right-now/1567072732"
                },
            ]
        },
        {
            artist: "Ellie Goulding",
            birthday: [{ month: "December", day: 30, year: 1986 }],
            songs: [
                {
                  title: "Power",
                  src: "https://embed.music.apple.com/us/music-video/power/1514102333"
                }
              ]
            },
            {
              artist: "Eminem",
              birthday: [{ month: "October", day: 17, year: 1972 }],
              songs: [
                {
                  title: "Cleanin' Out My Closet",
                  src: "https://embed.music.apple.com/us/music-video/cleanin-out-my-closet/1644955627"
                },
                {
                  title: "Darkness",
                  src: "https://embed.music.apple.com/us/music-video/darkness/1495273782"
                },
                {
                  title: "Fall",
                  src: "https://embed.music.apple.com/us/music-video/fall/1435145444"
                },
                {
                  title: "Rap God",
                  src: "https://embed.music.apple.com/us/music-video/rap-god/1445869138"
                },
                {
                  title: "Stan",
                  src: "https://embed.music.apple.com/us/music-video/stan/1446004925"
                },
            ]
        },
        {
            artist: "Eminem,Dr. Dre & Hittman",
            songs: [
                {
                  title: "Forgot About Dre",
                  src: "https://embed.music.apple.com/us/music-video/forgot-about-dre/1446734568"
                }
              ]
            },
            {
                artist: "Eminem & Skylar Grey",
                birthday: [{ month: "October", day: 17, year: 1972 },{ month: "February", day: 23, year: 1986 }], 
                songs: [
                    {
                      title: "Temporary",
                      src: "https://embed.music.apple.com/us/music-video/temporary/1772118280"
                    }
                  ]
                },
            {
              artist: "Empire Cast",
              songs: [
                {
                  title: "All Nite (feat. Yazz, Serayah, Jamila Velazquez & Yo Gotti) [Yo Gotti Remix [Video]]",
                  src: "https://embed.music.apple.com/us/music-video/all-nite-feat-yazz-serayah-jamila-velazquez-yo-gotti/1610045575"
                }
              ]
            },
            {
              artist: "EST Gee",
              birthday: [{ month: "May", day: 11, year: 1994 }],
              songs: [
                {
                  title: "Turn The Streets Up",
                  src: "https://embed.music.apple.com/us/music-video/turn-the-streets-up/1689276430"
                }
              ]
            },
            {
              artist: "Estelle",
              birthday: [{ month: "January", day: 18, year: 1980 }],
              songs: [
                {
                  title: "American Boy (feat. Kanye West)",
                  src: "https://embed.music.apple.com/us/music-video/american-boy-feat-kanye-west/1380146764"
                }
              ]
            },
            {
              artist: "Eurythmics",
              birthday: [{ month: "December", day: 25, year: 1954 },{ month: "September", day: 9, year: 1952 }],
              songs: [
                {
                  title: "Sweet Dreams (Are Made of This)",
                  src: "https://embed.music.apple.com/us/music-video/sweet-dreams-are-made-of-this/299925545"
                }
              ]
            },
            {
              artist: "Eve",
              birthday: [{ month: "November", day: 10, year: 1978 }],
              songs: [
                {
                  title: "Let Me Blow Ya Mind",
                  src: "https://embed.music.apple.com/us/music-video/let-me-blow-ya-mind/1445877176"
                },
                {
                  title: "Tambourine (Edited Version)",
                  src: "https://embed.music.apple.com/us/music-video/tambourine-edited-version/1446735452"
                },
                {
                  title: "Who's That Girl?",
                  src: "https://embed.music.apple.com/us/music-video/whos-that-girl/1445852631"
                }
              ]
            },
            {
              artist: "Fabolous",
              birthday: [{ month: "November", day: 18, year: 1977 }],
              songs: [
                {
                  title: "Baby (feat. Mike Shorey)",
                  src: "https://embed.music.apple.com/us/music-video/baby-feat-mike-shorey/1631808611"
                },
                {
                  title: "Can't Deny It (feat. Nate Dogg)",
                  src: "https://embed.music.apple.com/us/music-video/cant-deny-it-feat-nate-dogg/1628082365"
                },
                {
                  title: "Can't Let You Go (feat. Mike Shorey & Lil' Mo) [Edited Version]",
                  src: "https://embed.music.apple.com/us/music-video/cant-let-you-go-feat-mike-shorey-lil-mo-edited-version/281894338"
                },
                {
                  title: "Diamonds",
                  src: "https://embed.music.apple.com/us/music-video/diamonds/1445833936"
                },
                {
                  title: "Into You (feat. Tamia)",
                  src: "https://embed.music.apple.com/us/music-video/into-you-feat-tamia/1470044745"
                },
                {
                  title: "Lights Out",
                  src: "https://embed.music.apple.com/us/music-video/lights-out/1445862893"
                },
                {
                  title: "Lituation",
                  src: "https://embed.music.apple.com/us/music-video/lituation/1445125703"
                },
                {
                  title: "My Time (feat. Jeremih) [Bonus Video]",
                  src: "https://embed.music.apple.com/us/music-video/my-time-feat-jeremih-bonus-video/1452869110"
                },
                {
                  title: "Tit 4 Tat (feat. Pharrell)",
                  src: "https://embed.music.apple.com/us/music-video/tit-4-tat-feat-pharrell/281888046"
                },
                {
                  title: "You Be Killin Em",
                  src: "https://embed.music.apple.com/us/music-video/you-be-killin-em/1445830852"
                },
            ]
        },
        {
            artist: "Fabolous & JAY-Z",
            songs: [
                {
                  title: "Money Goes, Honey Stay (When the Money Goes Remix)",
                  src: "https://embed.music.apple.com/us/music-video/money-goes-honey-stay-when-the-money-goes-remix/1445854489"
                },
            ]
        },
        {
            artist: "Fabolous featuring Ne-Yo",
            songs: [
                {
                  title: "Make Me Better (feat. Ne-Yo)",
                  src: "https://embed.music.apple.com/us/music-video/make-me-better-feat-ne-yo/1445753866"
                }
              ]
            },
            {
                artist: "Fabolous, Jagged Edge & P. Diddy",
                songs: [
          {
            title: "Trade It All Part 2",
            src: "https://embed.music.apple.com/us/music-video/trade-it-all-part-2/1537223436"
        },
    ]
},
{
    artist: "Fabolous, Keri Hilson & Ryan Leslie",
    songs: [
        {
            title: "Everything, Everyday, Everywhere",
            src: "https://embed.music.apple.com/us/music-video/everything-everyday-everywhere/1446741205"
        },
    ]
},
{
    artist: "Faith Hill",
    birthday: [{ month: "September", day: 21, year: 1967 }],
    songs: [
        {
            title: "Breathe",
            src: "https://embed.music.apple.com/us/music-video/breathe/265001620"
        },
    ]
},
{
    artist: "Far East Movement",
    songs: [
        {
            title: "Dirty Bass (feat. Tyga)",
            src: "https://embed.music.apple.com/us/music-video/dirty-bass-feat-tyga/1446009754"
        },
        {
            title: "The Illest (feat. Riff Raff)",
            src: "https://embed.music.apple.com/us/music-video/the-illest-feat-riff-raff/1444344875"
        },
        {
            title: "Like a G6 (feat. The Cataracs & Dev)",
            src: "https://embed.music.apple.com/us/music-video/like-a-g6-feat-the-cataracs-dev/1434912572"
        },
        {
            title: "Live My Life (feat. Justin Bieber, Redfoo)",
            src: "https://embed.music.apple.com/us/music-video/live-my-life-feat-justin-bieber-redfoo/1445856539"
        },
        {
            title: "Turn Up the Love (feat. Cover Drive)",
            src: "https://embed.music.apple.com/us/music-video/turn-up-the-love-feat-cover-drive/1446007734"
        },
    ]
},
        {
            artist: "Far East Movement & The Stereotypes",
            songs: [
        {
            title: "Girls On the Dance Floor (feat. Stereotypes)",
            src: "https://embed.music.apple.com/us/music-video/girls-on-the-dance-floor-feat-stereotypes/1445826014"
        },
    ]
},
{
    artist: "Farruko, Nicki Minaj & Bad Bunny", 
    songs: [
        {
            title: "Krippy Kush (feat. Travis Scott & Rvssian) [Remix]",
            src: "https://embed.music.apple.com/us/music-video/krippy-kush-feat-travis-scott-rvssian-remix/1335030276"
        },
    ]
},
{
    artist: "Fat Joe",
    birthday: [{ month: "August", day: 19, year: 1970 }],
    songs: [
        {
            title: "What's Luv? (feat. Ashanti)",
            src: "https://embed.music.apple.com/us/music-video/whats-luv-feat-ashanti/1170751133"
        },
    ]
},
        {
            artist: "Fat Joe, DJ Khaled & Amorphous",
            songs: [
        {
            title: "Sunshine (The Light)",
            src: "https://embed.music.apple.com/us/music-video/sunshine-the-light/1550139945"
        },
    ]
},
{
    artist: "Fat Joe, Dre & Lil Wayne",
    songs: [
        {
            title: "Pullin",
            src: "https://embed.music.apple.com/us/music-video/pullin/1471808988"
        },
    ]
},
{
    artist: "Fat Joe, Remy & Terror Squad",
    songs: [
        {
            title: "Lean Back (Alternate Version)",
            src: "https://embed.music.apple.com/us/music-video/lean-back-alternate-version/1445834531"
        },
    ]
},
{
    artist: "Fat Joe, Anitta & DJ Khaled",
    songs: [
        {
            title: "Paradise",
            src: "https://embed.music.apple.com/us/music-video/paradise/1766835686"
        },
    ]
},
{
    artist: "FendiDa Rappa & Cardi B",
    songs: [
        {
            title: "Point Me 2",
            src: "https://embed.music.apple.com/us/music-video/point-me-2/1696353729"
        },
    ]
},
{
    artist: "Fergie",
    birthday: [{ month: "March", day: 27, year: 1975 }],
    songs: [
        {
            title: "M.I.L.F. $",
            src: "https://embed.music.apple.com/us/music-video/m-i-l-f-%24/1282657133"
        },
    ]
},
        {
            artist: "Fergie & Ludacris",
            songs: [
        {
            title: "Glamorous",
            src: "https://embed.music.apple.com/us/music-video/glamorous/1446021430"
        },
    ]
},
{
    artist: "Fifth Harmony",
    birthday: [{ month: "July", day: 7, year: 1993 },{ month: "June", day: 22, year: 1997 },{ month: "June", day: 27, year: 1996 },{ month: "May", day: 31, year: 1996 },{ month: "March", day: 3, year: 1997 }],
    songs: [
        {
            title: "All I Want for Christmas is You",
            src: "https://embed.music.apple.com/us/music-video/all-i-want-for-christmas-is-you/947188169"
        },
        {
            title: "Don't Say You Love Me",
            src: "https://embed.music.apple.com/us/music-video/dont-say-you-love-me/1386547375"
        },
        {
            title: "Down (feat. Gucci Mane)",
            src: "https://embed.music.apple.com/us/music-video/down-feat-gucci-mane/1245733742"
        },
        {
            title: "He Like That",
            src: "https://embed.music.apple.com/us/music-video/he-like-that/1275669567"
        },
        {
            title: "That's My Girl",
            src: "https://embed.music.apple.com/us/music-video/thats-my-girl/1155230497"
        },
        {
            title: "Work from Home (feat. Ty Dolla $ign)",
            src: "https://embed.music.apple.com/us/music-video/work-from-home-feat-ty-dolla-%24ign/1088108602"
        },
        {
            title: "Worth It (feat. Kid Ink)",
            src: "https://embed.music.apple.com/us/music-video/worth-it-feat-kid-ink/980782284"
        },
    ]
},
{
    artist: "FINNEAS",
    birthday: [{ month: "July", day: 30, year: 1997 }],
    songs: [
{
    title: "Lotus Eater",
    src: "https://embed.music.apple.com/us/music-video/lotus-eater/1771580662"
},
]
},
{
    artist: "Flo Rida",
    birthday: [{ month: "September", day: 16, year: 1979 }],
    songs: [
        {
            title: "How I Feel",
            src: "https://embed.music.apple.com/us/music-video/how-i-feel/772575884"
        },
        {
            title: "My House",
            src: "https://embed.music.apple.com/us/music-video/my-house/1044463386"
        },
        {
            title: "Sweet Sensation",
            src: "https://embed.music.apple.com/us/music-video/sweet-sensation/1389418196"
        },
        {
            title: "Wild Ones (feat. Sia)",
            src: "https://embed.music.apple.com/us/music-video/wild-ones-feat-sia/503002991"
        },
    ]
},
            
        {
            artist: "Florida Georgia Line",
            birthday: [{ month: "January", day: 31, year: 1987 },{ month: "August", day: 26, year: 1985 }],
            songs: [
        {
            title: "God, Your Mama, and Me (feat. Backstreet Boys)",
            src: "https://embed.music.apple.com/us/music-video/god-your-mama-and-me-feat-backstreet-boys/1444878040"
        },
    ]
},
{
    artist: "French Montana",
    birthday: [{ month: "November", day: 9, year: 1984 }],
    songs: [
        {
            title: "Bad B*tch (feat. Jeremih)",
            src: "https://embed.music.apple.com/us/music-video/bad-b-tch-feat-jeremih/1444870133"
        },
        {
            title: "Don't Panic",
            src: "https://embed.music.apple.com/us/music-video/dont-panic/1445276345"
        },
        {
            title: "Famous",
            src: "https://embed.music.apple.com/us/music-video/famous/1334815855"
        },
        {
            title: "Fenty (feat. NAV)",
            src: "https://embed.music.apple.com/us/music-video/fenty-feat-nav/1654798330"
        },
        {
            title: "Figure It Out (feat. Kanye West & Nas)",
            src: "https://embed.music.apple.com/us/music-video/figure-it-out-feat-kanye-west-nas/1110918576"
        },
        {
            title: "Good Summer",
            src: "https://embed.music.apple.com/us/music-video/good-summer/1701524141"
        },
        {
            title: "I Told 'Em",
            src: "https://embed.music.apple.com/us/music-video/i-told-em/1445003178"
        },
        {
            title: "No Shopping (feat. Drake)",
            src: "https://embed.music.apple.com/us/music-video/no-shopping-feat-drake/1139253061"
        },
        {
            title: "No Stylist (feat. Drake)",
            src: "https://embed.music.apple.com/us/music-video/no-stylist-feat-drake/1438446154"
        },
        {
            title: "Off the Rip (feat. Chinx & N.O.R.E.)",
            src: "https://embed.music.apple.com/us/music-video/off-the-rip-feat-chinx-n-o-r-e/1444880351"
        },
        {
            title: "Pop That (feat. Rick Ross, Drake & Lil Wayne)",
            src: "https://embed.music.apple.com/us/music-video/pop-that-feat-rick-ross-drake-lil-wayne/1446004741"
        },
        {
            title: "Shot Caller (feat. Charlie Rock)",
            src: "https://embed.music.apple.com/us/music-video/shot-caller-feat-charlie-rock/1445838671"
        },
    ]
},
{
    artist: "French Montana & Doja Cat",
    songs: [

        {
            title: "Handstand (feat. Saweetie)",
            src: "https://embed.music.apple.com/us/music-video/handstand-feat-saweetie/1599137909"
        },
    ]
},
{
    artist: "French Montana, Fivio Foreign & Fabolous",
    songs: [
        {
            title: "To the Moon",
            src: "https://embed.music.apple.com/us/music-video/to-the-moon/1755779296"
        },
    ]
},
{
    artist: "Fridayy",
    birthday: [{ month: "April", day: 12, year: 2000 }], 
    songs: [
        {
            title: "Baddest in the Room",
           src: "https://embed.music.apple.com/us/music-video/baddest-in-the-room/1766793272"
        },
    ]
},

{
    artist: "Future",
    birthday: [{ month: "November", day: 20, year: 1983 }],
    songs: [
        {
            title: "I Won (feat. Kanye West)",
            src: "https://embed.music.apple.com/us/music-video/i-won-feat-kanye-west/864278482"
        },
        {
            title: "Rich $ex",
            src: "https://embed.music.apple.com/us/music-video/rich-%24ex/1060782622"
        },
  
    {
        title: "WAIT FOR U (feat. Drake & Tems)",
        src: "https://embed.music.apple.com/us/music-video/wait-for-u-feat-drake-tems/1622543724"
    },
    {
        title: "Where Ya At (feat. Drake)",
        src: "https://embed.music.apple.com/us/music-video/where-ya-at-feat-drake/1032769512"
    },
    {
        title: "You Da Baddest (feat. Nicki Minaj)",
        src: "https://embed.music.apple.com/us/music-video/you-da-baddest-feat-nicki-minaj/1264767288"
    },
    {
        title: "TOO FAST",
        src: "https://embed.music.apple.com/us/music-video/too-fast/1769246597"
    },
]
},
    {
        artist: "G-Eazy",
        birthday: [{ month: "May", day: 24, year: 1989 }],
        songs: [
    {
        title: "No Limit Remix (feat. A$AP Rocky, Cardi B, French Montana, Juicy J & Belly)",
        src: "https://embed.music.apple.com/us/music-video/no-limit-remix-feat-a%24ap-rocky-cardi-b-french-montana/1325787316"
    },
]
},
{
    artist: "G-Eazy & Bebe Rexha",
    songs: [
    {
        title: "Me, Myself & I",
        src: "https://embed.music.apple.com/us/music-video/me-myself-i/1053765703"
    },
]
},
{
    artist: "G-Eazy & Halsey",
    songs: [
    {
        title: "Him & I",
        src: "https://embed.music.apple.com/us/music-video/him-i/1320217962"
    },
]
},
{
    artist: "Ginuwine",
    birthday: [{ month: "October", day: 15, year: 1970 }],
    songs: [
    {
        title: "Differences",
        src: "https://embed.music.apple.com/us/music-video/differences/1100308588"
    },
    {
        title: "In Those Jeans",
        src: "https://embed.music.apple.com/us/music-video/in-those-jeans/326348240"
    },
    {
        title: "Pony",
        src: "https://embed.music.apple.com/us/music-video/pony/1363208018"
    },
    {
        title: "So Anxious",
        src: "https://embed.music.apple.com/us/music-video/so-anxious/1366594178"
    },
]
},
{
    artist: "GloRilla",
    birthday: [{ month: "July", day: 28, year: 1999 }],
    songs: [
    {
        title: "TGIF",
        src: "https://embed.music.apple.com/us/music-video/tgif/1753791753"
    },
    {
        title: "Unh Unh",
        src: "https://embed.music.apple.com/us/music-video/unh-unh/1683248673"
    },
    {
        title: "WHATCHU KNO ABOUT ME (feat. Sexyy Red)",
        src: "https://embed.music.apple.com/us/music-video/whatchu-kno-about-me-feat-sexyy-red/1773342707"
    },
]
},
{
    artist: "GloRilla & T-Pain",
    birthday: [{ month: "July", day: 28, year: 1999 } , { month: "September", day: 30, year: 1984 }],
    songs: [
    {
        title: "I LUV HER",
        src: "https://embed.music.apple.com/us/music-video/i-luv-her/1779595332"
    }  
]
},
{
    artist: "Govana & Xtassi",
    songs: [
    {
        title: "Best Friend",
        src: "https://embed.music.apple.com/us/music-video/best-friend/1562651417"
    },
]
},
{
    artist: "Gucci Mane",
    birthday: [{ month: "February", day: 12, year: 1980 }],
    songs: [
    {
        title: "Backwards (feat. Meek Mill)",
        src: "https://embed.music.apple.com/us/music-video/backwards-feat-meek-mill/1469140065"
    },
    {
        title: "I Get The Bag (feat. Migos)",
        src: "https://embed.music.apple.com/us/music-video/i-get-the-bag-feat-migos/1274640216"
    },
    {
        title: "Mouth Full of Golds (feat. Birdman)",
        src: "https://embed.music.apple.com/us/music-video/mouth-full-of-golds-feat-birdman/425516537"
    },
    {
        title: "Spotlight (feat. Usher)",
        src: "https://embed.music.apple.com/us/music-video/spotlight-feat-usher/339603639"
    },
]
},
{
    artist: "Gucci Mane & Nicki Minaj",
    songs: [
    {
        title: "Make Love",
        src: "https://embed.music.apple.com/us/music-video/make-love/1220510181"
    },
]
},
{
    artist: "Gwen Stefani",
    birthday: [{ month: "October", day: 3, year: 1969 }],
    songs: [
    {
        title: "Cool",
        src: "https://embed.music.apple.com/us/music-video/cool/1446861954"
    },
    {
        title: "Let Me Reintroduce Myself",
        src: "https://embed.music.apple.com/us/music-video/let-me-reintroduce-myself/1545953494"
    },
    {
        title: "Make Me Like You",
        src: "https://embed.music.apple.com/us/music-video/make-me-like-you/1445008865"
    },
    {
        title: "Used To Love You",
        src: "https://embed.music.apple.com/us/music-video/used-to-love-you/1444844803"
    },
    {
        title: "You Make It Feel Like Christmas (feat. Blake Shelton)",
        src: "https://embed.music.apple.com/us/music-video/you-make-it-feel-like-christmas-feat-blake-shelton/1443524417"
    },
    {
        title: "4 In the Morning",
        src: "https://embed.music.apple.com/us/music-video/4-in-the-morning/1445835724"
    },
]
},
{
    artist: "Gwen Stefani & Saweetie",
    songs: [
    {
        title: "Slow Clap",
        src: "https://embed.music.apple.com/us/music-video/slow-clap/1562052203"
    },
]
},
{
    artist: "Gwen Stefani & Eve",
    songs: [
    {
        title: "Rich Girl",
        src: "https://embed.music.apple.com/us/music-video/rich-girl/1445830603"
    },
]
},
{
    artist: "Gwen Stefani featuring Slim Thug",
    songs: [
    {
        title: "Luxurious (feat. Slim Thug) [Remix featuring Slim Thug]",
        src: "https://embed.music.apple.com/us/music-video/luxurious-feat-slim-thug-remix-featuring-slim-thug/1445722190"
    },
]
},
{
    artist: "Hailee Steinfeld",
    birthday: [{ month: "December", day: 11, year: 1996 }],
    songs: [
    {
        title: "Afterlife (Dickinson)",
        src: "https://embed.music.apple.com/us/music-video/afterlife-dickinson/1481512514"
    },
    {
        title: "Coast (feat. Anderson .Paak)",
        src: "https://embed.music.apple.com/us/music-video/coast-feat-anderson-paak/1653816969"
    },
    {
        title: "I Love You's",
        src: "https://embed.music.apple.com/us/music-video/i-love-yous/1505602229"
    },
    {
        title: "Love Myself",
        src: "https://embed.music.apple.com/us/music-video/love-myself/1444869095"
    },
    {
        title: "Most Girls",
        src: "https://embed.music.apple.com/us/music-video/most-girls/1444880752"
    },
]
},
{
    artist: "Hailee Steinfeld & BloodPop®",
    songs: [
    {
        title: "Capital Letters",
        src: "https://embed.music.apple.com/us/music-video/capital-letters/1444863331"
    },
]
},
{
    artist: "Hailee Steinfeld & Grey",
    songs: [
    {
        title: "Starving (feat. Zedd)",
        src: "https://embed.music.apple.com/us/music-video/starving-feat-zedd/1444624143"
    },
]
},
{
    artist: "Halle",
    birthday: [{ month: "March", day: 27, year: 2000 }],
    songs: [
    {
        title: "Angel",
        src: "https://embed.music.apple.com/us/music-video/angel/1700720425"
    },
{
        title: "Because I Love You",
        src: "https://embed.music.apple.com/us/music-video/because-i-love-you/1765363047"
}
    ]
},
{
    artist: "Halsey",
    birthday: [{ month: "September", day: 29, year: 1994 }],
    songs: [
{
    title: "Alone (feat. Big Sean & Stefflon Don)",
    src: "https://embed.music.apple.com/us/music-video/alone-feat-big-sean-stefflon-don/1368788041"
},
{
    title: "Bad At Love",
    src: "https://embed.music.apple.com/us/music-video/bad-at-love/1444877599"
},
{
    title: "Castle (The Huntsman: Winter's War Version)",
    src: "https://embed.music.apple.com/us/music-video/castle-the-huntsman-winters-war-version/1445115486"
},
{
    title: "Finally // beautiful stranger",
    src: "https://embed.music.apple.com/us/music-video/finally-beautiful-stranger/1490249516"
},
{
    title: "Graveyard",
    src: "https://embed.music.apple.com/us/music-video/graveyard/1482687449"
},
{
    title: "I am not a woman, I'm a god",
    src: "https://embed.music.apple.com/us/music-video/i-am-not-a-woman-im-a-god/1583145914"
},
    ]
},
{
    artist: "Harry Styles",
    birthday: [{ month: "February", day: 1, year: 1994 }],
    songs: [
{
    title: "Watermelon Sugar",
    src: "https://embed.music.apple.com/us/music-video/watermelon-sugar/1513630813"
},
    ]
},
{
    artist: "Hell Rell",
    birthday: [{ month: "May", day: 3, year: 1979 }],
    songs: [
{
    title: "Show Off",
    src: "https://embed.music.apple.com/us/music-video/show-off/264662128"
},
    ]
},
{
    artist: "Hillary Duff",
    birthday: [{ month: "September", day: 28, year: 1987 }],
    songs: [
{
    title: "All About You",
    src: "https://embed.music.apple.com/us/music-video/all-about-you/922157692"
},
{
    title: "Sparks",
    src: "https://embed.music.apple.com/us/music-video/sparks/1010828706"
},
    ]
},
{
    artist: "Huey",
    birthday: [{ month: "September", day: 12, year: 1987 }],
    songs: [
{
    title: "When I Hustle",
    src: "https://embed.music.apple.com/us/music-video/when-i-hustle/349992285"
},
    ]
},
{
    artist: "Ice Cube",
    birthday: [{ month: "June", day: 15, year: 1969 }],
    songs: [
{
    title: "Aint Got No Haters (feat. Too $hort)",
    src: "https://embed.music.apple.com/us/music-video/aint-got-no-haters-feat-too-%24hort/1457385759"
},
    ]
},
{
    artist: "Ice Spice",
    birthday: [{ month: "January", day: 1, year: 2000 }],
    songs: [
{
    title: "Phat Butt",
    src: "https://embed.music.apple.com/us/music-video/phat-butt/1753775880"
},
    ]
},
{
    artist: "Ice Spice & Central Cee",
    songs: [
{
    title: "Did It First",
   src: "https://embed.music.apple.com/us/music-video/did-it-first/1756654629"
},
    ]
},

{
    artist: "Ice Spice & Nicki Minaj",
    songs: [
{
    title: "Princess Diana",
    src: "https://embed.music.apple.com/us/music-video/princess-diana/1682405342"
},
    ]
},
{
    artist: "Ice Spice & Travis Scott",
    songs: [
{
    title: "Oh Shhh...",
    src: "https://embed.music.apple.com/us/music-video/oh-shhh/1759504802"
},
    ]
},

{
    artist: "Ice T",
    birthday: [{ month: "February", day: 16, year: 1958 }],
    songs: [
{
    title: "I'm Your Pusher",
    src: "https://embed.music.apple.com/us/music-video/im-your-pusher/1518553389"
},
    ]
},
{
    artist: "Iggy Azalea",
    birthday: [{ month: "June", day: 7, year: 1990 }],
    songs: [
{
    title: "Black Widow (feat. Rita Ora)",
    src: "https://embed.music.apple.com/us/music-video/black-widow-feat-rita-ora/1444617277"
},
{
    title: "Change Your Life (feat. T.I.)",
    src: "https://embed.music.apple.com/us/music-video/change-your-life-feat-t-i/1445283702"
},
{
    title: "Fancy (feat. Charli XCX)",
    src: "https://embed.music.apple.com/us/music-video/fancy-feat-charli-xcx/1445286271"
},
{
    title: "Kream (feat. Tyga)",
    src: "https://embed.music.apple.com/us/music-video/kream-feat-tyga/1408989941"
},
{
    title: "Savior (feat. Quavo)",
    src: "https://embed.music.apple.com/us/music-video/savior-feat-quavo/1354072245"
},
{
    title: "Started",
    src: "https://embed.music.apple.com/us/music-video/started/1462588295"
},
{
    title: "Team",
    src: "https://embed.music.apple.com/us/music-video/team/1445116920"
},
    ]
},
{
    artist: "Iggy Azalea & Alice Chater",
    songs: [
{
    title: "Lola",
    src: "https://embed.music.apple.com/us/music-video/lola/1487575725"
},
    ]
},
{
    artist: "Inna",
    birthday: [{ month: "October", day: 16, year: 1986 }],
    songs: [
{
    title: "Be My Lover",
    src: "https://embed.music.apple.com/us/music-video/be-my-lover/725906260"
},
{
    title: "Endless",
    src: "https://embed.music.apple.com/us/music-video/endless/500224033"
},
{
    title: "Good Time (feat. Pitbull)",
    src: "https://embed.music.apple.com/us/music-video/good-time-feat-pitbull/915164609"
},
{
    title: "More Than Friends (feat. Daddy Yankee)",
    src: "https://embed.music.apple.com/us/music-video/more-than-friends-feat-daddy-yankee/714521124"
},
{
    title: "No Help",
    src: "https://embed.music.apple.com/us/music-video/no-help/1439901632"
},
{
    title: "Un Momento",
    src: "https://embed.music.apple.com/us/music-video/un-momento/469579945"
},
{
    title: "Wow",
    src: "https://embed.music.apple.com/us/music-video/wow/526837559"
},
{
    title: "10 Minutes",
    src: "https://embed.music.apple.com/us/music-video/10-minutes/415916301"
},
    ]
},
{
    artist: "IVE",
    songs: [
{
    title: "I Am",
    src: "https://embed.music.apple.com/us/music-video/i-am/1681572659"
},
    ]
},
{
    artist: "IVE & Saweetie",
    songs: [
{
    title: "All Night",
    src: "https://embed.music.apple.com/us/music-video/all-night/1726428520"
},
    ]
},
{
    artist: "J-Kwon",
    birthday: [{ month: "March", day: 28, year: 1986 }],
    songs: [
{
    title: "Tipsy",
    src: "https://embed.music.apple.com/us/music-video/tipsy/312890759"
},
    ]
},
{
    artist: "J. Holiday",
    birthday: [{ month: "November", day: 29, year: 1984 }],
    songs: [
{
    title: "Bed",
    src: "https://embed.music.apple.com/us/music-video/bed/720006324"
}
]
},
{
    artist: "J.R. & Trey Songz",
    songs: [
{
    title: "Best Friend (feat. Trey Songz)",
    src: "https://embed.music.apple.com/us/music-video/best-friend-feat-trey-songz/1134695803"
},
    ]
},
{
    artist: "Ja Rule",
    birthday: [{ month: "February", day: 29, year: 1976 }],
    songs: [
{
    title: "Always On Time",
    src: "https://embed.music.apple.com/us/music-video/always-on-time/1689681196"
},
{
    title: "Between Me & You (feat. Christina Milian) [Edited]",
    src: "https://embed.music.apple.com/us/music-video/between-me-you-feat-christina-milian-edited/1445744570"
},
{
    title: "Down Ass Chick (feat. Charlie Baltimore)",
    src: "https://embed.music.apple.com/us/music-video/down-ass-chick-feat-charlie-baltimore/1445725702"
},
{
    title: "Holla Holla (feat. Busta Rhymes, JAY Z, Memphis Bleek, Black Child, Caddillac Tah & Vita)",
    src: "https://embed.music.apple.com/us/music-video/holla-holla-feat-busta-rhymes-jay-z-memphis-bleek-black/1445733524"
},
{
    title: "New York (feat. Fat Joe & Jadakiss)",
    src: "https://embed.music.apple.com/us/music-video/new-york-feat-fat-joe-jadakiss/1469553245"
},
{
    title: "Put It On Me (feat. Vita & Lil' Mo)",
    src: "https://embed.music.apple.com/us/music-video/put-it-on-me-feat-vita-lil-mo/1689317822"
},
    ]
},
{
    artist: "Ja Rule & Lloyd",
    songs: [
{
    title: "Caught Up (Edited Version)",
    src: "https://embed.music.apple.com/us/music-video/caught-up-edited-version/1446735179"
},
    ]
},
{
    artist: "Ja Rule featuring Ashanti",
    songs: [
{
    title: "Mesmerize",
    src: "https://embed.music.apple.com/us/music-video/mesmerize/1445878111"
},
    ]
},
{
    title: "Down 4 U",
    src: "https://embed.music.apple.com/us/music-video/down-4-u/1445833866"
},
{
    artist: "Jack Harlow",
    birthday: [{ month: "March", day: 13, year: 1998 }],
    songs: [
{
    title: "Churchill Downs (feat. Drake)",
    src: "https://embed.music.apple.com/us/music-video/churchill-downs-feat-drake/1627076797"
},
{
    title: "Lovin On Me",
    src: "https://embed.music.apple.com/us/music-video/lovin-on-me/1715709386"
},
{
    title: "Tranquility",
    src: "https://embed.music.apple.com/us/music-video/tranquility/1789237279"
},
    ]
},
{
    artist: "Jadakiss",
    birthday: [{ month: "May", day: 27, year: 1975 }],
    songs: [
{
    title: "Hold You Down (feat. Emanny)",
    src: "https://embed.music.apple.com/us/music-video/hold-you-down-feat-emanny/1445827843"
},
{
    title: "Jason (feat. Swizz Beatz)",
    src: "https://embed.music.apple.com/us/music-video/jason-feat-swizz-beatz/1444851760"
},
{
    title: "Toast to That (feat. Fred the Godson)",
    src: "https://embed.music.apple.com/us/music-video/toast-to-that-feat-fred-the-godson/1445859261"
},
{
    title: "U Make Me Wanna",
    src: "https://embed.music.apple.com/us/music-video/u-make-me-wanna/1445827056"
},
    ]
},
{
    artist: "Jagged Edge",
    songs: [
{
    title: "Where The Party At (feat. Nelly)",
    src: "https://embed.music.apple.com/us/music-video/where-the-party-at-feat-nelly/282475801"
},
    ]
},
{
    artist: "Jahmiel",
    birthday: [{ month: "August", day: 30, year: 1992 }],
    songs: [
{
    title: "Favorite Dress",
    src: "https://embed.music.apple.com/us/music-video/favorite-dress/1662701105"
},
    ]
},
{
    artist: "Jahvillani",
    birthday: [{ month: "September", day: 8, year: 1994 }],
    songs: [
{
    title: "Smooth (feat. Skillibeng)",
    src: "https://embed.music.apple.com/us/music-video/smooth-feat-skillibeng/1551671969"
},
    ]
},
{
    artist: "James Blunt",
    birthday: [{ month: "February", day: 22, year: 1974 }],
    songs: [
{
    title: "Beside You",
    src: "https://embed.music.apple.com/us/music-video/beside-you/1701598333"
},
    ]
},
{
    artist: "Jamie Foxx",
    birthday: [{ month: "December", day: 13, year: 1967 }],
    songs: [
{
    title: "Blame It (feat. T-Pain)",
    src: "https://embed.music.apple.com/us/music-video/blame-it-feat-t-pain/306368686"
},
{
    title: "Fall for Your Type (feat. Drake)",
    src: "https://embed.music.apple.com/us/music-video/fall-for-your-type-feat-drake/409361856"
},
{
    title: "Unpredictable (feat. Ludacris)",
    src: "https://embed.music.apple.com/us/music-video/unpredictable-feat-ludacris/288615817"
},
{
    title: "You Changed Me (feat. Chris Brown)",
    src: "https://embed.music.apple.com/us/music-video/you-changed-me-feat-chris-brown/1001265848"
},
    ]
},
{
    artist: "Jamie Foxx & Jamie Foxx",
    birthday: [{ month: "December", day: 13, year: 1967 },{ month: "October", day: 24, year: 1986 },{ month: "June", day: 8, year: 1977 },{ month: "September", day:20, year: 1977 }],  
    songs: [
{
    title: "Digital Girl Remix (Featuring featuring Drake, Kanye West & The-Dream)",
    src: "https://embed.music.apple.com/us/music-video/digital-girl-remix-feat-drake-kanye-west-the-dream/327572547"
},
    ]
},
{
    artist: "Jana Kramer",
    birthday: [{ month: "December", day: 2, year: 1983 }],
    songs: [
{
    title: "Circles",
    src: "https://embed.music.apple.com/us/music-video/circles/1157119116"
},
{
    title: "Love",
    src: "https://embed.music.apple.com/us/music-video/love/886935047"
},
{
    title: "Why Ya Wanna",
    src: "https://embed.music.apple.com/us/music-video/why-ya-wanna/501207325"
},
    ]
},
{
    artist: "JAY-Z",
    birthday: [{ month: "December", day: 4, year: 1969 }],
    songs: [
{
    title: "Change Clothes (Edited Version) [feat. Pharrell Williams] [BET Version]",   
    src: "https://embed.music.apple.com/us/music-video/change-clothes-edited-version-feat-pharrell-williams/1445861635"
},
{
    title: "Empire State Of Mind (feat. Alicia Keys)",
    src: "https://embed.music.apple.com/us/music-video/empire-state-of-mind-feat-alicia-keys/1445845689"
},
{
    title: "Holy Grail (feat. Justin Timberlake)",
    src: "https://embed.music.apple.com/us/music-video/holy-grail-feat-justin-timberlake/1444605742"
},
{
    title: "On To The Next One (feat. Swizz Beatz)",
    src: "https://embed.music.apple.com/us/music-video/on-to-the-next-one-feat-swizz-beatz/1445839270"
},
{
    title: "Run This Town (feat. Rihanna & Kanye West)",
    src: "https://embed.music.apple.com/us/music-video/run-this-town-feat-rihanna-kanye-west/1670256030"
},
{
    title: "Show Me What You Got (Video)",
    src: "https://embed.music.apple.com/us/music-video/show-me-what-you-got-video/1440984796"
},
{
    title: "Song Cry",
    src: "https://embed.music.apple.com/us/music-video/song-cry/1445857943"
},
{
    title: "Young Forever (feat. Mr. Hudson)",
    src: "https://embed.music.apple.com/us/music-video/young-forever-feat-mr-hudson/1445863993"
},
            ]
        },
        {
            artist: "JAY-Z & Kanye West",
            songs: [
{
    title: "Ni**as in Paris",
    src: "https://embed.music.apple.com/us/music-video/ni-as-in-paris/1445731977"
},
{
    title: "Otis (feat. Otis Redding)",
    src: "https://embed.music.apple.com/us/music-video/otis-feat-otis-redding/1445738624"
},
            ]
        },
        {
            artist: "JAY-Z & UGK",
            songs: [
{
    title: "Big Pimpin' (feat. UGK)",
    src: "https://embed.music.apple.com/us/music-video/big-pimpin-feat-ugk/1445833331"
},
            ]
        },
        {
            artist: "Jaz Karis & Tone Stith",
            songs: [
{
    title: "MET YOU AT A BAR",
    src: "https://embed.music.apple.com/us/music-video/met-you-at-a-bar/1730755295"
},
            ]
        },
        {
            artist: "JCY",
            songs: [
{
    title: "Thong Song (feat. Sisqo)",
    src: "https://embed.music.apple.com/us/music-video/thong-song-feat-sisqo/1264677482"
},
            ]
        },
        {
            artist: "JENNIE",
            birthday: [{ month: "January", day: 16, year: 1996 }],
            songs: [
{
    title: "Mantra",
    src: "https://embed.music.apple.com/us/music-video/mantra/1773340446"
},
            ]
        },
        {
            artist: "Jennifer Hudson",
            birthday: [{ month: "September", day: 12, year: 1981 }],
            songs: [
{
    title: "I Can't Describe (The Way I Feel) [feat. T.I.]",
    src: "https://embed.music.apple.com/us/music-video/i-cant-describe-the-way-i-feel-feat-t-i/804918900"
},
{
    title: "I Still Love You",
    src: "https://embed.music.apple.com/us/music-video/i-still-love-you/1286550494"
},
{
    title: "If This Isn't Love",
    src: "https://embed.music.apple.com/us/music-video/if-this-isnt-love/305947184"
},
{
    title: "Spotlight",
    src: "https://embed.music.apple.com/us/music-video/spotlight/305382892"
},
            ]
        },
        {
            artist: "Jennifer Hudson & Ne-Yo",
            songs: [
{
    title: "Think Like a Man (feat. Rick Ross)",
    src: "https://embed.music.apple.com/us/music-video/think-like-a-man-feat-rick-ross/506095205"
},
            ]
        },
        {
            artist: "Jennifer Lopez",
            birthday: [{ month: "July", day: 24, year: 1969 }],
            songs: [
{
    title: "Can't Get Enough",
    src: "https://embed.music.apple.com/us/music-video/cant-get-enough/1725018907"
},
{
    title: "If You Had My Love",
    src: "https://embed.music.apple.com/us/music-video/if-you-had-my-love/326346599"
},
            ]
        },
        {
            artist: "Jennifer Lopez & Ja Rule",
            songs: [
{
    title: "I'm Real (Re-Mix Version)",
    src: "https://embed.music.apple.com/us/music-video/im-real-re-mix-version/327364460"
},
            ]
        },
        {
            artist: "Jennifer Lopez & Shakira",
            songs: [
{
    title: "The Pepsi Super Bowl Halftime Performance",
    src: "https://embed.music.apple.com/us/music-video/the-pepsi-super-bowl-halftime-performance/1497482857"
},
            ]
        },
        {
            artist: "Jeremih",
            birthday: [{ month: "July", day: 17, year: 1987 }],
            songs: [
{
    title: "Birthday Sex (Edited Version)",
    src: "https://embed.music.apple.com/us/music-video/birthday-sex-edited-version/1445868924"
},
            ]
        },
        {
            artist: "Jessie Ware",
            birthday: [{ month: "October", day: 15, year: 1984 }],
            songs: [
{
    title: "Free Yourself",
    src: "https://embed.music.apple.com/us/music-video/free-yourself/1638145210"
},
            ]
        },
        {
            artist: "Jhené Aiko",
            birthday: [{ month: "March", day: 16, year: 1988 }],
            songs: [
{
    title: "Spotless Mind",
    src: "https://embed.music.apple.com/us/music-video/spotless-mind/1445025579"
},
{
    title: "Tryna Smoke",
    src: "https://embed.music.apple.com/us/music-video/tryna-smoke/1564134993"
},
{
    title: "10K Hours (feat. Nas)",
    src: "https://embed.music.apple.com/us/music-video/10k-hours-feat-nas/1558717559"
},
            ]
        },
        {
            artist: "Jim Jones",
            birthday: [{ month: "July", day: 15, year: 1976 }],
            songs: [
{
    title: "A Monster Made It",
    src: "https://embed.music.apple.com/us/music-video/a-monster-made-it/1560365398"
},
            ]
        },
        {
            artist: "Jim Jones & Harry Fraud",
            songs: [
{
    title: "Bada Bing (feat. French Montana)",
    src: "https://embed.music.apple.com/us/music-video/bada-bing-feat-french-montana/1556723846"
},
            ]
        },
        {
            artist: "Jim Jones & Ron Browz",
            songs: [
{
    title: "Pop Champagne (feat. Juelz Santana)",
    src: "https://embed.music.apple.com/us/music-video/pop-champagne-feat-juelz-santana/297603450"
},
            ]
        },
        {
            artist: "Joe",
            birthday: [{ month: "July", day: 5, year: 1973 }],
            songs: [
{
    title: "I Wanna Know",
    src: "https://embed.music.apple.com/us/music-video/i-wanna-know/548918354"
},
            ]
        },
        {
            artist: "Joe & Joe Thomas",
            songs: [
{
    title: "Ride Wit U (feat. G-Unit) [MTV Version]",
    src: "https://embed.music.apple.com/us/music-video/ride-wit-u-feat-g-unit-mtv-version/1534886506"
},
            ]
        },
        {
            artist: "John Legend",
            birthday: [{ month: "December", day: 28, year: 1978 }],
            songs: [
{
    title: "Love Me Now",
    src: "https://embed.music.apple.com/us/music-video/love-me-now/1175027689"
},
{
    title: "Save Room",
    src: "https://embed.music.apple.com/us/music-video/save-room/279031961"
},
{
    title: "Stereo",
    src: "https://embed.music.apple.com/us/music-video/stereo/279033629"
},
{
    title: "Tonight (Best You Ever Had) [With Movie Footage]",
    src: "https://embed.music.apple.com/us/music-video/tonight-best-you-ever-had-with-movie-footage/509385068"
},
            ]
        },
        {
            artist: "John Lindahl",
            birthday: [{ month: "August", day: 10, year: 1996 }],
            songs: [
{
    title: "Cuddled Up (feat. Pia Mia)",
    src: "https://embed.music.apple.com/us/music-video/cuddled-up-feat-pia-mia/1537979206"
},
            ]
        },
        {
            artist: "Jordin Sparks",
            birthday: [{ month: "December", day: 22, year: 1989 }],
            songs: [
{
    title: "Double Tap (feat. 2 Chainz)",
    src: "https://embed.music.apple.com/us/music-video/double-tap-feat-2-chainz/1286345350"
},
{
    title: "No Air (with Chris Brown)",
    src: "https://embed.music.apple.com/us/music-video/no-air-with-chris-brown/275080463"
},
            ]
        },
        {
            artist: "Jorja Smith",
            birthday: [{ month: "June", day: 11, year: 1997 }],
            songs: [
{
    title: "Falling or Flying",
    src: "https://embed.music.apple.com/us/music-video/falling-or-flying/1704023460"
}
            ]
        },
        {
            artist: "Josh Levi",
            birthday: [{ month: "October", day: 7, year: 1998 }],
            songs: [
    {
        title: "BIRTHDAY DANCE",
        src: "https://embed.music.apple.com/us/music-video/birthday-dance/1732292790"
    },
]
},
{
    artist: "Juice WRLD",
    birthday: [{ month: "December", day: 2, year: 1998 }],
    songs: [

{
title: "World Tour (Aquafina)",
src: "https://embed.music.apple.com/us/music-video/world-tour-aquafina/1767746372"
},
{
    title: "Both Ways",
    src: "https://embed.music.apple.com/us/music-video/both-ways/1773467049"
    },
]
},

{
    artist: "Juicy J",
    birthday: [{ month: "April", day: 5, year: 1975 }],
    songs: [
    {
        title: "Bandz a Make Her Dance (feat. Lil Wayne & 2 Chainz)",
        src: "https://embed.music.apple.com/us/music-video/bandz-a-make-her-dance-feat-lil-wayne-2-chainz/563662849"
    },
]
},
{
    artist: "Julia Michaels",
    birthday: [{ month: "November", day: 13, year: 1993 }],
    songs: [
    {
        title: "Heaven II",
        src: "https://embed.music.apple.com/us/music-video/heaven-ii/1777476949"
    },
]
},
{
    artist: "Justin Bieber",
    birthday: [{ month: "March", day: 1, year: 1994 }],
    songs: [
    {
        title: "As Long As You Love Me (feat. Big Sean)",
        src: "https://embed.music.apple.com/us/music-video/as-long-as-you-love-me-feat-big-sean/1445863696"
    },
    {
        title: "Beauty and a Beat (feat. Nicki Minaj)",
        src: "https://embed.music.apple.com/us/music-video/beauty-and-a-beat-feat-nicki-minaj/1445858362"
    },
    {
        title: "Boyfriend",
        src: "https://embed.music.apple.com/us/music-video/boyfriend/1445866446"
    },
    {
        title: "E.T.A. (Nature Visual)",
        src: "https://embed.music.apple.com/us/music-video/e-t-a-nature-visual/1499173714"
    },
    {
        title: "Habitual (CHANGES: The Movement)",
        src: "https://embed.music.apple.com/us/music-video/habitual-changes-the-movement/1500951385"
    },
    {
        title: "Habitual (Nature Visual)",
        src: "https://embed.music.apple.com/us/music-video/habitual-nature-visual/1501289065"
    },
    {
        title: "Honest (feat. Don Toliver)",
        src: "https://embed.music.apple.com/us/music-video/honest-feat-don-toliver/1621565687"
    },
    {
        title: "One Less Lonely Girl",
        src: "https://embed.music.apple.com/us/music-video/one-less-lonely-girl/1440616571"
    },
    {
        title: "Sorry",
        src: "https://embed.music.apple.com/us/music-video/sorry/1445009885"
    },
    {
        title: "What Do You Mean?",
        src: "https://embed.music.apple.com/us/music-video/what-do-you-mean/1444876398"
    },
    {
        title: "Yummy",
        src: "https://embed.music.apple.com/us/music-video/yummy/1493550886"
    },
]
},
{
    artist: "Justin Timberlake",
    birthday: [{ month: "January", day: 31, year: 1981 }],
    songs: [
    {
        title: "Selfish",
        src: "https://embed.music.apple.com/us/music-video/selfish/1727465730"
    },
]
},
{
    artist: "Juvenile",
    birthday: [{ month: "March", day: 26, year: 1975 }],
    songs: [
    {
        title: "Back That Thang Up (feat. Mannie Fresh & Lil Wayne)",
        src: "https://embed.music.apple.com/us/music-video/back-that-thang-up-feat-mannie-fresh-lil-wayne/1500733251"
    }
]
},
{
    artist: "K CAMP",
    birthday: [{ month: "April", day: 27, year: 1990 }],
    songs: [

    {
        title: "Cut Her Off (feat. Too $hort, YG & Lil Boosie)",
        src: "https://embed.music.apple.com/us/music-video/cut-her-off-feat-too-%24hort-yg-lil-boosie/1444597477"
    },
]
},
{
    artist: "K. Michelle",
    birthday: [{ month: "March", day: 4, year: 1982 }],
    songs: [
    {
        title: "V.S.O.P.",
        src: "https://embed.music.apple.com/us/music-video/v-s-o-p/679464385"
    },
]
},
{
    artist: "Kacey Musgraves",
    birthday: [{ month: "August", day: 21, year: 1988 },],
    songs: [
    {
        title: "The Architect",
        src: "https://embed.music.apple.com/us/music-video/the-architect/1783001111"
    },
]
},
{
    artist: "Kalan.FrFr & Tyga",
    birthday: [{ month: "April", day: 11, year: 1995 }, { month: "November", day: 19, year: 1989 }],
    songs: [
    {
        title: "BUTTERFLY COUPE",
        src: "https://embed.music.apple.com/us/music-video/butterfly-coupe/1700555046"
    },
]
},
{
    artist: "Kali Uchis", 
    birthday: [{ month: "July", day: 17, year: 1994 }],
    songs: [
    {
        title: "Moonlight",
        src: "https://embed.music.apple.com/us/music-video/moonlight/1683457154"
    },
    {
        title: "telepatía",
        src: "https://embed.music.apple.com/us/music-video/telepat%C3%ADa/1559027604"
    },
]
},
{
    artist: "Kane Brown & Katelyn Brown",
    songs: [
    {
        title: "Thank God",
        src: "https://embed.music.apple.com/us/music-video/thank-god/1643987014"
    },
]
},
{
    artist: "Kanye West",
    birthday: [{ month: "June", day: 8, year: 1977 }],
    songs: [
    {
        title: "Heartless (Bonus Video)",
        src: "https://embed.music.apple.com/us/music-video/heartless-bonus-video/1609149434"
    },
    {
        title: "Stronger",
        src: "https://embed.music.apple.com/us/music-video/stronger/1445827752"
    },
]
},
{
    artist: "Kanye West & JAY-Z",
    birthday: [{ month: "June", day: 8, year: 1977 },{ month: "December", day: 4, year: 1969 }],
    songs: [
    {
        title: "No Church In the Wild (feat. Frank Ocean & The-Dream)",
        src: "https://embed.music.apple.com/us/music-video/no-church-in-the-wild-feat-frank-ocean-the-dream/1445740199"
    },
]
},
{
    artist: "Katy Perry",
    birthday: [{ month: "October", day: 25, year: 1984 }],
    songs: [
    {
        title: "Birthday",
        src: "https://embed.music.apple.com/us/music-video/birthday/1445298573"
    },
    {
        title: "Chained to the Rhythm (feat. Skip Marley)",
        src: "https://embed.music.apple.com/us/music-video/chained-to-the-rhythm-feat-skip-marley/1444607526"
    },
    {
        title: "Dark Horse (feat. Juicy J)",
        src: "https://embed.music.apple.com/us/music-video/dark-horse-feat-juicy-j/1446859754"
    },
    {
        title: "E.T. (feat. Kanye West)",
        src: "https://embed.music.apple.com/us/music-video/e-t-feat-kanye-west/719691501"
    },
    {
        title: "Electric",
        src: "https://embed.music.apple.com/us/music-video/electric/1567091884"
    },
    {
        title: "Firework",
        src: "https://embed.music.apple.com/us/music-video/firework/719616133"
    },
    {
        title: "Harleys In Hawaii",
        src: "https://embed.music.apple.com/us/music-video/harleys-in-hawaii/1482847111"
    },
    {
        title: "Hey Hey Hey",
        src: "https://embed.music.apple.com/us/music-video/hey-hey-hey/1444874364"
    },
    {
        title: "I Kissed A Girl",
        src: "https://embed.music.apple.com/us/music-video/i-kissed-a-girl/1445715028"
    },
    {
        title: "Last Friday Night (T.G.I.F.)",
        src: "https://embed.music.apple.com/us/music-video/last-friday-night-t-g-i-f/1365317790"
    },
    {
        title: "LIFETIMES",
       src: "https://embed.music.apple.com/us/music-video/lifetimes/1761763172"
    },
    {
        title: "The One That Got Away",
        src: "https://embed.music.apple.com/us/music-video/the-one-that-got-away/719613663"
    },
    {
        title: "Part Of Me",
        src: "https://embed.music.apple.com/us/music-video/part-of-me/744340992"
    },
    {
        title: "Roar",
        src: "https://embed.music.apple.com/us/music-video/roar/1445316516"
    },
    {
        title: "Teenage Dream",
        src: "https://embed.music.apple.com/us/music-video/teenage-dream/744612079"
    },
    {
        title: "Unconditionally",
        src: "https://embed.music.apple.com/us/music-video/unconditionally/1445283795"
    },
    {
        title: "Wide Awake",
        src: "https://embed.music.apple.com/us/music-video/wide-awake/744390527"
    },
    {
        title: "I'M HIS, HE'S MINE (feat. Doechii)",
        src: "https://embed.music.apple.com/us/music-video/im-his-hes-mine-feat-doechii/1768114894"
    },
]
},
{
    artist: "Katy Perry & Snoop Dogg",
    songs: [

    {
        title: "California Gurls (feat. Snoop Dogg)",
        src: "https://embed.music.apple.com/us/music-video/california-gurls-feat-snoop-dogg/744856479"
    },
]
},
{
    artist: "Kehlani",
    birthday: [{ month: "April", day: 24, year: 1995 }],
    songs: [
    {
        title: "After Hours",
        src: "https://embed.music.apple.com/us/music-video/after-hours/1744954244"
    },
]
},
{
    artist: "Kelis",
    birthday: [{ month: "August", day: 21, year: 1979 }],
    songs: [
    {
        title: "Milkshake",
        src: "https://embed.music.apple.com/us/music-video/milkshake/279013019"
    },
]
},
{
    artist: "Kelly Rowland",
    birthday: [{ month: "February", day: 11, year: 1981 }],
    songs: [
    {
        title: "Like This (feat. Eve) [Video]", 
        src: "https://embed.music.apple.com/us/music-video/like-this-feat-eve-video/251575703"
    },
]
},
{
    artist: "Kelly Rowland, Sarah Chatfield & Megan Gutman",
    songs: [
    {
        title: "Motivation (feat. Lil Wayne) [Explicit Version; Closed Captioned]",
        src: "https://embed.music.apple.com/us/music-video/motivation-feat-lil-wayne-explicit-version-closed-captioned/1445866783"
    },
]
},
{
    artist: "Kelsea Ballerini",
    birthday: [{ month: "September", day: 12, year: 1993 }],
    songs: [
    {
        title: "club",
        src: "https://embed.music.apple.com/us/music-video/club/1486988296"
    },
    {
        title: "half of my hometown (feat. Kenny Chesney)",
        src: "https://embed.music.apple.com/us/music-video/half-of-my-hometown-feat-kenny-chesney/1566914914"
    },
    {
        title: "hole in the bottle",
        src: "https://embed.music.apple.com/us/music-video/hole-in-the-bottle/1529631878"
    },
    {
        title: "la",
        src: "https://embed.music.apple.com/us/music-video/la/1494794114"
    },
    {
        title: "Legends",
        src: "https://embed.music.apple.com/us/music-video/legends/1253101408"
    },
    {
        title: "Miss Me More",
        src: "https://embed.music.apple.com/us/music-video/miss-me-more/1441469289"
    },
    {
        title: "Yeah Boy",
        src: "https://embed.music.apple.com/us/music-video/yeah-boy/1186322864"
    },
]
},
{
    artist: "Kendrick Lamar",
    birthday: [{ month: "June", day: 17, year: 1987 }],
    songs: [
    {
        title: "Not Like Us",
        src: "https://embed.music.apple.com/us/music-video/not-like-us/1755691074"
    },
]
},

{
    artist: "Keri Hilson",
    birthday: [{ month: "December", day: 5, year: 1982 }],
    songs: [
    {
        title: "Pretty Girl Rock",
        src: "https://embed.music.apple.com/us/music-video/pretty-girl-rock/1445831196"
    },
]
},
{
    artist: "Keri Hison & Lil Wayne",
    songs: [
    {
        title: "Turnin Me On (feat. Lil Wayne)",
        src: "https://embed.music.apple.com/us/music-video/turnin-me-on-feat-lil-wayne/1445864946"
    },
]
},
{
    artist: "Keyshia Cole",
    birthday: [{ month: "October", day: 15, year: 1981 }],
    songs: [
    {
        title: "Enough of No Love (feat. Lil Wayne)",
        src: "https://embed.music.apple.com/us/music-video/enough-of-no-love-feat-lil-wayne/1445826803"
    },
    {
        title: "Heaven Sent",
        src: "https://embed.music.apple.com/us/music-video/heaven-sent/1445829804"
    },
    {
        title: "Playa Cardz Right (feat. 2Pac)",
        src: "https://embed.music.apple.com/us/music-video/playa-cardz-right-feat-2pac/1445892082"
    },
]
},
{
    artist: "Kid Cudi",
    birthday: [{ month: "January", day: 30, year: 1984 }],
    songs: [
    {
        title: "Day 'n' Nite",
        src: "https://embed.music.apple.com/us/music-video/day-n-nite/1446007881"
    },
]
},
{
    artist: "Kid Ink",
    birthday: [{ month: "April", day: 1, year: 1986 }],
    songs: [
    {
        title: "Body Language (feat. Usher & Tinashe)",
        src: "https://embed.music.apple.com/us/music-video/body-language-feat-usher-tinashe/934238854"
    },
]
},
{
    artist: "Kid Rock",
    birthday: [{ month: "January", day: 17, year: 1971 }],
    songs: [
    {
        title: "All Summer Long",
        src: "https://embed.music.apple.com/us/music-video/all-summer-long/280875333"
    },
]
},
{
    artist: "Killer Mike & Blxst",
    birthday: [{ month: "April", day: 20, year: 1975 }],
    songs: [
    {
        title: "EXIT 9",
        src: "https://embed.music.apple.com/us/music-video/exit-9/1738655837"
    },
]
},
{
    artist: "Kim Petras & Nicki Minaj",
    birthday: [{ month: "August", day: 27, year: 1992 }, { month: "December", day: 8, year: 1982 }],
    songs: [
    {
        title: "Alone",
        src: "https://embed.music.apple.com/us/music-video/alone/1685903375"
    },
]
},
{
    artist: "Konshens, Rvssian & Shenseea",
    songs: [
    {
        title: "Hard Drive",
        src: "https://embed.music.apple.com/us/music-video/hard-drive/1400824908"
    },
]
},
{
    artist: "Kylie Minogue",
    birthday: [{ month: "May", day: 28, year: 1968 }],
    songs: [
    {
        title: "My Oh My (with Bebe Rexha & Tove Lo)",
        src: "https://embed.music.apple.com/us/music-video/my-oh-my-with-bebe-rexha-tove-lo/1762859768"
    },
    {
        title: "Tension",
        src: "https://embed.music.apple.com/us/music-video/tension/1705455458"
    },
    {
        title: "Lights Camera Action",
        src: "https://embed.music.apple.com/us/music-video/lights-camera-action/1770720629"
    },
]
},
{
    artist: "Lady Gaga",
    birthday: [{ month: "March", day: 28, year: 1986 }],
    songs: [
    {
        title: "Applause",
        src: "https://embed.music.apple.com/us/music-video/applause/1445014286"
    },
        {
            title: "Bad Romance",
            src: "https://embed.music.apple.com/us/music-video/bad-romance/1501704714"
        },
        {
            title: "Beautiful, Dirty, Rich",
            src: "https://embed.music.apple.com/us/music-video/beautiful-dirty-rich/1445831722"
        },
        {
            title: "The Edge of Glory",
            src: "https://embed.music.apple.com/us/music-video/the-edge-of-glory/1446008517"
        },
        {
            title: "Eh, Eh (Nothing Else I Can Say)",
            src: "https://embed.music.apple.com/us/music-video/eh-eh-nothing-else-i-can-say/1501704711"
        },
        {
            title: "G.U.Y.(An ARTPOP Film)",
            src: "https://embed.music.apple.com/us/music-video/g-u-y-an-artpop-film/1445284234"
        },
        {
            title: "Hold My Hand",
            src: "https://embed.music.apple.com/us/music-video/hold-my-hand/1622738980"
        },
        {
            title: "Just Dance (feat. Colby O'Donis)",
            src: "https://embed.music.apple.com/us/music-video/just-dance-feat-colby-odonis/1501704527"
        },
        {
            title: "LoveGame",
            src: "https://embed.music.apple.com/us/music-video/lovegame/1501704705"
        },
        {
            title: "Marry the Night",
            src: "https://embed.music.apple.com/us/music-video/marry-the-night/1446732276"
        },
        {
            title: "Paparazzi",
            src: "https://embed.music.apple.com/us/music-video/paparazzi/1501704537"
        },
        {
            title: "Poker Face",
            src: "https://embed.music.apple.com/us/music-video/poker-face/1445866040"
        },
        {
            title: "911",
            src: "https://embed.music.apple.com/us/music-video/911/1532009653"
        },
    ]
},
{
    artist: "Larry June & Cardo",
    songs: [
        {
            title: "The Good Kind",
            src: "https://embed.music.apple.com/us/music-video/the-good-kind/1703126807"
        },
    ]
},
{
    artist: "Latto",
    birthday: [{ month: "December", day: 22, year: 1998 }],
    songs: [
        {
            title: "B*tch From Da Souf (Remix) [feat. Saweetie & Trina]",
            src: "https://embed.music.apple.com/us/music-video/b-tch-from-da-souf-remix-feat-saweetie-trina/1504113467"
        },
        {
            title: "Big Mama",
            src: "https://embed.music.apple.com/us/music-video/big-mama/1754623477"
        },
        {
            title: "Lottery (feat. LU KALA)",
            src: "https://embed.music.apple.com/us/music-video/lottery-feat-lu-kala/1671915345"
        },
        {
            title: "Put It On Da Floor Again (feat. Cardi B)",
            src: "https://embed.music.apple.com/us/music-video/put-it-on-da-floor-again-feat-cardi-b/1690884781"
        },
        {
            title: "Brokey",
            src: "https://embed.music.apple.com/us/music-video/brokey/1773432362"
        },
    ]
},
{
    artist: "Lenny Kravitz",
    birthday: [{ month: "May", day: 26, year: 1964 }],
    songs: [
        {
            title: "Ride",
            src: "https://embed.music.apple.com/us/music-video/ride/1711391096"
        },
    ]
},
{
    artist: "Leona Lewis",
    birthday: [{ month: "April", day: 3, year: 1985 }],
    songs: [
        {
            title: "Better In Time",
            src: "https://embed.music.apple.com/us/music-video/better-in-time/303682922"
        },
        {
            title: "Bleeding Love (US Version)",
            src: "https://embed.music.apple.com/us/music-video/bleeding-love-us-version/303682920"
        },
        {
            title: "Fire Under My Feet",
            src: "https://embed.music.apple.com/us/music-video/fire-under-my-feet/1445016642"
        },
        {
            title: "Forgive Me (UK Version)",
            src: "https://embed.music.apple.com/us/music-video/forgive-me-uk-version/303682924"
        },
        {
            title: "Happy",
            src: "https://embed.music.apple.com/us/music-video/happy/337860208"
        },
        {
            title: "I Will Be",
            src: "https://embed.music.apple.com/us/music-video/i-will-be/303682926"
        },
        {
            title: "Kiss Me It's Christmas (feat. Ne-Yo) [Official Video]",
            src: "https://embed.music.apple.com/us/music-video/kiss-me-its-christmas-feat-ne-yo/1594589526"
        },
 {
            title: "Lovebird",
            src: "https://embed.music.apple.com/us/music-video/lovebird/584523540"
        },
        {
            title: "One More Sleep",
            src: "https://embed.music.apple.com/us/music-video/one-more-sleep/770186734"
        },
        {
            title: "Thunder",
            src: "https://embed.music.apple.com/us/music-video/thunder/1444846338"
        },
    ]
},
{
    artist: "Liam Payne & Rita Ora",
    birthday: [{ month: "August", day: 29, year: 1993 }, { month: "November", day: 26, year: 1990 }],
    songs: [
        {
            title: "For You (From 'Fifty Shades Freed') [From 'Fifty Shades Freed (Original Motion Picture Soundtrack)']",
            src: "https://embed.music.apple.com/us/music-video/for-you-from-fifty-shades-freed-from-fifty-shades-freed/1445058822"
        },
    ]
},
{
    artist: "Lil Baby",
    birthday: [{ month: "December", day: 3, year: 1994 }],
    songs: [
        {
            title: "All In",
            src: "https://embed.music.apple.com/us/music-video/all-in/1510840894"
        },
        {
            title: "California Breeze",
            src: "https://embed.music.apple.com/us/music-video/california-breeze/1649858323"
        },
        {
            title: "Errbody",
            src: "https://embed.music.apple.com/us/music-video/errbody/1542403418"
        },
        {
            title: "Forever (feat. Lil Wayne)",
            src: "https://embed.music.apple.com/us/music-video/forever-feat-lil-wayne/1510841241"
        },
        {
            title: "Heyy",
            src: "https://embed.music.apple.com/us/music-video/heyy/1648572863"
        },
        {
            title: "On Me",
            src: "https://embed.music.apple.com/us/music-video/on-me/1542841753"
        },
        {
            title: "Right On",
            src: "https://embed.music.apple.com/us/music-video/right-on/1618360453"
        },
        {
            title: "Insecurities",
            src: "https://embed.music.apple.com/us/music-video/insecurities/1779616491"
        },
        {
            title: "F U 2x",
            src: "https://embed.music.apple.com/us/music-video/f-u-2x/1789225170"
        },
    ]
},
{
    artist: "Lil Baby & Gunna",
    songs: [
        {
            title: "Heatin Up",
            src: "https://embed.music.apple.com/us/music-video/heatin-up/1510841228"
        },
    ]
},
{
    artist: "Lil Baby & Megan Thee Stallion",
    birthday: [{ month: "December", day: 3, year: 1994 }, { month: "February", day: 15, year: 1995 }],
    songs: [
        {
            title: "On Me (Remix)",
            src: "https://embed.music.apple.com/us/music-video/on-me-remix/1564812944"
        },
    ]
},
{
    artist: "Lil Durk",
    birthday: [{ month: "October", day: 19, year: 1992 }],
    songs: [
        {
            title: "Turn Up A Notch",
            src: "https://embed.music.apple.com/us/music-video/turn-up-a-notch/1770205924"
        },
    ]
},
{
    artist: "Lil Nas X",
    birthday: [{ month: "April", day: 9, year: 1999 }],
    songs: [
        {
            title: "LIGHT AGAIN!",
            src: "https://embed.music.apple.com/us/music-video/light-again/1779614991"
        },
    ]
},
{
    artist: "Lil Scrappy",
    birthday: [{ month: "January", day: 19, year: 1984 }],
    songs: [
        {
            title: "Money In the Bank",
            src: "https://embed.music.apple.com/us/music-video/money-in-the-bank/281889876"
        },
        {
            title: "No Problem",
            src: "https://embed.music.apple.com/us/music-video/no-problem/1500086322"
        },
    ]
},
{
    artist: "Lil Uzi Vert",
    birthday: [{ month: "July", day: 31, year: 1994 }],
    songs: [
        {
            title: "Just Wanna Rock",
            src: "https://embed.music.apple.com/us/music-video/just-wanna-rock/1655440239"
        },
    ]
},
{
    artist: "Lil Wayne",
    birthday: [{ month: "September", day: 27, year: 1982 }],
    songs: [
        {
            title: "Da Da Da (Closed Captioned)",
            src: "https://embed.music.apple.com/us/music-video/da-da-da-closed-captioned/1446018348"
        },
        {
            title: "Go DJ",
            src: "https://embed.music.apple.com/us/music-video/go-dj/1445829105"
        },
        {
            title: "Hustler Musik",
            src: "https://embed.music.apple.com/us/music-video/hustler-musik/1446006397"
        },
        {
            title: "Kant Nobody (feat. DMX)",
            src: "https://embed.music.apple.com/us/music-video/kant-nobody-feat-dmx/1674018660"
        },
        {
            title: "A Milli",
            src: "https://embed.music.apple.com/us/music-video/a-milli/1609336372"
        },
        {
            title: "On Fire",
            src: "https://embed.music.apple.com/us/music-video/on-fire/1445855291"
        },
        {
            title: "Prom Queen (Closed Captioned)",
            src: "https://embed.music.apple.com/us/music-video/prom-queen-closed-captioned/1446018153"
        },
        {
            title: "Tha Block Is Hot",
            src: "https://embed.music.apple.com/us/music-video/tha-block-is-hot/1488505585"
        },
        {
            title: "Way Of Life (feat. Big Tymers & T.Q.)",
            src: "https://embed.music.apple.com/us/music-video/way-of-life-feat-big-tymers-t-q/1634676419"
        },
    ]
},
{
    artist: "Lil Wayne & Eminem",
    birthday: [{ month: "September", day: 27, year: 1982 }, { month: "October", day: 17, year: 1972 }],
    songs: [
 {
            title: "Drop the World",
            src: "https://embed.music.apple.com/us/music-video/drop-the-world/1445838088"
        },
        {
            title: "No Love (feat. Lil Wayne)",
            src: "https://embed.music.apple.com/us/music-video/no-love-feat-lil-wayne/1446733609"
        },
    ]
},
{
    artist: "Lil Wayne & Static",
    songs: [
        {
            title: "Lollipop (Edited Long Version)",
            src: "https://embed.music.apple.com/us/music-video/lollipop-edited-long-version/1445830585"
        },
    ]
},
{
    artist: "Lil Yachty & DaBaby",
    birthday: [{ month: "August", day: 23, year: 1997 }, { month: "December", day: 22, year: 1991 }],
    songs: [
        {
            title: "Oprah's Bank Account (feat. Drake)",
            src: "https://embed.music.apple.com/us/music-video/oprahs-bank-account-feat-drake/1501942916"
        },
    ]
},
{
    artist: "Lil Flip",
    birthday: [{ month: "March", day: 3, year: 1981 }],
    songs: [
        {
            title: "Sunshine",
            src: "https://embed.music.apple.com/us/music-video/sunshine/1366598253"
        },
    ]
},
{
    artist: "Lil' Kim",
    birthday: [{ month: "July", day: 11, year: 1974 }],
    songs: [
        {
            title: "Crush On You",
            src: "https://embed.music.apple.com/us/music-video/crush-on-you/539744158"
        },
        {
            title: "How Many Licks? (feat. Sisqo)",
            src: "https://embed.music.apple.com/us/music-video/how-many-licks-feat-sisqo/281883358"
        },
        {
            title: "The Jump Off (feat. Mr. Cheeks)",
            src: "https://embed.music.apple.com/us/music-video/the-jump-off-feat-mr-cheeks/269753977"
        },
    ]
},
{
    artist: "Lil' Mo",
    birthday: [{ month: "November", day: 19, year: 1978 }],
    songs: [
        {
            title: "4Ever (feat. Fabolous)",
            src: "https://embed.music.apple.com/us/music-video/4ever-feat-fabolous/1671690598"
        },
    ]
},
{
    artist: "Link",
    songs: [
        {
            title: "Garage (feat. Mike Jones)",
            src: "https://embed.music.apple.com/us/music-video/garage-feat-mike-jones/1634990450"
        },
    ]
},

{
    artist: "LISA",
    birthday: [{ month: "March", day: 27, year: 1997 }],
    songs: [
        {
            title: "Rockstar",
            src: "https://embed.music.apple.com/us/music-video/rockstar/1754402545"
        },
    ]
},
{
    artist: "LL COOL J",
    birthday: [{ month: "January", day: 14, year: 1968 }],
    songs: [
        {
            title: "Doin' It",
            src: "https://embed.music.apple.com/us/music-video/doin-it/1632117195"
        },
        {
            title: "Going Back to Cali",
            src: "https://embed.music.apple.com/us/music-video/going-back-to-cali/1445843989"
        },
        {
            title: "I Need Love",
            src: "https://embed.music.apple.com/us/music-video/i-need-love/1445740990"
        },
        {
            title: "Paradise",
            src: "https://embed.music.apple.com/us/music-video/paradise/1445837130"
        },
    ]
},
{
    artist: "Lloyd",
    birthday: [{ month: "January", day: 3, year: 1986 }],
    songs: [
        {
            title: "Cupid (feat. Awesome Jones!!!!)",
            src: "https://embed.music.apple.com/us/music-video/cupid-feat-awesome-jones/1445831585"
        },
    ]
},
{
    artist: "Lloyd & 50 Cent",
    birthday: [{ month: "January", day: 3, year: 1986 }, { month: "July", day: 6, year: 1975 }],
    songs: [
 {
            title: "Let's Get It In (feat. 50 Cent)",
            src: "https://embed.music.apple.com/us/music-video/lets-get-it-in-feat-50-cent/1446733620"
        },
    ]
},
{
    artist: "Lloyd Banks",
    birthday: [{ month: "April", day: 30, year: 1982 }],
    songs: [
        {
            title: "Beamer, Benz, or Bentle (feat. Juelz Santana)",
            src: "https://embed.music.apple.com/us/music-video/beamer-benz-or-bentley-feat-juelz-santana/370333019"
        },
        {
            title: "I'm So Fly",
            src: "https://embed.music.apple.com/us/music-video/im-so-fly/1445893676"
        },
        {
            title: "Karma",
            src: "https://embed.music.apple.com/us/music-video/karma/1445875955"
        },
    ]
},
{
    artist: "Lloyd featuring Lil Wayne",
    songs: [
        {
            title: "You (Edited Version)",
            src: "https://embed.music.apple.com/us/music-video/you-edited-version/1445850480"
        },
    ]
},
{
    artist: "Lobby Boyz, Jim Jones & Maino",
    songs: [
        {
            title: "Lobby Boyz Anthem",
            src: "https://embed.music.apple.com/us/music-video/lobby-boyz-anthem/1610562308"
        },
    ]
},
{
    artist: "Lobby Boyz, Jim Jones, Maino & Fabolous",
    songs: [
        {
            title: "No Bobby V",
            src: "https://embed.music.apple.com/us/music-video/no-bobby-v/1620062186"
        },
    ]
},
{
    artist: "Lobby Boyz, Jim Jones, Maino & Fivio Foreign",
    songs: [
        {
            title: "Slide",
            src: "https://embed.music.apple.com/us/music-video/slide/1626225429"
        },
    ]
},
{
    artist: "Lola Brooke",
    birthday: [{ month: "February", day: 1, year: 1994 }],
    songs: [
        {
            title: "Don't Play With It (Remix) [feat. Latto & Yung Miami] [Official Video]",
            src: "https://embed.music.apple.com/us/music-video/dont-play-with-it-remix-feat-latto-yung-miami-official-video/1679011761"
        },
        {
            title: "You (feat. Bryson Tiller)",
            src: "https://embed.music.apple.com/us/music-video/you-feat-bryson-tiller/1708483378"
        },
    ]
},
{
    artist: "Loren Gray",
    birthday: [{ month: "April", day: 19, year: 2002 }],
    songs: [
        {
            title: "Can't Do It (feat. Saweetie)",
            src: "https://embed.music.apple.com/us/music-video/cant-do-it-feat-saweetie/1465968044"
        },
    ]
},
{
    artist: "Ludacris",
    birthday: [{ month: "September", day: 11, year: 1977 }],
    songs: [
        {
            title: "How Low (Bonus Video)",
            src: "https://embed.music.apple.com/us/music-video/how-low-bonus-video/1440762947"
        },
        {
            title: "My Chick Bad (feat. Nicki Minaj) [Bonus Video]",
            src: "https://embed.music.apple.com/us/music-video/my-chick-bad-feat-nicki-minaj-bonus-video/1440763125"
        },
    ]
},
{
    artist: "Ludacris, Diamond, Trina & Eve",
    birthday: [{ month: "September", day: 11, year: 1977 }, { month: "May", day: 20, year: 1988 }, { month: "December", day: 3, year: 1978 }, { month: "November", day: 10, year: 1978 }],
    songs: [
        {
            title: "My Chick Bad Remix",
            src: "https://embed.music.apple.com/us/music-video/my-chick-bad-remix/1446732962"
        },
    ]
},
{
    artist: "Luis Fonsi & Demi Lovato",
    birthday: [{ month: "April", day: 15, year: 1978 }, { month: "August", day: 20, year: 1992 }],
    songs: [
        {
            title: "Échame La Culpa",
            src: "https://embed.music.apple.com/us/music-video/%C3%A9chame-la-culpa/1365064114"
        },
    ]
},
{
    artist: "Mabel",
    birthday: [{ month: "February", day: 19, year: 1996 }],
    songs: [
        {
            title: "Mad Love",
            src: "https://embed.music.apple.com/us/music-video/mad-love/1466875950"
        },
    ]
},
{
    artist: "Machine Gun Kelly",
    birthday: [{ month: "April", day: 22, year: 1990 }],
    songs: [
        {
            title: "9 lives",
            src: "https://embed.music.apple.com/us/music-video/9-lives/1649694625"
        },
    ]
},
{
    artist: "Maddie & Tae",
    birthday: [{ month: "July", day: 7, year: 1995 }, { month: "September", day: 18, year: 1995 }],
    songs: [
        {
            title: "Friends Don't",
            src: "https://embed.music.apple.com/us/music-video/friends-dont/1419764769"
        },
        {
            title: "Shut Up and Fish",
            src: "https://embed.music.apple.com/us/music-video/shut-up-and-fish/1467938898"
        },
        {
            title: "Trying On Rings",
            src: "https://embed.music.apple.com/us/music-video/trying-on-rings/1511832751"
        },
        {
            title: "We Need Christmas",
            src: "https://embed.music.apple.com/us/music-video/we-need-christmas/1541756545"
        },
        {
            title: "Woman You Got",
            src: "https://embed.music.apple.com/us/music-video/woman-you-got/1573995628"
        },
    ]
},
{
    artist: "Madonna",
    birthday: [{ month: "August", day: 16, year: 1958 }],
    songs: [
        {
            title: "Bitch I'm Madonna (feat. Nicki Minaj)",
            src: "https://embed.music.apple.com/us/music-video/bitch-im-madonna-feat-nicki-minaj/1444851074"
        },
        {
            title: "Material Girl",
            src: "https://embed.music.apple.com/us/music-video/material-girl/453875194"
        },
    ]
},
{
    artist: "Malaynah", 
    birthday: [{ month: "July", day: 4, year: 2000 }],
    songs: [
        {
            title: "I Want It All",
            src: "https://embed.music.apple.com/us/music-video/i-want-it-all/1703210214"
        },
        {
            title: "Material Things",
            src: "https://embed.music.apple.com/us/music-video/material-things/1687768339"
        },
        {
            title: "Outta My Face",
            src: "https://embed.music.apple.com/us/music-video/outta-my-face/1476884270"
        },
        {
            title: "Wait a Minute",
            src: "https://embed.music.apple.com/us/music-video/wait-a-minute/1486263252"
        },
    ]
},
{
    artist: "María Isabel",
    birthday: [{ month: "May", day: 24, year: 1996 }],  
    songs: [
        {
            title: "I Drove U Crazy",
            src: "https://embed.music.apple.com/us/music-video/i-drove-u-crazy/1707387964"
        },
    ]
},
{
    artist: "Mariah Carey",
    birthday: [{ month: "March", day: 27, year: 1969 }],
    songs: [
        {
            title: "All I Want for Christmas Is You",
            src: "https://embed.music.apple.com/us/music-video/all-i-want-for-christmas-is-you/281280560"
        },
        {
            title: "#Beautiful (feat. Miguel)",
            src: "https://embed.music.apple.com/us/music-video/beautiful-feat-miguel/1445137628"
        },
        {
            title: "Honey (feat. Mase & The Lox) [Bad Boy Remix]",
            src: "https://embed.music.apple.com/us/music-video/honey-feat-mase-the-lox-bad-boy-remix/974879500"
        },
        {
            title: "I Don't (feat. YG)",
            src: "https://embed.music.apple.com/us/music-video/i-dont-feat-yg/1201999820"
        },
        {
            title: "Obsessed (Remix) [feat. Gucci Mane] [Video]",
            src: "https://embed.music.apple.com/us/music-video/obsessed-remix-feat-gucci-mane-video/1440493768"
        },
        {
            title: "Oh Santa! (feat. Ariana Grande & Jennifer Hudson)",
            src: "https://embed.music.apple.com/us/music-video/oh-santa-feat-ariana-grande-jennifer-hudson/1543077660"
        },
        {
            title: "Underneath the Stars",
            src: "https://embed.music.apple.com/us/music-video/underneath-the-stars/1535817226"
        },
        {
            title: "We Belong Together",
            src: "https://embed.music.apple.com/us/music-video/we-belong-together/1445828101"
        },
        {
            title: "With You",
            src: "https://embed.music.apple.com/us/music-video/with-you/1438614543"
        },
    ]
},
{
    artist: "Mariah Carey & JAY-Z",
    birthday: [{ month: "March", day: 27, year: 1969 }, { month: "December", day: 4, year: 1969 }],
    songs: [
        {
            title: "Heartbreaker",
            src: "https://embed.music.apple.com/us/music-video/heartbreaker/965416404"
        },
    ]
},
{
    artist: "Mario",
    birthday: [{ month: "August", day: 27, year: 1986 }],
    songs: [
        {
            title: "Just a Friend 2002 (Edited Version)",
            src: "https://embed.music.apple.com/us/music-video/just-a-friend-2002-edited-version/306098852"
        },
            {
            title: "Let Me Love You",
            src: "https://embed.music.apple.com/us/music-video/let-me-love-you/931083008"
        },
        {
            title: "Space",
            src: "https://embed.music.apple.com/us/music-video/space/1770920430"
        },
    ]
},
{
    artist: "Marshmello & Selena Gomez",
    birthday: [{ month: "May", day: 19, year: 1992 }, { month: "July", day: 22, year: 1992 }],
    songs: [
        {
            title: "Wolves",
            src: "https://embed.music.apple.com/us/music-video/wolves/1444617425"
        },
    ]
},
{
    artist: "Marvin Gaye",
    birthday: [{ month: "April", day: 2, year: 1939 }],
    songs: [
        {
            title: "Sexual Healing",
            src: "https://embed.music.apple.com/us/music-video/sexual-healing/1366597875"
        },
    ]
},
{
    artist: "Mary J. Blige",
    birthday: [{ month: "January", day: 11, year: 1971 }],
    songs: [
        {
            title: "Breathing (feat. Fabolous)",
            src: "https://embed.music.apple.com/us/music-video/breathing-feat-fabolous/1763066901"
        },
        {
            title: "Mr. Wrong (feat. Drake)",
            src: "https://embed.music.apple.com/us/music-video/mr-wrong-feat-drake/1445890315"
        },
    ]
},
{
    artist: "Mase",
    birthday: [{ month: "August", day: 27, year: 1975 }],
    songs: [    
        {
            title: "Feel So Good",
            src: "https://embed.music.apple.com/us/music-video/feel-so-good/587060925"
        },
    {
            title: "Lookin' At Me",
            src: "https://embed.music.apple.com/us/music-video/lookin-at-me/595192080"
        },
    ]
},
{
    artist: "Masicka",
    birthday: [{ month: "December", day: 4, year: 1993 }],
    songs: [ 
        {
            title: "Like Gold",
            src: "https://embed.music.apple.com/us/music-video/like-gold/1652216377"
        },
        {
            title: "Update",
            src: "https://embed.music.apple.com/us/music-video/update/1606871046"
        },
    ]
},
{
    artist: "MC Hammer",
    birthday: [{ month: "March", day: 30, year: 1962 }],
    songs: [ 
        {
            title: "U Can't Touch This",
            src: "https://embed.music.apple.com/us/music-video/u-cant-touch-this/719774266"
        },
    ]
},
{
    artist: "Meek Mill",
    birthday: [{ month: "May", day: 6, year: 1987 }],
    songs: [ 
        {
            title: "All Eyes On You (feat. Nicki Minaj & Chris Brown)",
            src: "https://embed.music.apple.com/us/music-video/all-eyes-on-you-feat-nicki-minaj-chris-brown/1024337737"
        },
        {
            title: "House Party (feat. Young Chris)",
            src: "https://embed.music.apple.com/us/music-video/house-party-feat-young-chris/488867973"
        },
        {
            title: "Ima Boss (feat. Rick Ross)",
            src: "https://embed.music.apple.com/us/music-video/ima-boss-feat-rick-ross/463011767"
        },
        {
            title: "Tupac Back (feat. Rick Ross)",
            src: "https://embed.music.apple.com/us/music-video/tupac-back-feat-rick-ross/455833114"
        },
        {
            title: "CYBER TRUCK",
            src: "https://embed.music.apple.com/us/music-video/cyber-truck/1771084661"
        },
    ]
},
{
    artist: "Megan Thee Stallion",
    birthday: [{ month: "February", day: 15, year: 1995 }],
    songs: [ 
        {
            title: "B.I.T.C.H.",
            src: "https://embed.music.apple.com/us/music-video/b-i-t-c-h/1501816676"
        },
        {
            title: "Body",
            src: "https://embed.music.apple.com/us/music-video/body/1541348281"
        },
        {
            title: "Cobra",
            src: "https://embed.music.apple.com/us/music-video/cobra/1714937976"
        },
        {
            title: "HISS",
            src: "https://embed.music.apple.com/us/music-video/hiss/1727900951"
        },
        {
            title: "Mamushi (feat. Yuki Chiba)",
             src: "https://embed.music.apple.com/us/music-video/mamushi-feat-yuki-chiba/1762105572"
        },
        {
            title: "Plan B",
            src: "https://embed.music.apple.com/us/music-video/plan-b/1627537029"
        },
        {
            title: "Neva Play (feat. RM of BTS)",
            src: "https://embed.music.apple.com/us/music-video/neva-play-feat-rm-of-bts/1766983212"
        },
        {
            title: "Bigger In Texas",
            src: "https://embed.music.apple.com/us/music-video/bigger-in-texas/1777359903"
        },
    ]
},
{
    artist: "Megan Thee Stallion & Dua Lipa",
    birthday: [{ month: "February", day: 15, year: 1995 },{ month: "August", day: 22, year: 1995 }],
    songs: [ 
        {
            title: "Sweetest Pie",
            src: "https://embed.music.apple.com/us/music-video/sweetest-pie/1613799121"
        },
    ]
},
{
    artist: "Megan Trainor",
    birthday: [{ month: "December", day: 22, year: 1993 }],
    songs: [ 
        {
            title: "Better (feat. Yo Gotti)",
            src: "https://embed.music.apple.com/us/music-video/better-feat-yo-gotti/1154668316"
        },
        {
            title: "Dear Future Husband",
            src: "https://embed.music.apple.com/us/music-video/dear-future-husband/976748983"
        },
        {
            title: "I'm a Lady (From SMURFS: THE LOST VILLAGE)",
            src: "https://embed.music.apple.com/us/music-video/im-a-lady-from-smurfs-the-lost-village/1212780309"
        },
        {
            title: "LET YOU BE RIGHT",
            src: "https://embed.music.apple.com/us/music-video/let-you-be-right/1392806610"
        },
        {
            title: "Made You Look (Again)",
            src: "https://embed.music.apple.com/us/music-video/made-you-look-again/1654246024"
        },
        {
            title: "Marry Me (Wedding Video)",
            src: "https://embed.music.apple.com/us/music-video/marry-me-wedding-video/1655928453"
        },
        {
            title: "Me Too",
            src: "https://embed.music.apple.com/us/music-video/me-too/1112058340"
        },
        {
            title: "Mother (Official Music Video)",
            src: "https://embed.music.apple.com/us/music-video/mother/1676368571"
        },
        {
            title: "My Kind Of Present",
            src: "https://embed.music.apple.com/us/music-video/my-kind-of-present/1597161737"
        },
        {
            title: "Nice to Meet Ya (feat. Nicki Minaj)",
            src: "https://embed.music.apple.com/us/music-video/nice-to-meet-ya-feat-nicki-minaj/1497199100"
        },
        {
            title: "NO",
            src: "https://embed.music.apple.com/us/music-video/no/1095196440"
        },
        {
            title: "No Excuses",
            src: "https://embed.music.apple.com/us/music-video/no-excuses/1354031634"
        },
        {
            title: "To The Moon",
            src: "https://embed.music.apple.com/us/music-video/to-the-moon/1745015804"
        },
    ]
},
{
    artist: "Megan Trainor & T-Pain",
    birthday: [{ month: "December", day: 22, year: 1993 },{ month: "September", day: 30, year: 1984 }],
    songs: [ 
        {
            title: "Been Like This",
            src: "https://embed.music.apple.com/us/music-video/been-like-this/1738125570"
        },
    ]
},
{
    artist: "Melanie Fiona",
    birthday: [{ month: "July", day: 4, year: 1983 }],
    songs: [ 
        {
            title: "Bang Bang",
            src: "https://embed.music.apple.com/us/music-video/bang-bang/1445687921"
        },
        {
            title: "Give It to Me Right",
            src: "https://embed.music.apple.com/us/music-video/give-it-to-me-right/1446736883"
        },
        {
            title: "This Time (feat. J. Cole)",
            src: "https://embed.music.apple.com/us/music-video/this-time-feat-j-cole/1446736678"
        },
        {
            title: "4AM",
            src: "https://embed.music.apple.com/us/music-video/4am/1446023534"
        },
    ]
},
{
    artist: "mgk",
    birthday: [{ month: "April", day: 22, year: 1990 }],
    songs: [ 
        {
            title: "BMXXing",
            src: "https://embed.music.apple.com/us/music-video/bmxxing/1750550490"
        },
        {
            title: "El Pistolero",
            src: "https://embed.music.apple.com/us/music-video/el-pistolero/1774084868"
        },
    ]
},
{
    artist: "Michael Bolton",
    birthday: [{ month: "February", day: 26, year: 1953 }],
    songs: [ 
        {
            title: "How Can We Be Lovers",
            src: "https://embed.music.apple.com/us/music-video/how-can-we-be-lovers/443479089"
        },
        {
            title: "That's What Love Is All About",
            src: "https://embed.music.apple.com/us/music-video/thats-what-love-is-all-about/444097341"
        },
        {
            title: "When a Man Loves a Woman",
            src: "https://embed.music.apple.com/us/music-video/when-a-man-loves-a-woman/1538374896"
        },
    ]
},
{
    artist: "Michael Jackson",
    birthday: [{ month: "August", day: 29, year: 1958 }],
    songs: [ 
        {
            title: "Behind the Mask",
            src: "https://embed.music.apple.com/us/music-video/behind-the-mask/1422324286"
        },
        {
            title: "Hollywood Tonight",
            src: "https://embed.music.apple.com/us/music-video/hollywood-tonight/425270835"
        },
        {
            title: "Thriller",
            src: "https://embed.music.apple.com/us/music-video/thriller/287857650"
        },
    ]
},
{
    artist: "Mike Jones",
    birthday: [{ month: "November", day: 18, year: 1981 }],
    songs: [ 
        {
            title: "Back Then",
            src: "https://embed.music.apple.com/us/music-video/back-then/281897447"
        },
        {
            title: "Mr. Jones",
            src: "https://embed.music.apple.com/us/music-video/mr-jones/281904606"
        },
        {
            title: "Still Tippin' (feat. Paul Wall and Slim Thug) [MTV Version]",
            src: "https://embed.music.apple.com/us/music-video/still-tippin-feat-paul-wall-and-slim-thug-mtv-version/1512483926"
        },
    ]
},
{
    artist: "Mike WiLL Made-It",
    birthday: [{ month: "March", day: 23, year: 1989 }],
    songs: [ 
        {
            title: "23 (feat. Miley Cyrus, Wiz Khalifa & Juicy J)",
            src: "https://embed.music.apple.com/us/music-video/23-feat-miley-cyrus-wiz-khalifa-juicy-j/1445278762"
        },
    ]
},
{
    artist: "Miley Cyrus",
    birthday: [{ month: "November", day: 23, year: 1992 }],
    songs: [ 
        {
            title: "Flowers (Official Video)",
            src: "https://embed.music.apple.com/us/music-video/flowers/1663984595"
        },
        {
            title: "Jaded (Official Video)",
            src: "https://embed.music.apple.com/us/music-video/jaded/1688075629"
        },
        {
            title: "Malibu",
            src: "https://embed.music.apple.com/us/music-video/malibu/1235303758"
        },
        {
            title: "Midnight Sky",
            src: "https://embed.music.apple.com/us/music-video/midnight-sky/1527464768"
        },
        {
            title: "Mother's Daughter",
            src: "https://embed.music.apple.com/us/music-video/mothers-daughter/1471030305"
        },
        {
            title: "Party In the U.S.A.",
            src: "https://embed.music.apple.com/us/music-video/party-in-the-u-s-a/1445730244"
        },
        {
            title: "River",
            src: "https://embed.music.apple.com/us/music-video/river/1676366568"
        },
        {
            title: "Slide Away",
            src: "https://embed.music.apple.com/us/music-video/slide-away/1479248592"
        },
        {
            title: "Used To Be Young",
            src: "https://embed.music.apple.com/us/music-video/used-to-be-young/1703887187"
        },
        {
            title: "We Can't Stop (Director's Cut)",
            src: "https://embed.music.apple.com/us/music-video/we-cant-stop-directors-cut/1281876379"
        },
        {
            title: "Younger Now",
            src: "https://embed.music.apple.com/us/music-video/younger-now/1272955901"
        },
    ]
},
{
    artist: "Miranda Lambert",
    birthday: [{ month: "November", day: 10, year: 1983 }],
    songs: [ 
        {
            title: "Bluebird",
            src: "https://embed.music.apple.com/us/music-video/bluebird/1503052856"
        },
 {
                title: "If I Was a Cowboy",
                src: "https://embed.music.apple.com/us/music-video/if-i-was-a-cowboy/1603353418"
            },
            {
                title: "Settling Down",
                src: "https://embed.music.apple.com/us/music-video/settling-down/1536468700"
            },
            {
                title: "Tequila Does (Telemitry Remix)",
                src: "https://embed.music.apple.com/us/music-video/tequila-does-telemitry-remix/1578961748"
            },
        ]
    },
    {
        artist: "Missy Elliott",
        birthday: [{ month: "July", day: 1, year: 1971 }],
        songs: [ 
            {
                title: "Hot Boyz",
                src: "https://embed.music.apple.com/us/music-video/hot-boyz/281887767"
            },
        ]
    },
    {
        artist: "Moneybagg Yo",
        birthday: [{ month: "September", day: 22, year: 1991 }],
        songs: [ 
            {
                title: "Protect da Brand (feat. DaBaby)",
                src: "https://embed.music.apple.com/us/music-video/protect-da-brand-feat-dababy/1523651847"
            },
            {
                title: "RICH VIKING",
                src: "https://embed.music.apple.com/us/music-video/rich-viking/1752589317"
            },
        ]
    },
    {
        artist: "Moneybagg Yo & Megan Thee Stallion",
        birthday: [{ month: "September", day: 22, year: 1991 },{ month: "February", day: 15, year: 1995 }],
        songs: [ 
            {
                title: "All Dat",
                src: "https://embed.music.apple.com/us/music-video/all-dat/1523651834"
            },
        ]
    },
    {
        artist: "Muni Long",
        birthday: [{ month: "September", day: 14, year: 1988 }],
        songs: [ 
            {
                title: "Made For Me",
                src: "https://embed.music.apple.com/us/music-video/made-for-me/1725542045"
            },
        ]
    },
    {
        artist: "Mustard",
        birthday: [{ month: "June", day: 5, year: 1990 }],
        songs: [ 
            {
                title: "100 Bands (feat. Quavo, YG & Meek Mill)",
                src: "https://embed.music.apple.com/us/music-video/100-bands-feat-quavo-yg-meek-mill/1472334060"
            },
        ]
    },
    {
        artist: "Mýa",
        birthday: [{ month: "October", day: 10, year: 1979 }],
        songs: [ 
            {
                title: "Case of the Ex (Whatcha Gonna Do)",
                src: "https://embed.music.apple.com/us/music-video/case-of-the-ex-whatcha-gonna-do/1469555547"
            },
            {
                title: "Free",
                src: "https://embed.music.apple.com/us/music-video/free/1445840327"
            },
        ]
    },
    {
        artist: "Myles Brando",
        songs: [ 
            {
                title: "She Ready",
                src: "https://embed.music.apple.com/us/music-video/she-ready/1695003885"
            },
        ]
    },
    {
        artist: "Mystikal",
        birthday: [{ month: "September", day: 22, year: 1970 }],
        songs: [ 
            {
                title: "Danger (Been So Long) [feat. Nivea]",
                src: "https://embed.music.apple.com/us/music-video/danger-been-so-long-feat-nivea/313929298"
            },
            {
                title: "Shake Ya Ass",
                src: "https://embed.music.apple.com/us/music-video/shake-ya-ass/1333260357"
            },
        ]
    },
    {
        artist: "N.W.A",
        songs: [ 
            {
                title: "Express Yourself [Freedom Version]",
                src: "https://embed.music.apple.com/us/music-video/express-yourself-freedom-version/719774626"
            },
        ]
    },
    {
        artist: "Nas",
        birthday: [{ month: "September", day: 14, year: 1973 }],
        songs: [ 
            {
                title: "Cherry Wine (feat. Amy Winehouse)",
                src: "https://embed.music.apple.com/us/music-video/cherry-wine-feat-amy-winehouse/1445876961"
            },
            {
                title: "Make the World Go Round (feat. Chris Brown & The Game)",
                src: "https://embed.music.apple.com/us/music-video/make-the-world-go-round-feat-chris-brown-the-game/1445746536"
            },
            {
                title: "Nas Is Like",
                src: "https://embed.music.apple.com/us/music-video/nas-is-like/306098848"
            },
        ]
    },
    {
        artist: "Natalie La Rose",
        birthday: [{ month: "July", day: 11, year: 1988 }],
        songs: [ 
            {
                title: "Somebody (feat. Jeremih)",
                src: "https://embed.music.apple.com/us/music-video/somebody-feat-jeremih/1444878800"
            },
        ]
    },
    {
        artist: "Ne-Yo",
        birthday: [{ month: "October", day: 18, year: 1979 }],
        songs: [ 
            {
                title: "Coming With You",
                src: "https://embed.music.apple.com/us/music-video/coming-with-you/1445139636"
            },
            {
                title: "Link Up",
                src: "https://embed.music.apple.com/us/music-video/link-up/1709539965"
            },
            {
                title: "Miss Independent (Bonus Video)",
                src: "https://embed.music.apple.com/us/music-video/miss-independent-bonus-video/1445834440"
            },
            {
                title: "Sexy Love",
                src: "https://embed.music.apple.com/us/music-video/sexy-love/1445857914"
            },
            {
                title: "She Got Her Own (feat. Jamie Foxx & Fabolous) [Bonus Video]",
                src: "https://embed.music.apple.com/us/music-video/she-got-her-own-feat-jamie-foxx-fabolous-bonus-video/1445834533"
            },
        ]
    },
    {
        artist: "Ne-Yo, Bebe Rexha & Stefflon Don",
        birthday: [{ month: "October", day: 18, year: 1979 },{ month: "August", day: 30, year: 1989 },{ month: "December", day: 14, year: 1991 }],
        songs: [ 
            {
                title: "Push Back",
                src: "https://embed.music.apple.com/us/music-video/push-back/1368093791"
            },
        ]
    },
    {
        artist: "Nelly",
        birthday: [{ month: "November", day: 2, year: 1974 }],
        songs: [ 
            {
                title: "The Fix (feat. Jeremih)",
                src: "https://embed.music.apple.com/us/music-video/the-fix-feat-jeremih/1051046274"
            },
            {
                title: "Hot In Herre, Pt.  2",
                src: "https://embed.music.apple.com/us/music-video/hot-in-herre-pt-2/1445849154"
            },
        ]
    },
    {
        artist: "Nelly & Kelly Rowland",
        birthday: [{ month: "November", day: 2, year: 1974 },{ month: "February", day: 11, year: 1981 }],
        songs: [ 
            {
                title: "Dilemma",
                src: "https://embed.music.apple.com/us/music-video/dilemma/1445742640"
            },
            {
                title: "Gone",
                src: "https://embed.music.apple.com/us/music-video/gone-feat-kelly-rowland/1445831307"
            },
        ]
    },
    {
        artist: "Nelly featuring Jaheim",
        birthday: [{ month: "November", day: 2, year: 1974 },{ month: "May", day: 26, year: 1978 }],
        songs: [ 
            {
                title: "My Place (Edited Version) [Edited Version]",
                src: "https://embed.music.apple.com/us/music-video/my-place-edited-version-edited-version/1445840134"
            },
        ]
    },
    {
        artist: "Nelly Furtado featuring Timbaland",
        birthday: [{ month: "December", day: 2, year: 1978 },{ month: "March", day: 10, year: 1972 }],
        songs: [ 
            {
                title: "Promiscuous (feat. Timbaland)",
                src: "https://embed.music.apple.com/us/music-video/promiscuous-feat-timbaland/1445750674"
            },
        ]
    },
    {
        artist: "New Boyz",
        birthday: [{ month: "October", day: 13, year: 1991 }, { month: "October", day: 12, year: 1991 }],   
        songs: [ 
            {
                title: "Backseat (feat. The Cataracs & Dev) [Main Version]",
                src: "https://embed.music.apple.com/us/music-video/backseat-feat-the-cataracs-dev-main-version/430525801"
            },
            {
                title: "You're a Jerk",
                src: "https://embed.music.apple.com/us/music-video/youre-a-jerk/442169663"
            },
        ]
    },
    {
        artist: "NewJeans",
        birthday: [{ month: "May", day: 7, year: 2004 },{ month: "October", day: 6, year: 2004 },{ month: "April", day: 11, year: 2005 },{ month: "May", day: 15, year: 2006 },{ month: "April", day: 21, year: 2008 }],
        songs: [ 
            {
                title: "Right Now",
                src: "https://embed.music.apple.com/us/music-video/right-now/1752511792"
            },
        ]
    },
    {
        artist: "Nicki Minaj",
        birthday: [{ month: "December", day: 8, year: 1982 }],
        songs: [ 
            {
                title: "Bed (feat. Ariana Grande)",
                src: "https://embed.music.apple.com/us/music-video/bed-feat-ariana-grande/1410449033"
            },
            {
                title: "Chun-Li",
                src: "https://embed.music.apple.com/us/music-video/chun-li/1380529809"
            },
            {
                title: "Good Form (feat. Lil Wayne)",
                src: "https://embed.music.apple.com/us/music-video/good-form-feat-lil-wayne/1445004802"
            },
            {
                title: "Hard White",
                src: "https://embed.music.apple.com/us/music-video/hard-white/1451138681"
            },
            {
                title: "MEGATRON",
                src: "https://embed.music.apple.com/us/music-video/megatron/1469306758"
            },
            {
                title: "Right By My Side (feat. Chris Brown)",
                src: "https://embed.music.apple.com/us/music-video/right-by-my-side-feat-chris-brown/1446011245"
            },
            {
                title: "Right Thru Me",
                src: "https://embed.music.apple.com/us/music-video/right-thru-me/1445891685"
            },
            {
                title: "Super Freaky Girl",
                src: "https://embed.music.apple.com/us/music-video/super-freaky-girl/1643463263"
            },
            {
                title: "We Go Up (feat. Fivio Foreign)",
                src: "https://embed.music.apple.com/us/music-video/we-go-up-feat-fivio-foreign/1621123835"
            },
            {
                title: "Your Love",
                src: "https://embed.music.apple.com/us/music-video/your-love/1446014271"
            },
        ]
    },
    {
        artist: "Nicki Minaj & Ice Spice",
        birthday: [{ month: "December", day: 8, year: 1982 },{ month: "January", day: 1, year: 2000 }],
        songs: [ 
            {
                title: "Barbie World (with Aqua) [From Barbie The Album]",
                src: "https://embed.music.apple.com/us/music-video/barbie-world-with-aqua-from-barbie-the-album/1694068784"
            },
        ]
    },
    {
        artist: "Nicki Minaj & Lil Baby",
        birthday: [{ month: "December", day: 8, year: 1982 },{ month: "December", day: 3, year: 1994 }],
        songs: [ 
            {
                title: "Do We Have A Problem? (Short Version)",
                src: "https://embed.music.apple.com/us/music-video/do-we-have-a-problem-short-version/1609100371"
            },
        ]
    },
    {
        artist: "Nicki Minaj, Drake & Lil Wayne",
        birthday: [{ month: "December", day: 8, year: 1982 },{ month: "October", day: 24, year: 1986 },{ month: "September", day: 27, year: 1982 }],
        songs: [ 
            {
                title: "No Frauds",
                src: "https://embed.music.apple.com/us/music-video/no-frauds/1444843884"
            },
        ]
    },
    {
        artist: "Nina Sky",
        birthday: [{ month: "March", day: 13, year: 1984 },{ month: "March", day: 13, year: 1984 }],
        songs: [ 
            {
                title: "Move Ya Body (Edited) [feat. Jabba]",
                src: "https://embed.music.apple.com/us/music-video/move-ya-body-edited-feat-jabba/1445826368"
            },
        ]
    },
    {
        artist: "Normani",
        birthday: [{ month: "May", day: 31, year: 1996 }],
        songs: [ 
            {
                title: "Motivation",
                src: "https://embed.music.apple.com/us/music-video/motivation/1476610030"
            },
        ]
    },
    {
        artist: "NOTD",
        songs: [ 
            {
                title: "I Wanna Know (feat. Bea Miller)",
                src: "https://embed.music.apple.com/us/music-video/i-wanna-know-feat-bea-miller/1384506570"
            },
        ]
    },
    {
        artist: "*NSYNC",
        birthday: [{ month: "August", day: 8, year: 1976 },{month: "January", day: 31, year: 1981 },{month: "January", day: 28, year: 1977 },{month: "October", day: 17, year: 1971 },{month: "May", day: 4, year: 1979 }],
        songs: [ 
            {
                title: "Bye Bye Bye",
                src: "https://embed.music.apple.com/us/music-video/bye-bye-bye/291812351"
            },
            {
                title: "Girlfriend",
                src: "https://embed.music.apple.com/us/music-video/girlfriend/291812605"
            },
            {
                title: "(God Must Have Spent) A Little More Time On You",
                src: "https://embed.music.apple.com/us/music-video/god-must-have-spent-a-little-more-time-on-you/1402253634"
            },
            {
                title: "It's Gonna Be Me",
                src: "https://embed.music.apple.com/us/music-video/its-gonna-be-me/326345602"
            },
        ]
    },
    {
        artist: "Offset",
        birthday: [{ month: "December", day: 14, year: 1991 }],
        songs: [ 
            {
                title: "Swing My Way",
                src: "https://embed.music.apple.com/us/music-video/swing-my-way/1785074579"
            },
        ]
    },
    {
        artist: "Offset & Cardi B",
        birthday: [{ month: "December", day: 14, year: 1991 },{ month: "October", day: 11, year: 1992 }],
        songs: [ 
            {
                title: "JEALOUSY",
                src: "https://embed.music.apple.com/us/music-video/jealousy/1699656644"
            },
        ]
    },
    {
        artist: "Offset & Travis Scott",
        birthday: [{ month: "December", day: 14, year: 1991 },{ month: "April", day: 30, year: 1991 }],
        songs: [ 
            {
                title: "SAY MY GRACE",
                src: "https://embed.music.apple.com/us/music-video/say-my-grace/1711657878"
            },
        ]
    },
    {
        artist: "Olivia Rodrigo",
        birthday: [{ month: "February", day: 20, year: 2003 }],
        songs: [ 
            {
                title: "bad idea right?",
                src: "https://embed.music.apple.com/us/music-video/bad-idea-right/1701923267"
            },
            {
                title: "get him back!",
                src: "https://embed.music.apple.com/us/music-video/get-him-back/1706962058"
            },
        ]
    },
    {
        artist: "Omarion",
        birthday: [{ month: "November", day: 12, year: 1984 }],
        songs: [ 
            {
                title: "Post To Be (feat. Chris Brown & Jhene Aiko)",
                src: "https://embed.music.apple.com/us/music-video/post-to-be-feat-chris-brown-jhene-aiko/980181247"
            },
            {
                title: "Touch",
                src: "https://embed.music.apple.com/us/music-video/touch/306816825"
            },
        ]
    },
    {
        artist: "One Direction",
        birthday: [{ month: "September", day: 13, year: 1993 },{ month: "January", day: 12, year: 1993 },{ month: "August", day: 29, year: 1993 },{ month: "February", day: 1, year: 1994 },{ month: "December", day: 24, year: 1991 }],
            
           
           
            
        songs: [ 
            {
                title: "What Makes You Beautiful",
                src: "https://embed.music.apple.com/us/music-video/what-makes-you-beautiful/459227180"
            },
        ]
    },
    {
        artist: "Owl City & Carly Rae Jepsen",
        birthday: [{ month: "July", day: 5, year: 1986 },{ month: "November", day: 21, year: 1985 }], 
        songs: [ 
            {
                title: "Good Time",
                src: "https://embed.music.apple.com/us/music-video/good-time/1445873633"
            },
        ]
    },
    {
        artist: "P!nk",
        birthday: [{ month: "September", day: 8, year: 1979 }],
        songs: [ 
            {
                title: "So What",
                src: "https://embed.music.apple.com/us/music-video/so-what/293525412"
            },
            {
                title: "TRUSTFALL",
                src: "https://embed.music.apple.com/us/music-video/trustfall/1667393901"
            },
            {
                title: "Try",
                src: "https://embed.music.apple.com/us/music-video/try/569211807"
            },
        ]
    },
    {
        artist: "P. Reign",
        birthday: [{ month: "January", day: 8, year: 1986 }],
        songs: [ 
            {
                title: "DnF (feat. Drake & Future)",
                src: "https://embed.music.apple.com/us/music-video/dnf-feat-drake-future/937437977"
            },
        ]
    },
    {
        artist: "Papoose",
        birthday: [{ month: "March", day: 5, year: 1978 }],
        songs: [ 
            {
                title: "Top of My Game (feat. Mavado) [Explicit]",
                src: "https://embed.music.apple.com/us/music-video/top-of-my-game-feat-mavado-explicit/593131820"
            },
        ]
    },
    {
        artist: "Paris Hilton",
        birthday: [{ month: "February", day: 17, year: 1981 }],
        songs: [ 
            {
                title: "BBA (feat. Megan Thee Stallion)",
                src: "https://embed.music.apple.com/us/music-video/bba-feat-megan-thee-stallion/1767051311"
            },
            {
                title: "Stars Are Blind",
                src: "https://embed.music.apple.com/us/music-video/stars-are-blind/281887915"
            },
            {
                title: "ADHD",
                src: "https://embed.music.apple.com/us/music-video/adhd/1773873828"
            },
        ]
    },
    {
        artist: "Perrie",
        birthday: [{ month: "July", day: 10, year: 1993 }],
        songs: [ 
            {
                title: "Forget About Us",
                src: "https://embed.music.apple.com/us/music-video/forget-about-us/1741391137"
            },
        ]
    },
    {
        artist: "Pharrell Williams",
        birthday: [{ month: "April", day: 5, year: 1973 }],
        songs: [ 
            {
                title: "Frontin' (feat. JAY Z)",
                src: "https://embed.music.apple.com/us/music-video/frontin-feat-jay-z/1356861166"
            },
            {
                title: "Marilyn Monroe",
                src: "https://embed.music.apple.com/us/music-video/marilyn-monroe/866114726"
            },
        ]
    },
    {
        artist: "Pharrell Williams & Miley Cyrus",
        birthday: [{ month: "April", day: 5, year: 1973 },{ month: "November", day: 23, year: 1992 }],
        songs: [ 
            {
                title: "Doctor (Work It Out)",
                src: "https://embed.music.apple.com/us/music-video/doctor-work-it-out/1733760746"
            },
        ]
    },
    {
        artist: "Pia Mia",
        birthday: [{ month: "September", day: 19, year: 1996 }],
        songs: [ 
            {
                title: "Do It Again (feat. Chris Brown & Tyga)",
                src: "https://embed.music.apple.com/us/music-video/do-it-again-feat-chris-brown-tyga/1445018943"
            },
            {
                title: "F**k With U (feat. G-Eazy)",
                src: "https://embed.music.apple.com/us/music-video/f-k-with-u-feat-g-eazy/1445295275"
            },
            {
                title: "Mr. President",
                src: "https://embed.music.apple.com/us/music-video/mr-president/1445000256"
            },
            {
                title: "Touch",
                src: "https://embed.music.apple.com/us/music-video/touch/1445060278"
            },
        ]
    },
    {
        artist: "PinkPantheress",
        birthday: [{ month: "April", day: 18, year: 2001 }],
        songs: [ 
          
                {
                    title: 'Capable of Love',
                    src: 'https://embed.music.apple.com/us/music-video/capable-of-love/1712105501'
                },
            ]
        },
        {
            artist: "Pitbull",
            birthday: [{ month: "January", day: 15, year: 1981 }],
            songs: [ 
                {
                    title: 'Feel This Moment (feat. Christina Aguilera)',
                    src: 'https://embed.music.apple.com/us/music-video/feel-this-moment-feat-christina-aguilera/621683181'
                },
                {
                    title: 'Fun (feat. Chris Brown)',
                    src: 'https://embed.music.apple.com/us/music-video/fun-feat-chris-brown/1009464167'
                },
                {
                    title: 'Give Me Everything (feat. Ne-Yo, Afrojack & Nayer)',
                    src: 'https://embed.music.apple.com/us/music-video/give-me-everything-feat-ne-yo-afrojack-nayer/436457877'
                },
                {
                    title: 'Greenlight (feat. Flo Rida & LunchMoney Lewis)',
                    src: 'https://embed.music.apple.com/us/music-video/greenlight-feat-flo-rida-lunchmoney-lewis/1145691719'
                },
                {
                    title: 'International Love (feat. Chris Brown)',
                    src: 'https://embed.music.apple.com/us/music-video/international-love-feat-chris-brown/488330863'
                },
                {
                    title: 'Timber (feat. Ke$ha)',
                    src: 'https://embed.music.apple.com/us/music-video/timber-feat-ke%24ha/763993631'
                },
                {
                    title: 'Wild Wild Love (feat. G.R.L.)',
                    src: 'https://embed.music.apple.com/us/music-video/wild-wild-love-feat-g-r-l/850563364'
                },
            ]
        },
        {
            artist: "Pixie Lott",
            birthday: [{ month: "January", day: 12, year: 1991 }],
            songs: [ 
                {
                    title: "Won't Forget You (feat. Stylo G)",
                    src: 'https://embed.music.apple.com/us/music-video/wont-forget-you-feat-stylo-g/1445019826'
                },
            ]
        },
        {
            artist: "Plies",
            birthday: [{ month: "July", day: 1, year: 1976 }],
            songs: [ 
                {
                    title: 'Bust It Baby Pt. 2 (feat. Ne-Yo)',
                    src: 'https://embed.music.apple.com/us/music-video/bust-it-baby-pt-2-feat-ne-yo/281364712'
                },
                {
                    title: 'Shawty (feat. T-Pain)',
                    src: 'https://embed.music.apple.com/us/music-video/shawty-feat-t-pain/260555464'
                },
            ]
        },
        {
            artist: "Polo G",
            birthday: [{ month: "January", day: 6, year: 1999 }],
            songs: [ 
                {
                    title: 'Thorns',
                    src: "https://embed.music.apple.com/us/music-video/thorns/1781089029"
                },
            ]
        },
        {
            artist: "Popcaan & Drake",
            birthday: [{ month: "July", day: 19, year: 1988 },{ month: "October", day: 24, year: 1986 }],
            songs: [ 
                {
                    title: 'We Caa Done',
                    src: "https://embed.music.apple.com/us/music-video/we-caa-done/1780883508"
                },
            ]
        },
        {
            artist: "Post Malone",
            birthday: [{ month: "July", day: 4, year: 1995 }],
            songs: [ 
                {
                    title: 'I Had Some Help (feat. Morgan Wallen)',
                    src: 'https://embed.music.apple.com/us/music-video/i-had-some-help-feat-morgan-wallen/1745656946'
                },
            ]
        },
        {
            artist: "Prince Royce",
            birthday: [{ month: "May", day: 11, year: 1989 }],
            songs: [ 
                {
                    title: 'Back It Up (feat. Jennifer Lopez & Pitbull)',
                    src: 'https://embed.music.apple.com/us/music-video/back-it-up-feat-jennifer-lopez-pitbull/1004822583'
                },
            ]
        },
        {
            artist: "Priyanka Chopra",
            birthday: [{ month: "July", day: 18, year: 1982 }],
            songs: [ 
                {
                    title: 'Exotic (feat. Pitbull)',
                    src: 'https://embed.music.apple.com/us/music-video/exotic-feat-pitbull/1445059393'
                },
            ]
        },
        {
            artist: "Quavo",
            birthday: [{ month: "April", day: 2, year: 1991 }],
            songs: [ 
                {
                    title: 'Mink',
                    src: "https://embed.music.apple.com/us/music-video/mink/1752013863"
                },
                {
                    title: 'Wall To Wall',
                    src: 'https://embed.music.apple.com/us/music-video/wall-to-wall/1711856737'
                },
            ]
        },
        {
            artist: "R. Kelly",
            birthday: [{ month: "January", day: 8, year: 1967 }],
            songs: [ 
                {
                    title: 'Backyard Party',
                    src: 'https://embed.music.apple.com/us/music-video/backyard-party/1050771417'
                },
                {
                    title: 'Cookie',
                    src: 'https://embed.music.apple.com/us/music-video/cookie/790347186'
                },
                {
                    title: 'If I Could Turn Back the Hands of Time',
                    src: 'https://embed.music.apple.com/us/music-video/if-i-could-turn-back-the-hands-of-time/548916531'
                },
                {
                    title: 'Radio Message',
                    src: 'https://embed.music.apple.com/us/music-video/radio-message/443234026'
                },
                    {
                        title: "The World's Greatest",
                        src: "https://embed.music.apple.com/us/music-video/the-worlds-greatest/327541804"
                    },
                ]
            },
            {
                artist: "R. Kelly & Usher",
                birthday: [{ month: "January", day: 8, year: 1967 },{ month: "October", day: 14, year: 1978 }],
                songs: [ 
                    {
                        title: "Same Girl (Duet With Usher)",
                        src: "https://embed.music.apple.com/us/music-video/same-girl-duet-with-usher/262804772"
                    },
                ]
            },
            {
                artist: "R3HAB, Inna & Sash!",
                songs: [ 
                    {
                        title: "Rock My Body",
                        src: "https://embed.music.apple.com/us/music-video/rock-my-body/1687093639"
                    },
                ]
            },
            {
                artist: "Rachel Platten",
                birthday: [{ month: "May", day: 20, year: 1981 }],
                songs: [ 
                    {
                        title: "Stand By You",
                        src: "https://embed.music.apple.com/us/music-video/stand-by-you/1056038895"
                    },
                ]
            },
            {
                artist: "Rae Sremmurd",
                birthday: [{ month: "December", day: 29, year: 1991 },{ month: "June", day: 7, year: 1993 }],
                songs: [ 
                    {
                        title: "Black Beatles (feat. Gucci Mane)",
                        src: "https://embed.music.apple.com/us/music-video/black-beatles-feat-gucci-mane/1444854806"
                    },
                    {
                        title: "Not So Bad (Leans Gone Cold)",
                        src: "https://embed.music.apple.com/us/music-video/not-so-bad-leans-gone-cold/1693009696"
                    },
                    {
                        title: "Sexy",
                        src: "https://embed.music.apple.com/us/music-video/sexy/1702606266"
                    },
                ]
            },
            {
                artist: "Rae Sremmurd, Swae Lee & Slim Jxmmi",
                songs: [ 
                    {
                        title: "Powerglide (feat. Juicy J)",
                        src: "https://embed.music.apple.com/us/music-video/powerglide-feat-juicy-j/1357859662"
                    },
                ]
            },
            {
                artist: "RaeLynn",
                birthday: [{ month: "May", day: 4, year: 1994 }],
                songs: [ 
                    {
                        title: "For a Boy",
                        src: "https://embed.music.apple.com/us/music-video/for-a-boy/1445016898"
                    },
                    {
                        title: "Queens Don't",
                        src: "https://embed.music.apple.com/us/music-video/queens-dont/1368453649"
                    },
                    {
                        title: "Tailgate",
                        src: "https://embed.music.apple.com/us/music-video/tailgate/1438897179"
                    },
                ]
            },
            {
                artist: "Ray J & Lil Wayne",
                birthday: [{ month: "January", day: 17, year: 1981 },{ month: "September", day: 27, year: 1982 }],
                songs: [ 
                    {
                        title: "Brown Sugar",
                        src: "https://embed.music.apple.com/us/music-video/brown-sugar/1019043811"
                    },
                ]
            },
            {
                artist: "RDGLDGRN",
                songs: [ 
                    {
                        title: "Danger (feat. Nitty Scott & Alexandra Stan)",
                        src: "https://embed.music.apple.com/us/music-video/danger-feat-nitty-scott-alexandra-stan/1503515247"
                    },
                ]
            },
            {
                artist: "Rema & Selena Gomez",
                birthday: [{ month: "May", day: 1, year: 2000 },{ month: "July", day: 22, year: 1992 }],
                songs: [ 
                    {
                        title: "Calm Down",
                        src: "https://embed.music.apple.com/us/music-video/calm-down/1643167420"
                    },
                ]
            },
            {
                artist: "Reneé Rapp & Megan Thee Stallion",
                birthday: [{ month: "January", day: 10, year: 2000 },{ month: "February", day: 15, year: 1995 }],
                songs: [ 
                    {
                        title: "Not My Fault",
                        src: "https://embed.music.apple.com/us/music-video/not-my-fault/1724860687"
                    },
                ]
            },
            {
                artist: "Rich Boy featuring Polow Da Don",
                birthday: [{ month: "September", day: 2, year: 1983 },{ month: "October", day: 15, year: 1977 }],
                songs: [ 
                    {
                        title: "Throw Some D's",
                        src: "https://embed.music.apple.com/us/music-video/throw-some-ds/1446734036"
                    },
                ]
            },
            {
                artist: "Richie Re",
                songs: [ 
                    {
                        title: "Big Money (feat. Trina)",
                        src: "https://embed.music.apple.com/us/music-video/big-money-feat-trina/1541841952"
                    },
                ]
            },
            {
                artist: "Rick James",
                birthday: [{ month: "February", day: 1, year: 1948 }],
                songs: [ 
                    {
                        title: "Super Freak",
                        src: "https://embed.music.apple.com/us/music-video/super-freak/1445853255"
                    },
                ]
            },
            {
                artist: "Rick Ross",
                birthday: [{ month: "January", day: 28, year: 1976 }],
                songs: [ 
                    {
                        title: "Aston Martin Music (feat. Drake & Chrisette Michele)",
                        src: "https://embed.music.apple.com/us/music-video/aston-martin-music-feat-drake-chrisette-michele/1445892710"
                    },
                    {
                        title: "Diced Pineapples (feat. Wale & Drake)",
                        src: "https://embed.music.apple.com/us/music-video/diced-pineapples-feat-wale-drake/1445861819"
                    },
             {
                            title: 'Elvis Presley Blvd. (feat. Project Pat)',
                            src: 'https://embed.music.apple.com/us/music-video/elvis-presley-blvd-feat-project-pat/1445276339'
                        },
                        {
                            title: 'I Think She Like Me (feat. Ty Dolla $ign)',
                            src: 'https://embed.music.apple.com/us/music-video/i-think-she-like-me-feat-ty-dolla-%24ign/1199599810'
                        },
                        {
                            title: "I'm Not a Star",
                            src: 'https://embed.music.apple.com/us/music-video/im-not-a-star/1467943546'
                        },
                        {
                            title: 'Little Havana (feat. Willie Falcon & The-Dream)',
                            src: 'https://embed.music.apple.com/us/music-video/little-havana-feat-willie-falcon-the-dream/1606817463'
                        },
                        {
                            title: 'No Games (feat. Future)',
                            src: 'https://embed.music.apple.com/us/music-video/no-games-feat-future/1444344397'
                        },
                        {
                            title: 'Outlawz (feat. Jazmine Sullivan & 21 Savage)',
                            src: 'https://embed.music.apple.com/us/music-video/outlawz-feat-jazmine-sullivan-21-savage/1599558253'
                        },
                        {
                            title: 'So Sophisticated (feat. Meek Mill)',
                            src: 'https://embed.music.apple.com/us/music-video/so-sophisticated-feat-meek-mill/1445867001'
                        },
                        {
                            title: 'Sorry (feat. Chris Brown)',
                            src: 'https://embed.music.apple.com/us/music-video/sorry-feat-chris-brown/1444611834'
                        },
                        {
                            title: 'Ten Jesus Pieces (feat. Stalley)',
                            src: 'https://embed.music.apple.com/us/music-video/ten-jesus-pieces-feat-stalley/1444338585'
                        },
                        {
                            title: 'Wiggle (feat. DreamDoll)',
                            src: 'https://embed.music.apple.com/us/music-video/wiggle-feat-dreamdoll/1604672534'
                        },
                    ]
                },
                {
                    artist: "Rick Ross & Meek Mill",
                    birthday: [{ month: "January", day: 28, year: 1976 },{ month: "May", day: 6, year: 1987 }],
                    songs: [ 
                        {
                            title: 'Lyrical Eazy',
                            src: 'https://embed.music.apple.com/us/music-video/lyrical-eazy/1712218386'
                        },
                        {
                            title: 'SHAQ & KOBE',
                            src: 'https://embed.music.apple.com/us/music-video/shaq-kobe/1708959077'
                        },
                    ]
                },
                {
                    artist: "Rihanna",
                    birthday: [{ month: "February", day: 20, year: 1988 }],
                    songs: [ 
                        {
                            title: 'California King Bed',
                            src: 'https://embed.music.apple.com/us/music-video/california-king-bed/1445830532'
                        },
                        {
                            title: 'Diamonds',
                            src: 'https://embed.music.apple.com/us/music-video/diamonds/1446740436'
                        },
                        {
                            title: 'Disturbia',
                            src: 'https://embed.music.apple.com/us/music-video/disturbia/1445855413'
                        },
                        {
                            title: "Don't Stop the Music (Bonus Video)",
                            src: 'https://embed.music.apple.com/us/music-video/dont-stop-the-music-bonus-video/1441154586'
                        },
                        {
                            title: 'Hard (feat. Jeezy)',
                            src: 'https://embed.music.apple.com/us/music-video/hard-feat-jeezy/1445712753'
                        },
                        {
                            title: 'Needed Me',
                            src: 'https://embed.music.apple.com/us/music-video/needed-me/1445011152'
                        },
                        {
                            title: 'Only Girl (In the World) [Bonus Video]',
                            src: 'https://embed.music.apple.com/us/music-video/only-girl-in-the-world-bonus-video/1440896208'
                        },
                        {
                            title: 'Pour It Up',
                            src: 'https://embed.music.apple.com/us/music-video/pour-it-up/1444873577'
                        },
                        {
                            title: 'Russian Roulette',
                            src: 'https://embed.music.apple.com/us/music-video/russian-roulette/1446732200'
                        },
                        {
                            title: 'S&M',
                            src: 'https://embed.music.apple.com/us/music-video/s-m/1446014947'
                        },
                        {
                            title: 'Super Bowl LVII Halftime Show (Live)',
                            src: 'https://embed.music.apple.com/us/music-video/super-bowl-lvii-halftime-show-live/1671474255'
                        },
                        {
                            title: 'Take a Bow',
                            src: 'https://embed.music.apple.com/us/music-video/take-a-bow/1445827725'
                        },
                        {
                            title: 'Umbrella (feat. Jay-Z)',
                            src: 'https://embed.music.apple.com/us/music-video/umbrella-feat-jay-z/1446733748'
                        },
                      {
                                title: "Wait Your Turn",
                                src: "https://embed.music.apple.com/us/music-video/wait-your-turn/1445856699"
                            },
                            {
                                title: "Where Have You Been",
                                src: "https://embed.music.apple.com/us/music-video/where-have-you-been/1445841758"
                            },
                            {
                                title: "Work (feat. Drake)",
                                src: "https://embed.music.apple.com/us/music-video/work-feat-drake/1445011498"
                            },
                            {
                                title: "You da One (Explicit)",
                                src: "https://embed.music.apple.com/us/music-video/you-da-one-explicit/1446010725"
                            },
                        ]
                    },
                    {
                        artist: "Rihanna & Calvin Harris",
                        birthday: [{ month: "February", day: 20, year: 1988 },{ month: "January", day: 17, year: 1984 }],
                        songs: [ 
                            {
                                title: "We Found Love",
                                src: "https://embed.music.apple.com/us/music-video/we-found-love/1445858733"
                            },
                        ]
                    },
                    {
                        artist: "Rihanna & Eminem",
                        birthday: [{ month: "February", day: 20, year: 1988 },{ month: "October", day: 17, year: 1972 }],
                        songs: [ 
                            {
                                title: "Love the Way You Lie (feat. Rihanna)",
                                src: "https://embed.music.apple.com/us/music-video/love-the-way-you-lie-feat-rihanna/1445846793"
                            },
                        ]
                    },
                    {
                        artist: "Rihanna & Slash",
                        songs: [ 
                            {
                                title: "Rockstar 101 (feat. Slash)",
                                src: "https://embed.music.apple.com/us/music-video/rockstar-101-feat-slash/1446857297"
                            },
                        ]
                    },
                    {
                        artist: "Rita Ora",
                        birthday: [{ month: "November", day: 26, year: 1990 }],
                        songs: [ 
                            {
                                title: "Don't Think Twice",
                                src: "https://embed.music.apple.com/us/music-video/dont-think-twice/1717629550"
                            },
                            {
                                title: "Girls (feat. Cardi B, Bebe Rexha & Charli XCX)",
                                src: "https://embed.music.apple.com/us/music-video/girls-feat-cardi-b-bebe-rexha-charli-xcx/1395399461"
                            },
                            {
                                title: "How We Do (Party)",
                                src: "https://embed.music.apple.com/us/music-video/how-we-do-party/1711505801"
                            },
                            {
                                title: "I Will Never Let You Down",
                                src: "https://embed.music.apple.com/us/music-video/i-will-never-let-you-down/1732162294"
                            },
                            {
                                title: "Your Song",
                                src: "https://embed.music.apple.com/us/music-video/your-song/1251454096"
                            },
                        ]
                    },
                    {
                        artist: "ROSÉ",
                        birthday: [{ month: "February", day: 11, year: 1997 }],
                        songs: [ 
                            {
                                title: "toxic till the end",
                                src: "https://embed.music.apple.com/us/music-video/toxic-till-the-end/1784274033"
                            },
                            {
                                title: "number one girl",
                                src: "https://embed.music.apple.com/us/music-video/number-one-girl/1781185700"
                            },
                        ]
                    },
                    {
                        artist: "ROSÉ & Bruno Mars",
                        birthday: [{ month: "February", day: 11, year: 1997 },{ month: "October", day: 8, year: 1985 }],
                        songs: [ 
                            {
                                title: "APT.",
                                src: "https://embed.music.apple.com/us/music-video/apt/1774570775"
                            },
                        ]
                    },
                    {
                        artist: "Ryan Tedder & Far East Movement",
                        songs: [ 
                            {
                                title: "Rocketeer (feat. Ryan Tedder)",
                                src: "https://embed.music.apple.com/us/music-video/rocketeer-feat-ryan-tedder/1446015365"
                            },
                        ]
                    },
                    {
                        artist: "Sabrina Carpenter",
                        birthday: [{ month: "May", day: 11, year: 1999 }],
                        songs: [ 
                            {
                                title: "Espresso",
                                src: "https://embed.music.apple.com/us/music-video/espresso/1740640007"
                            },
                            {
                                title: "Please Please Please",
                                src: "https://embed.music.apple.com/us/music-video/please-please-please/1750715818"
                            },
                            {
                                title: "santa doesn't know you like i do",
                                src: "https://embed.music.apple.com/us/music-video/santa-doesnt-know-you-like-i-do/1719900193"
                            },
                        ]
                    },
                    {
                        artist: "Sade",
                        birthday: [{ month: "January", day: 16, year: 1959 }],
                        songs: [ 
                            {
                                title: "Cherish the Day",
                                src: "https://embed.music.apple.com/us/music-video/cherish-the-day/348017258"
                            },
                            {
                                title: "Smooth Operator",
                                src: "https://embed.music.apple.com/us/music-video/smooth-operator/347090689"
                            },
                        ]
                    },
                    {
                        artist: "Sammie & Soulja Boy Tell 'Em",
                        birthday: [{ month: "March", day: 1, year: 1987 },{ month: "July", day: 28, year: 1990 }],
                        songs: [ 
                            {
                                title: "Kiss Me Thru the Phone",
                                src: "https://embed.music.apple.com/us/music-video/kiss-me-thru-the-phone/1445864818"
                            },
                        ]
                    },
                    {
                        artist: "Saweetie",
                        birthday: [{ month: "July", day: 2, year: 1993 }],
                        songs: [ 
                            {
                                title: "Emotional (feat. Quavo)",
                                src: "https://embed.music.apple.com/us/music-video/emotional-feat-quavo/1458128283"
                            },
                            {
                                title: "NANi",
                                src: "https://embed.music.apple.com/us/music-video/nani/1746831030"
                            },
                            {
                                title: "Tap In",
                                src: "https://embed.music.apple.com/us/music-video/tap-in/1519277944"
                            },
                            {
                                title: "Is It The Way",
                                src: "https://embed.music.apple.com/us/music-video/is-it-the-way/1770956161"
                            },
                            {
                                title: "I Want You This Christmas",
                                src: "https://embed.music.apple.com/us/music-video/i-want-you-this-christmas/1780530272"
                            },
                        ]
                    },
                    {
                        artist: "Saweetie & P-LO",
                        birthday: [{ month: "July", day: 2, year: 1993 },{ month: "May", day: 7, year: 1991 }],
                        songs: [ 
                            {
                                title: "Do It For The Bay",
                                src: "https://embed.music.apple.com/us/music-video/do-it-for-the-bay/1727624201"
                            },
                        ]
                    },
                    {
                        artist: "Saweetie, YG & Tyga",
                        birthday: [{ month: "July", day: 2, year: 1993 },{ month: "March", day: 9, year: 1990 },{ month: "November", day: 19, year: 1989 }],
                        songs: [ 
                            {
                                title: "BIRTHDAY",
                                src: "https://embed.music.apple.com/us/music-video/birthday/1699671441"
                            },
                        ]
                    },
                    {
                        artist: "SAYGRACE",
                        birthday: [{ month: "April", day: 8, year: 1997 }],
                        songs: [ 
                            {
                                title: "You Don't Own Me (feat. G-Eazy)",
                                src: "https://embed.music.apple.com/us/music-video/you-dont-own-me-feat-g-eazy/1000103301"
                            },
                        ]
                    },
                    {
                        artist: "ScHoolboy Q",
                        birthday: [{ month: "October", day: 26, year: 1986 }],
                        songs: [ 
                            {
                                title: "Man of the Year",
                                src: "https://embed.music.apple.com/us/music-video/man-of-the-year/1445118433"
                            },
                            {
                                title: "THank god 4 me",
                                src: "https://embed.music.apple.com/us/music-video/thank-god-4-me/1769467100"
                            },
                        ]
                    },
                    {
                        artist: "Sean Paul",
                        birthday: [{ month: "January", day: 9, year: 1973 }],
                        songs: [ 
                            {
                                title: "Get Busy",
                                src: "https://embed.music.apple.com/us/music-video/get-busy/281898787"
                            },
                            {
                                title: "Gimme the Light",
                                src: "https://embed.music.apple.com/us/music-video/gimme-the-light/281889843"
                            },
                            {
                                title: "How Deep Is Your Love (feat. Kelly Rowland)",
                                src: "https://embed.music.apple.com/us/music-video/how-deep-is-your-love-feat-kelly-rowland/572092043"
                            },
                            {
                                title: "How We Do It (feat. Pia Mia)",
                                src: "https://embed.music.apple.com/us/music-video/how-we-do-it-feat-pia-mia/1613752510"
                            },
                            {
                                title: "I'm Still In Love With You",
                                src: "https://embed.music.apple.com/us/music-video/im-still-in-love-with-you/281904771"
                            },
                            {
                                title: "She Doesn't Mind",
                                src: "https://embed.music.apple.com/us/music-video/she-doesnt-mind/487927394"
                            },
                            {
                                title: "Bring It",
                                src: "https://embed.music.apple.com/us/music-video/bring-it/1771451612"
                            },
                        ]
                    },
                    {
                        artist: "Selena Gomez",
                        birthday: [{ month: "July", day: 22, year: 1992 }],
                        songs: [ 
                            {
                                title: "Back To You",
                                src: "https://embed.music.apple.com/us/music-video/back-to-you/1392620956"
                            },
                            {
                                title: "Come & Get It",
                                src: "https://embed.music.apple.com/us/music-video/come-get-it/1444342221"
                            },
                            {
                                title: "Dance Again",
                                src: "https://embed.music.apple.com/us/music-video/dance-again/1504719688"
                            },
                {
                                title: 'Feel Me (Live from Revival Tour)',
                                src: 'https://embed.music.apple.com/us/music-video/feel-me-live-from-revival-tour/1501330326'
                            },
                            {
                                title: 'Fetish (feat. Gucci Mane)',
                                src: "https://embed.music.apple.com/us/music-video/fetish-feat-gucci-mane/1445037205"
                            },
                            {
                                title: 'Good for You',
                                src: 'https://embed.music.apple.com/us/music-video/good-for-you/1444851481'
                            },
                            {
                                title: 'Hands To Myself',
                                src: 'https://embed.music.apple.com/us/music-video/hands-to-myself/1444998527'
                            },
                            {
                                title: 'The Heart Wants What It Wants (Official Video)',
                                src: 'https://embed.music.apple.com/us/music-video/the-heart-wants-what-it-wants/1440502545'
                            },
                            {
                                title: 'Kill Em with Kindness',
                                src: 'https://embed.music.apple.com/us/music-video/kill-em-with-kindness/1444847451'
                            },
                            {
                                title: 'Look At Her Now',
                                src: 'https://embed.music.apple.com/us/music-video/look-at-her-now/1484570480'
                            },
                            {
                                title: 'Lose You To Love Me',
                                src: 'https://embed.music.apple.com/us/music-video/lose-you-to-love-me/1484404145'
                            },
                            {
                                title: 'Love On',
                                src: 'https://embed.music.apple.com/us/music-video/love-on/1731997373'
                            },
                            {
                                title: 'Rare',
                                src: 'https://embed.music.apple.com/us/music-video/rare/1494214796'
                            },
                            {
                                title: 'Same Old Love',
                                src: 'https://embed.music.apple.com/us/music-video/same-old-love/1444999712'
                            },
                            {
                                title: 'Single Soon',
                                src: 'https://embed.music.apple.com/us/music-video/single-soon/1703544158'
                            },
                            {
                                title: 'Slow Down',
                                src: 'https://embed.music.apple.com/us/music-video/slow-down/1444875586'
                            },
                        ]
                    },
                    {
                        artist: "Selena Gomez & The Scene",
                        songs: [ 
                            {
                                title: 'Love You Like a Love Song',
                                src: 'https://embed.music.apple.com/us/music-video/love-you-like-a-love-song/1445857002'
                            },
                            {
                                title: 'Naturally',
                                src: 'https://embed.music.apple.com/us/music-video/naturally/1446737032'
                            },
                        ]
                    },
                    {
                        artist: "Sevana",
                        birthday: [{ month: "November", day: 21, year: 1991 }],
                        songs: [ 
                            {
                                title: 'Mango',
                                src: 'https://embed.music.apple.com/us/music-video/mango/1525407721'
                            },
                        ]
                    },
                    {
                        artist: "Sevyn Streeter",
                        birthday: [{ month: "July", day: 7, year: 1986 }],
                        songs: [ 
                            {
                                title: 'Before I Do',
                                src: 'https://embed.music.apple.com/us/music-video/before-i-do/1210950272'
                            },
                            {
                                title: "Don't Kill the Fun (feat. Chris Brown)",
                                src: 'https://embed.music.apple.com/us/music-video/dont-kill-the-fun-feat-chris-brown/973773736'
                            },
                            {
                                title: "It Won't Stop (feat. Chris Brown)",
                                src: 'https://embed.music.apple.com/us/music-video/it-wont-stop-feat-chris-brown/736424826'
                            },
                        ]
                    },
                    {
                        artist: "Sexyy Red",
                        birthday: [{ month: "April", day: 15, year: 1998 }],
                        songs: [ 
                            {
                                title: 'Get It Sexyy',
                                src: 'https://embed.music.apple.com/us/music-video/get-it-sexyy/1738710282'
                            },
                        ]
                    },
                    {
                        artist: "SG5",
                        songs: [ 
                            {
                                title: 'Firetruck',
                                src: 'https://embed.music.apple.com/us/music-video/firetruck/1674813226'
                            },
                        ]
                    },
                    {
                        artist: "SHAED & Two Feet",
                        songs: [ 
                            {
                                title: 'Part Time Psycho',
                                src: 'https://embed.music.apple.com/us/music-video/part-time-psycho/1556911607'
                            },
                        ]
                    },
                    {
                        artist: "Shakira",
                        birthday: [{ month: "February", day: 2, year: 1977 }],
                        songs: [ 
                            {
                                title: "Can't Remember to Forget You (feat. Rihanna)",
                                src: 'https://embed.music.apple.com/us/music-video/cant-remember-to-forget-you-feat-rihanna/808966041'
                            },
                            {
                                title: "Hips Don't Lie (feat. Wyclef Jean)",
                                src: 'https://embed.music.apple.com/us/music-video/hips-dont-lie-feat-wyclef-jean/485600359'
                            },
                        ]
                    },
                    {
                        artist: "Shaneil Muir & Vybz Kartel",
                        songs: [ 
                            {
                                title: 'Ride It',
                                src: 'https://embed.music.apple.com/us/music-video/ride-it/1628522033'
                            },
                        ]
                    },
                    {
                        artist: "Shawn Mendes & Camila Cabello",
                        songs: [ 
                            {
                                    title: "Señorita",
                                    src: "https://embed.music.apple.com/us/music-video/se%C3%B1orita/1469423548"
                                },
                            ]
                        },
                        {
                            artist: "Shenseea",
                            birthday: [{ month: "October", day: 1, year: 1996 }],
                            songs: [ 
                                {
                                    title: "Beama (feat. Lola Brooke)",
                                    src: "https://embed.music.apple.com/us/music-video/beama-feat-lola-brooke/1714918755"
                                },
                                {
                                    title: "Curious",
                                    src: "https://embed.music.apple.com/us/music-video/curious/1682097880"
                                },
                                {
                                    title: "Die For You",
                                    src: "https://embed.music.apple.com/us/music-video/die-for-you/1738546846"
                                },
                                {
                                    title: "Sure Sure",
                                    src: "https://embed.music.apple.com/us/music-video/sure-sure/1527215442"
                                },
                            ]
                        },
                        {
                            artist: "Shenseea & Tyga",
                            birthday: [{ month: "October", day: 1, year: 1996 },{ month: "November", day: 19, year: 1989 }],
                            songs: [ 
                                {
                                    title: "Blessed",
                                    src: "https://embed.music.apple.com/us/music-video/blessed/1464595231"
                                },
                            ]
                        },
                        {
                            artist: "Shenseea & Wizkid",
                            songs: [ 
                                {
                                    title: "Work Me Out",
                                    src: "https://embed.music.apple.com/us/music-video/work-me-out/1760035189"
                                },
                            ]
                        },
         {
                            artist: "Shyne",
                            birthday: [{ month: "November", day: 8, year: 1978 }],
                            songs: [ 
                                {
                                    title: "That's Gangsta",
                                    src: "https://embed.music.apple.com/us/music-video/thats-gangsta/596135687"
                                },
                            ]
                        },
                        {
                            artist: "SICKOTOY, Inna & TAG",
                            songs: [ 
                                {
                                    title: "VKTM",
                                    src: "https://embed.music.apple.com/us/music-video/vktm/1516529130"
                                },
                            ]
                        },
                        {
                            artist: "Sisqó",
                            birthday: [{ month: "November", day: 9, year: 1978 }],
                            songs: [ 
                                {
                                    title: "Thong Song (Edited Version)",
                                    src: "https://embed.music.apple.com/us/music-video/thong-song-edited-version/1445826589"
                                },
                            ]
                        },
                        {
                            artist: "SISTAR",
                            songs: [ 
                                {
                                    title: "Shake It",
                                    src: "https://embed.music.apple.com/us/music-video/shake-it/1014275114"
                                },
                                {
                                    title: "Touch My Body",
                                    src: "https://embed.music.apple.com/us/music-video/touch-my-body/905014641"
                                },
                            ]
                        },
                        {
                            artist: "Skillibeng",
                            birthday: [{ month: "December", day: 23, year: 1996 }],
                            songs: [ 
                                {
                                    title: "Deja Vu (Official Video)",
                                    src: "https://embed.music.apple.com/us/music-video/deja-vu-official-video/1660327437"
                                },
                                {
                                    title: "Patience (feat. TrackOne)",
                                    src: "https://embed.music.apple.com/us/music-video/patience-feat-trackone/1590666427"
                                },
                            ]
                        },
                        {
                            artist: "Slim Thug",
                            birthday: [{ month: "September", day: 8, year: 1980 }],
                            songs: [ 
                                {
                                    title: "I Run",
                                    src: "https://embed.music.apple.com/us/music-video/i-run/303540834"
                                },
                            ]
                        },
                        {
                            artist: "Snoop Dogg",
                            birthday: [{ month: "October", day: 20, year: 1971 }],
                            songs: [ 
                                {
                                    title: "Gangsta Luv",
                                    src: "https://embed.music.apple.com/us/music-video/gangsta-luv/720077094"
                                },
                            {
                                        title: "Sensual Seduction",
                                        src: "https://embed.music.apple.com/us/music-video/sensual-seduction/1445834159"
                                    },
                                ]
                            },
                            {
                                artist: "Snoop Dogg & Wiz Khalifa",
                                birthday: [{ month: "October", day: 20, year: 1971 },{ month: "September", day: 8, year: 1987 }],
                                songs: [ 
                                    {
                                        title: "Young, Wild & Free (feat. Bruno Mars)", 
                                        src: "https://embed.music.apple.com/us/music-video/young-wild-free-feat-bruno-mars/480436641"
                                    },
                                ]
                            },
                            {
                                artist: "Soulja Boy Tell 'Em",
                                birthday: [{ month: "July", day: 28, year: 1990 }],
                                songs: [ 
                                    {
                                        title: "Pretty Boy Swag",
                                        src: "https://embed.music.apple.com/us/music-video/pretty-boy-swag/1445737094"
                                    },
                                    {
                                        title: "Speakers Going Hammer",
                                        src: "https://embed.music.apple.com/us/music-video/speakers-going-hammer/1445722584"
                                    },
                                    {
                                        title: "Turn My Swag On",
                                        src: "https://embed.music.apple.com/us/music-video/turn-my-swag-on/1446006210"
                                    },
                                ]
                            },
                            {
                                artist: "Soulja Boy Tell 'Em & 50 Cent",
                                birthday: [{ month: "July", day: 28, year: 1990 },{ month: "July", day: 6, year: 1975 }],
                                songs: [ 
                                    {
                                        title: "Mean Mug (feat. 50 Cent)",
                                        src: "https://embed.music.apple.com/us/music-video/mean-mug-feat-50-cent/1445828592"
                                    },
                                ]
                            },
                            {
                                artist: "Soulja Boy Tell 'Em, Gucci Mane & Shawty Lo",
                                birthday: [{ month: "July", day: 28, year: 1990 },{ month: "February", day: 12, year: 1980 },{ month: "March", day: 22, year: 1976 }],
                                songs: [ 
                                    {
                                        title: "Gucci Bandanna",
                                        src: "https://embed.music.apple.com/us/music-video/gucci-bandanna/1445869414"
                                    },
                                ]
                            },
                            {
                                artist: "Stacey Q",
                                birthday: [{ month: "November", day: 30, year: 1958 }],
                                songs: [ 
                                    {
                                        title: "Two of Hearts",
                                        src: "https://embed.music.apple.com/us/music-video/two-of-hearts/362111053"
                                    },
                                ]
                            },
                            {
                                artist: "Stefflon Don",
                                birthday: [{ month: "December", day: 14, year: 1991 }],
                                songs: [ 
                                    {
                                        title: "Move",
                                        src: "https://embed.music.apple.com/us/music-video/move/1531265665"
                                    },
                                    {
                                        title: "Senseless",
                                        src: "https://embed.music.apple.com/us/music-video/senseless/1399236247"
                                    },
                                ]
                            },
                            {
                                artist: "Summer Walker",
                                birthday: [{ month: "April", day: 11, year: 1996 }],
                                songs: [ 
                                    {
                                        title: "Heart Of A Woman (Kordena's Version)",
                                        src: "https://embed.music.apple.com/us/music-video/heart-of-a-woman-kordenas-version/1775982937"
                                    },
                                    {
                                        title: "Heart Of A Woman",
                                        src: "https://embed.music.apple.com/us/music-video/heart-of-a-woman/1789010906"
                                    },
                                ]
                            },
                            {
                                artist: "SZA",
                                birthday: [{ month: "November", day: 8, year: 1989 }],
                                songs: [ 
                                    {
                                        title: "Good Days",
                                        src: "https://embed.music.apple.com/us/music-video/good-days/1556765710"
                                    },
                                    {
                                        title: "Snooze",
                                        src: "https://embed.music.apple.com/us/music-video/snooze/1704240876"
                                    },
                                ]
                            },
                            {
                                artist: "T-Pain",
                                birthday: [{ month: "September", day: 30, year: 1984 }],
                                songs: [ 
                                    {
                                        title: "I'm N Luv (Wit a Stripper) [feat. Mike Jones]",
                                        src: "https://embed.music.apple.com/us/music-video/im-n-luv-wit-a-stripper-feat-mike-jones/329114031"
                                    },
                                ]
                            },
                            {
                                artist: "T-Pain & Lil Wayne",
                                birthday: [{ month: "September", day: 30, year: 1984 },{ month: "September", day: 27, year: 1982 }],
                                songs: [ 
                                    {
                                        title: "Got Money (Edited Version)",
                                        src: "https://embed.music.apple.com/us/music-video/got-money-edited-version/1445729268"
                                    },
                                ]
                            },
                            {
                                artist: "T.I.",
                                birthday: [{ month: "September", day: 25, year: 1980 }],
                                songs: [ 
                                    {
                                        title: "Bring Em Out",
                                        src: "https://embed.music.apple.com/us/music-video/bring-em-out/1260865151"
                                    },
                                    {
                                        title: "Dope (feat. Marsha Ambrosius)",
                                        src: "https://embed.music.apple.com/us/music-video/dope-feat-marsha-ambrosius/1444861766"
                                    },
                                    {
                                        title: "Get Back Up (feat. Chris Brown)",
                                        src: "https://embed.music.apple.com/us/music-video/get-back-up-feat-chris-brown/1260875296"
                                    },
                                    {
                                        title: "Live Your Life (feat. Rihanna)",
                                        src: "https://embed.music.apple.com/us/music-video/live-your-life-feat-rihanna/1656038356"
                                    },
                                    {
                                        title: "Private Show (feat. Chris Brown) [Video]",
                                        src: "https://embed.music.apple.com/us/music-video/private-show-feat-chris-brown/1445340623"
                                    },
                                    {
                                        title: "Whatever You Like",
                                        src: "https://embed.music.apple.com/us/music-video/whatever-you-like/1260881211"
                                    },
                                    {
                                        title: "Wraith (feat. Yo Gotti)",
                                        src: "https://embed.music.apple.com/us/music-video/wraith-feat-yo-gotti/1438179575"
                                    },
                                ]
                            },
                            {
                                artist: "Talia Mar",
                                birthday: [{ month: "November", day: 6, year: 1996 }],
                                songs: [ 
                                    {
                                        title: "Forget About Your Ex (Official Video)",
                                        src: "https://embed.music.apple.com/us/music-video/forget-about-your-ex/1702333335"
                                    },
                                ]
                            },
                            {
                                artist: "Tate McRae",
                                birthday: [{ month: "July", day: 1, year: 2003 }],
                                songs: [ 
                                    {
                                        title: "exes",
                                        src: "https://embed.music.apple.com/us/music-video/exes/1716855800"
                                    },
                                    {
                                        title: "It's ok I'm ok",
                                        src: "https://embed.music.apple.com/us/music-video/its-ok-im-ok/1767934738"
                                    },
                                ]
                            },
                            {
                                artist: "Taylor Dayne",
                                birthday: [{ month: "March", day: 7, year: 1962 }],
                                songs: [ 
                                    {
                                        title: "Tell It to My Heart",
                                        src: "https://embed.music.apple.com/us/music-video/tell-it-to-my-heart/279982745"
                                    },
                                ]
                            },
                            {
                                artist: "Taylor Swift",
                                birthday: [{ month: "December", day: 13, year: 1989 }],
                                songs: [ 
                                    {
                                        title: "Anti-Hero",
                                        src: "https://embed.music.apple.com/us/music-video/anti-hero/1650836460"
                                    },
                            {
                                        title: "Back to December",
                                        src: "https://embed.music.apple.com/us/music-video/back-to-december/1445827510"
                                    },
                                    {
                                        title: "Bad Blood (feat. Kendrick Lamar)",
                                        src: "https://embed.music.apple.com/us/music-video/bad-blood-feat-kendrick-lamar/1444612068"
                                    },
                                    {
                                        title: "Begin Again",
                                        src: "https://embed.music.apple.com/us/music-video/begin-again/1445869386"
                                    },
                                    {
                                        title: "Bejeweled",
                                        src: "https://embed.music.apple.com/us/music-video/bejeweled/1651517092"
                                    },
                                    {
                                        title: "The Best Day (Taylor's Version)",
                                        src: "https://embed.music.apple.com/us/music-video/the-best-day-taylors-version/1565513220"
                                    },
                                    {
                                        title: "Blank Space",
                                        src: "https://embed.music.apple.com/us/music-video/blank-space/1445036536"
                                    },
                                    {
                                        title: "Delicate",
                                        src: "https://embed.music.apple.com/us/music-video/delicate/1358176127"
                                    },
                                    {
                                        title: "I Can Do It with a Broken Heart",
                                        src: "https://embed.music.apple.com/us/music-video/i-can-do-it-with-a-broken-heart/1763899528"
                                    },
                                     {
                                        title: "I Can See You (Taylor's Version) [From The Vault]",
                                        src: "https://embed.music.apple.com/us/music-video/i-can-see-you-taylors-version-from-the-vault/1696387354"
                                    },
                                    {
                                        title: "I Knew You Were Trouble",
                                        src: "https://embed.music.apple.com/us/music-video/i-knew-you-were-trouble/1444348419"
                                    },
                                    {
                                        title: "Look What You Made Me Do",
                                        src: "https://embed.music.apple.com/us/music-video/look-what-you-made-me-do/1445740748"
                                    },
                                    {
                                        title: "Lover",
                                        src: "https://embed.music.apple.com/us/music-video/lover/1477498160"
                                    },
                                    {
                                        title: "ME! (feat. Brendon Urie of Panic! At The Disco)",
                                        src: "https://embed.music.apple.com/us/music-video/me-feat-brendon-urie-of-panic-at-the-disco/1460866705"
                                    },
                                    {
                                        title: "Mine",
                                        src: "https://embed.music.apple.com/us/music-video/mine/1445826299"
                                    },
                                    {
                                        title: "Ours",
                                        src: "https://embed.music.apple.com/us/music-video/ours/1446016867"
                                    },
                                    {
                                        title: "Out of the Woods",
                                        src: "https://embed.music.apple.com/us/music-video/out-of-the-woods/1445018135"
                                    },
                                    {
                                        title: "Shake It Off",
                                        src: "https://embed.music.apple.com/us/music-video/shake-it-off/1445005781"
                                    },
                                    {
                                        title: "The Story of Us",
                                        src: "https://embed.music.apple.com/us/music-video/the-story-of-us/1445859378"
                                    },
                                    {
                                        title: "We Are Never Ever Getting Back Together",
                                        src: "https://embed.music.apple.com/us/music-video/we-are-never-ever-getting-back-together/1445833386"
                                    },
                                    {
                                        title: "Wildest Dreams",
                                        src: "https://embed.music.apple.com/us/music-video/wildest-dreams/1445010473"
                                    },
                                    {
                                        title: "Willow",
                                        src: "https://embed.music.apple.com/us/music-video/willow/1544365888"
                                    },
                                    {
                                        title: "You Belong With Me",
                                        src: "https://embed.music.apple.com/us/music-video/you-belong-with-me/1452859640"
                                    },
                                    {
                                        title: "You Need To Calm Down",
                                        src: "https://embed.music.apple.com/us/music-video/you-need-to-calm-down/1468647174"
                                    },
                                ]
                            },
                            {
                                artist: "Teddy Swims",
                                birthday: [{ month: "September", day: 25, year: 1992 }],
                                songs: [ 
                                    {
                                        title: "The Door",
                                        src: "https://embed.music.apple.com/us/music-video/the-door/1741625539"
                                    },
                                ]
                            },
                            {
                                artist: "Tee Grizzley",
                                birthday: [{ month: "March", day: 23, year: 1994 }],
                                songs: [ 
                                    {
                                        title: "Blow for Blow (feat. J. Cole)",
                                        src: "https://embed.music.apple.com/us/music-video/blow-for-blow-feat-j-cole/1771461647"
                                    },
                                ]
                            },
                            {
                                artist: "Tems",
                                birthday: [{ month: "June", day: 11, year: 1995 }],
                                songs: [ 
                                    {
                                        title: "Love Me JeJe",
                                        src: "https://embed.music.apple.com/us/music-video/love-me-jeje/1744734668"
                                    },
                                    {
                                        title: "Me & U",
                                        src: "https://embed.music.apple.com/us/music-video/me-u/1710455085"
                                    },
                                    {
                                        title: "Get it Right (feat. Asake)",
                                        src: "https://embed.music.apple.com/us/music-video/get-it-right-feat-asake/1783388870"
                                    },
                                ]
                            },
                            {
                                artist: "Teyana Taylor",
                                birthday: [{ month: "December", day: 10, year: 1990 }],
                                songs: [ 
                                    {
                                        title: "Maybe (feat. Pusha T & Yo Gotti)",
                                        src: "https://embed.music.apple.com/us/music-video/maybe-feat-pusha-t-yo-gotti/1445010790"
                                    },
                                ]
                            },
                            {
                                artist: "The Chainsmokers",
                                songs: [ 
                                    {
                                        title: "Don't Let Me Down (feat. Daya)",
                                        src: "https://embed.music.apple.com/us/music-video/dont-let-me-down-feat-daya/1108091927"
                                    },
                                ]
                            },
                            {
                                artist: "The Chainsmokers & Bebe Rexha",
                                songs: [ 
                                    {
                                        title: "Call You Mine",
                                        src: "https://embed.music.apple.com/us/music-video/call-you-mine/1465737404"
                                    },
                                ]
                            },
                            {
                                artist: "The Game",
                                birthday: [{ month: "November", day: 29, year: 1979 }],
                                songs: [ 
                                    {
                                        title: "All Eyez",
                                        src: "https://embed.music.apple.com/us/music-video/all-eyez/1146083223"
                                    },
                                    {
                                        title: "West Side",
                                        src: "https://embed.music.apple.com/us/music-video/west-side/1475041051"
                                    },
                                ]
                            },
                            {
                                artist: "The Human League",
                                songs: [ 
                                    {
                                        title: "Don't You Want Me",
                                        src: "https://embed.music.apple.com/us/music-video/dont-you-want-me/719691604"
                                    },
                                ]
                            },
                            {
                                artist: "The Notorious B.I.G.",
                                birthday: [{ month: "May", day: 21, year: 1972 }],
                                songs: [ 
                                    {
                                        title: "Big Poppa (Edited Version)",
                                        src: "https://embed.music.apple.com/us/music-video/big-poppa-edited-version/269733956"
                                    },
                                    {
                                        title: "Juicy",
                                        src: "https://embed.music.apple.com/us/music-video/juicy/440639990"
                                    },
                                    {
                                        title: "Mo Money Mo Problems (feat. Puff Daddy & Mase)",
                                        src: "https://embed.music.apple.com/us/music-video/mo-money-mo-problems-feat-puff-daddy-mase/1480068762"
                                    },
                                    {
                                        title: "One More Chance",
                                        src: "https://embed.music.apple.com/us/music-video/one-more-chance/301229120"
                                    },
                                    {
                                        title: "Warning",
                                        src: "https://embed.music.apple.com/us/music-video/warning/1479907568"
                                    },
                                ]
                            },
                            {
                                artist: "The Omg Girlz",
                                songs: [ 
                                    {
                                        title: "Gucci This (Gucci That)",
                                        src: "https://embed.music.apple.com/us/music-video/gucci-this-gucci-that/1446014165"
                                    },
                                ]
                            },
                            {
                                artist: "The Pussy Cat Dolls",
                                songs: [ 
                                    {
                                        title: "React",
                                        src: "https://embed.music.apple.com/us/music-video/react/1497901368"
                                    },
                                ]
                            },
                            {
                                artist: "The Pussycat Dolls & Busta Rhymes",
                                songs: [ 
                                    {
                                        title: "Don't Cha (Busta Version) [Busta Version]",
                                        src: "https://embed.music.apple.com/us/music-video/dont-cha-busta-version-busta-version/1445832685"
                                    },
                                ]
                            },
                            {
                                artist: "The Saturdays",
                                songs: [ 
                                    {
                                        title: "What About Us",
                                        src: "https://embed.music.apple.com/us/music-video/what-about-us/1445867073"
                                    },
                                ]
                            },
                            {
                                artist: "The Wanted",
                                songs: [ 
                                      {
                                        title: "Glad You Came",
                                        src: "https://embed.music.apple.com/us/music-video/glad-you-came/1446007263"
                                    },
                                ]
                            },
                            {
                                artist: "The Weeknd, JENNIE & Lily Rose Depp",
                                birthday: [{ month: "February", day: 16, year: 1990 },{ month: "January", day: 16, year: 1996 },{ month: "May", day: 27, year: 1999 }],
                                songs: [ 
                                    {
                                        title: "One of the Girls",
                                        src: "https://embed.music.apple.com/us/music-video/one-of-the-girls/1695965304"
                                    },
                                ]
                            },
                            {
                                artist: "The Weeknd, Playboi Carti & Madonna",
                                birthday: [{ month: "February", day: 16, year: 1990 },{ month: "September", day: 13, year: 1995 },{ month: "August", day: 16, year: 1958 }],
                                songs: [ 
                                    {
                                        title: "Popular",
                                        src: "https://embed.music.apple.com/us/music-video/popular/1732335447"
                                    },
                                ]
                            },
                            {
                                artist: "The-Dream",
                                birthday: [{ month: "September", day: 20, year: 1977 }],
                                songs: [ 
                                    {
                                        title: "Slow It Down (feat. Fabolous)",
                                        src: "https://embed.music.apple.com/us/music-video/slow-it-down-feat-fabolous/1444340949"
                                    },
                                ]
                            },
                            {
                                artist: "Tiësto & Charli XCX",
                                birthday: [{ month: "January", day: 17, year: 1969 },{ month: "August", day: 2, year: 1992 }],
                                songs: [ 
                                    {
                                        title: "Hot In It",
                                        src: "https://embed.music.apple.com/us/music-video/hot-in-it/1640234301"
                                    },
                                ]
                            },
                            {
                                artist: "Tiësto & Mabel",
                                birthday: [{ month: "January", day: 17, year: 1969 },{ month: "February", day: 19, year: 1996 }],
                                songs: [ 
                                    {
                                        title: "God Is a Dancer",
                                        src: "https://embed.music.apple.com/us/music-video/god-is-a-dancer/1479700210"
                                    },
                                ]
                            },
                            {
                                artist: "Tinashe",
                                birthday: [{ month: "February", day: 6, year: 1993 }],
                                songs: [ 
                                    {
                                        title: "All Hands On Deck",
                                        src: "https://embed.music.apple.com/us/music-video/all-hands-on-deck/982389246"
                                    },
                                    {
                                        title: "Bouncin",
                                        src: "https://embed.music.apple.com/us/music-video/bouncin/1576612327"
                                    },
                                    {
                                        title: "Company",
                                        src: "https://embed.music.apple.com/us/music-video/company/1191978076"
                                    },
                                    {
                                        title: "Flame",
                                        src: "https://embed.music.apple.com/us/music-video/flame/1229258112"
                                    },
                                    {
                                        title: "Me So Bad (feat. Ty Dolla $ign & French Montana)",
                                        src: "https://embed.music.apple.com/us/music-video/me-so-bad-feat-ty-dolla-%24ign-french-montana/1364171680"
                                    },
                                    {
                                        title: "Nasty",
                                        src: "https://embed.music.apple.com/us/music-video/nasty/1760674690"
                                    },
                                    {
                                        title: "Needs",
                                        src: "https://embed.music.apple.com/us/music-video/needs/1702881198"
                                    },
                                    {
                                        title: "No Drama (feat. Offset)",
                                        src: "https://embed.music.apple.com/us/music-video/no-drama-feat-offset/1336214550"
                                    },
                                    {
                                        title: "Player (feat. Chris Brown)",
                                        src: "https://embed.music.apple.com/us/music-video/player-feat-chris-brown/1054258415"
                                    },
                                    {
                                        title: "Superlove",
                                        src: "https://embed.music.apple.com/us/music-video/superlove/1143649502"
                                    },
                                    {
                                        title: "Talk To Me Nice",
                                        src: "https://embed.music.apple.com/us/music-video/talk-to-me-nice/1698582167"
                                    },
                                    {
                                        title: "X / I Can See the Future",
                                        src: "https://embed.music.apple.com/us/music-video/x-i-can-see-the-future/1606206900"
                                    },
                                    {
                                        title: "2 On (feat. ScHoolboy Q)",
                                        src: "https://embed.music.apple.com/us/music-video/2-on-feat-schoolboy-q/847685446"
                                    },
                                    {
                                        title: "No Broke Boys",
                                        src: "https://embed.music.apple.com/us/music-video/no-broke-boys/1773486784"
                                    },
                                ]
                            },
                            {
                                artist: "Tinashe & Channel Tres",
                                birthday: [{ month: "February", day: 6, year: 1993 },{ month: "May", day: 26, year: 1991 }],
                                songs: [ 
                                    {
                                        title: "HMU For a Good Time",
                                        src: "https://embed.music.apple.com/us/music-video/hmu-for-a-good-time/1631444348"
                                    },
                                ]
                            },
                            {
                                artist: "Too $hort",
                                birthday: [{ month: "April", day: 28, year: 1966 }],
                                songs: [ 
                                    {
                                        title: "Blow the Whistle",
                                        src: "https://embed.music.apple.com/us/music-video/blow-the-whistle/319352641"
                                    },
                                    {
                                        title: "Only Dimes (feat. G-Eazy & The-Dream)",
                                        src: "https://embed.music.apple.com/us/music-video/only-dimes-feat-g-eazy-the-dream/1441560857"
                                    },
                                ]
                            },
                            {
                                artist: "Toosii",
                                birthday: [{ month: "January", day: 9, year: 2000 }],
                                songs: [ 
                                    {
                                        title: "Favorite Song",
                                        src: "https://embed.music.apple.com/us/music-video/favorite-song/1678195003"
                                    },
                                ]
                            },
                            {
                                artist: "Toosii & Gunna",
                                birthday: [{ month: "January", day: 9, year: 2000 },{ month: "June", day: 14, year: 1993 }],
                                songs: [ 
                                 {
                                        title: "Champs Élysées",
                                        src: "https://embed.music.apple.com/us/music-video/champs-%C3%A9lys%C3%A9es/1766840966"
                                    },
                                ]
                            },
                            {
                                artist: "Topic & Bebe Rexha",
                                songs: [ 
                                    {
                                        title: "Chain My Heart",
                                        src: "https://embed.music.apple.com/us/music-video/chain-my-heart/1576162547"
                                    },
                                ]
                            },
                            {
                                artist: "Tori Kelly",
                                birthday: [{ month: "December", day: 14, year: 1992 }],
                                songs: [ 
                                    {
                                        title: "Dear No One",
                                        src: "https://embed.music.apple.com/us/music-video/dear-no-one/1444871330"
                                    },
                                    {
                                        title: "Hollow",
                                        src: "https://embed.music.apple.com/us/music-video/hollow/1444879977"
                                    },
                                    {
                                        title: "missin you (Official Music Video)",
                                        src: "https://embed.music.apple.com/us/music-video/missin-u/1677017500"
                                    },
                                    {
                                        title: "Should've Been Us",
                                        src: "https://embed.music.apple.com/us/music-video/shouldve-been-us/1445004291"
                                    },
                                    {
                                        title: "things u do",
                                        src: "https://embed.music.apple.com/us/music-video/thing-u-do/1740361970"
                                    },
                                    {
                                        title: "Unbreakable Smile",
                                        src: "https://embed.music.apple.com/us/music-video/unbreakable-smile/1444899798"
                                    },
                                ]
                            },
                            {
                                artist: "Tove Lo",
                                birthday: [{ month: "October", day: 29, year: 1987 }],
                                songs: [ 
                                    {
                                        title: "Borderline",
                                        src: "https://embed.music.apple.com/us/music-video/borderline/1672095828"
                                    },
                                    {
                                        title: "Disco T**s",
                                        src: "https://embed.music.apple.com/us/music-video/disco-t-s/1444613212"
                                    },
                                    {
                                        title: "How Long",
                                        src: "https://embed.music.apple.com/us/music-video/how-long/1609128435"
                                    },
                                    {
                                        title: "No One Dies From Love",
                                        src: "https://embed.music.apple.com/us/music-video/no-one-dies-from-love/1707069832"
                                    },
                                    {
                                        title: "Sweettalk my Heart",
                                        src: "https://embed.music.apple.com/us/music-video/sweettalk-my-heart/1480599380"
                                    },
                                ]
                            },
                                    {
                                        artist: "Tove Lo & SG Lewis",
                                        birthday: [{ month: "October", day: 29, year: 1987 },{ month: "July", day: 9, year: 1994 }],
                                        songs: [ 
                                    {
                                        title: "Pineapple Slice (with SG Lewis) [Scene 9]",
                                        src: "https://embed.music.apple.com/us/music-video/pineapple-slice-with-sg-lewis-scene-9/1707063264"
                                    },
                                ]
                            },
                            {
                                artist: "Travis Scott",
                                birthday: [{ month: "April", day: 30, year: 1991 }],
                                songs: [ 
                                    {
                                        title: "I KNOW ?",
                                        src: "https://embed.music.apple.com/us/music-video/i-know/1727028498"
                                    },
                                    {
                                        title: "TOPIA TWINS (feat. Rob49 & 21 Savage)",
                                        src: "https://embed.music.apple.com/us/music-video/topia-twins-feat-rob49-21-savage/1724410874"
                                    },
                                ]
                            },
                            {
                                artist: "Trey Songz",
                                birthday: [{ month: "November", day: 28, year: 1984 }],
                                songs: [ 
                                    {
                                        title: "About You",
                                        src: "https://embed.music.apple.com/us/music-video/about-you/1044464531"
                                    },
                                    {
                                        title: "Animal",
                                        src: "https://embed.music.apple.com/us/music-video/animal/1215352417"
                                    },
                                    {
                                        title: "Change Your Mind",
                                        src: "https://embed.music.apple.com/us/music-video/change-your-mind/908329186"
                                    },
                                    {
                                        title: "Foreign",
                                        src: "https://embed.music.apple.com/us/music-video/foreign/930734403"
                                    },
                                    {
                                        title: "Hail Mary (feat. Young Jeezy & Lil Wayne)",
                                        src: "https://embed.music.apple.com/us/music-video/hail-mary-feat-young-jeezy-lil-wayne/568534480"
                                    },
                                    {
                                        title: "Heart Attack",
                                        src: "https://embed.music.apple.com/us/music-video/heart-attack/547979782"
                                    },
                                    {
                                        title: "I Invented Sex",
                                        src: "https://embed.music.apple.com/us/music-video/i-invented-sex/342565669"
                                    },
                                {
                                            title: "I Need a Girl",
                                            src: "https://embed.music.apple.com/us/music-video/i-need-a-girl/328449825"
                                        },
                                        {
                                            title: "Love Faces",
                                            src: "https://embed.music.apple.com/us/music-video/love-faces/427453687"
                                        },
                                        {
                                            title: "Na Na",
                                            src: "https://embed.music.apple.com/us/music-video/na-na/843919701"
                                        },
                                        {
                                            title: "Neighbors Know My Name",
                                            src: "https://embed.music.apple.com/us/music-video/neighbors-know-my-name/362111042"
                                        },
                                        {
                                            title: "Playboy",
                                            src: "https://embed.music.apple.com/us/music-video/playboy/1208196165"
                                        },
                                        {
                                            title: "She Lovin It",
                                            src: "https://embed.music.apple.com/us/music-video/she-lovin-it/1214071284"
                                        },
                                        {
                                            title: "Simply Amazing",
                                            src: "https://embed.music.apple.com/us/music-video/simply-amazing/551151528"
                                        },
                                        {
                                            title: "Slow Motion",
                                            src: "https://embed.music.apple.com/us/music-video/slow-motion/977783671"
                                        },
                                        {
                                            title: "Song Goes Off!",
                                            src: "https://embed.music.apple.com/us/music-video/song-goes-off/1210443499"
                                        },
                                        {
                                            title: "Top of the World",
                                            src: "https://embed.music.apple.com/us/music-video/top-of-the-world/480842318"
                                        },
                                        {
                                            title: "Touchin, Lovin (feat. Nicki Minaj)",
                                            src: "https://embed.music.apple.com/us/music-video/touchin-lovin-feat-nicki-minaj/997907668"
                                        },
                                        {
                                            title: "2 Reasons (feat. T.I.)",
                                            src: "https://embed.music.apple.com/us/music-video/2-reasons-feat-t-i/547979783"
                                        },
                                    ]
                                },
                                {
                                    artist: "Trina",
                                    birthday: [{ month: "December", day: 3, year: 1978 }],
                                    songs: [ 
                                        {
                                            title: "Don't Trip (Edited Version) [With Club Went Crazy Outro]",
                                            src: "https://embed.music.apple.com/us/music-video/dont-trip-edited-version-with-club-went-crazy-outro/278187196"
                                        },
                                    ]
                                },
                                {
                                    artist: "Tujamo, Azteck & Inna",
                                    songs: [ 
                                        {
                                            title: "Freak",
                                            src: "https://embed.music.apple.com/us/music-video/freak/1702063025"
                                        },
                                    ]
                                },
                                {
                                    artist: "Twista",
                                    birthday: [{ month: "November", day: 27, year: 1973 }],
                                    songs: [ 
                                        {
                                            title: "Bad Girl (feat. Lloyd)",
                                            src: "https://embed.music.apple.com/us/music-video/bad-girl-feat-lloyd/1310269301"
                                        },
                                        {
                                            title: "Birthday",
                                            src: "https://embed.music.apple.com/us/music-video/birthday/1309688365"
                                        },
                                        {
                                            title: "Overnight Celebrity",
                                            src: "https://embed.music.apple.com/us/music-video/overnight-celebrity/1533480830"
                                        },
                                    ]
                                },
                                {
                                    artist: "Ty Dolla $ign",
                                    birthday: [{ month: "April", day: 13, year: 1982 }],
                                    songs: [ 
                                        {
                                            title: "Drop That Kitty (feat. Charli XCX & Tinashe)",
                                            src: "https://embed.music.apple.com/us/music-video/drop-that-kitty-feat-charli-xcx-tinashe/990745389"
                                        },
                                    ]
                                },
                                {
                                    artist: "Tyga",
                                    birthday: [{ month: "November", day: 19, year: 1989 }],
                                    songs: [ 
                                        {
                                            title: "Booty Dancer",
                                            src: "https://embed.music.apple.com/us/music-video/booty-dancer/1648839488"
                                        },
                                        {
                                            title: "Fantastic",
                                            src: "https://embed.music.apple.com/us/music-video/fantastic/1643019170"
                                        },
                                        {
                                            title: "Girls Have Fun (feat. Rich The Kid & G-Eazy)",
                                            src: "https://embed.music.apple.com/us/music-video/girls-have-fun-feat-rich-the-kid-g-eazy/1452941969"
                                        },
                                        {
                                            title: "Stimulated",
                                            src: "https://embed.music.apple.com/us/music-video/stimulated/1134680286"
                                        },
                                        {
                                            title: "Taste",
                                            src: "https://embed.music.apple.com/us/music-video/taste/1413543728"
                                        },
                                        {
                                            title: "Mmphh",
                                            src: "https://embed.music.apple.com/us/music-video/mmphh/1779822091"
                                        },
                                    ]
                                },
                                {
                                    artist: "Tyga & Doja Cat",
                                    birthday: [{ month: "November", day: 19, year: 1989 },{ month: "October", day: 21, year: 1995 }],
                                    songs: [ 
                                        {
                                            title: "Freaky Deaky",
                                            src: "https://embed.music.apple.com/us/music-video/freaky-deaky/1611437946"
                                        },
                                    ]
                                },
                                {
                                    artist: "Tyga & Megan Thee Stallion",
                                    birthday: [{ month: "November", day: 19, year: 1989 },{ month: "February", day: 15, year: 1995 }],
                                    songs: [ 
                                        {
                                            title: "FREAK",
                                            src: "https://embed.music.apple.com/us/music-video/freak/1502628195"
                                        },
                                    ]
                                },
                                {
                                    artist: "Tyga, YG & Lil Wayne",
                                    birthday: [{ month: "November", day: 19, year: 1989 },{ month: "March", day: 9, year: 1990 },{ month: "September", day: 27, year: 1982 }],
                                    songs: [ 
                                        {
                                            title: "Brand New",
                                            src: "https://embed.music.apple.com/us/music-video/brand-new/1709364725"
                                        },
                                    ]
                                },
                                {
                                    artist: "Tyga, YG & Santana",
                                    songs: [ 
                                        {
                                            title: "MAMACITA",
                                            src: "https://embed.music.apple.com/us/music-video/mamacita/1484543442"
                                        },
                                    ]
                                },
                                {
                                    artist: "Tyla",
                                    birthday: [{ month: "January", day: 30, year: 2002 }],
                                    songs: [ 
                                        {
                                            title: "ART",
                                            src: "https://embed.music.apple.com/us/music-video/art/1737318109"
                                        },
                                        {
                                            title: "Breathe Me",
                                            src: "https://embed.music.apple.com/us/music-video/breathe-me/1766388622"
                                        },
                                        {
                                            title: "Water",
                                            src: "https://embed.music.apple.com/us/music-video/water/1710629437"
                                        },
                                        {
                                            title: "PUSH 2 START",
                                            src: "https://embed.music.apple.com/us/music-video/push-2-start/1778531805"
                                        },
                                    ]
                                },
                                {
                                    artist: "Tyla & Travis Scott",
                                    birthday: [{ month: "January", day: 30, year: 2002 },{ month: "April", day: 30, year: 1991 }],
                                    songs: [ 
                                        {
                                            title: "Water (Remix)",
                                            src: "https://embed.music.apple.com/us/music-video/water-remix/1736814625"
                                        },
                                    ]
                                },
                                {
                                    artist: "Tyla, Gunna & Skillibeng",
                                    birthday: [{ month: "January", day: 30, year: 2002 },{ month: "June", day: 14, year: 1993 },{ month: "December", day: 23, year: 1996 }],
                                    songs: [ 
                                        {
                                            title: "Jump",
                                            src: "https://embed.music.apple.com/us/music-video/jump/1747256670"
                                        },
                                    ]
                                },
                                {
                                    artist: "Tyrese",
                                    birthday: [{ month: "December", day: 30, year: 1978 }],
                                    songs: [ 
                                        {
                                            title: "Sweet Lady",
                                            src: "https://embed.music.apple.com/us/music-video/sweet-lady/1369387757"
                                        },
                                    ]
                                },
                                {
                                    artist: "UPSAHL",
                                    birthday: [{ month: "November", day: 28, year: 1998 }],
                                    songs: [ 
                                        {
                                            title: "STOP!",
                                            src: "https://embed.music.apple.com/us/music-video/stop/1553173850"
                                        },
                                    ]
                                },
                                {
                                    artist: "USHER",
                                    birthday: [{ month: "October", day: 14, year: 1978 }],
                                    songs: [ 
                                        {
                                            title: "DJ Got Us Fallin' In Love (feat. Pitbull)",
                                            src: "https://embed.music.apple.com/us/music-video/dj-got-us-fallin-in-love-feat-pitbull/389620237"
                                        },
                                        {
                                            title: "Hey Daddy (Daddy's Home) [feat. Plies]",
                                            src: "https://embed.music.apple.com/us/music-video/hey-daddy-daddys-home-feat-plies/353010798"
                                        },
                                 {
                                            title: "Lemme See (feat. Rick Ross)",
                                            src: "https://embed.music.apple.com/us/music-video/lemme-see-feat-rick-ross/536354389"
                                        },
                                        {
                                            title: "My Boo (feat. Alicia Keys)",
                                            src: "https://embed.music.apple.com/us/music-video/my-boo-feat-alicia-keys/313878172"
                                        },
                                        {
                                            title: "Nice & Slow",
                                            src: "https://embed.music.apple.com/us/music-video/nice-slow/279017830"
                                        },
                                        {
                                            title: "Super Bowl LVIII Halftime Show (Live)",
                                            src: "https://embed.music.apple.com/us/music-video/super-bowl-lviii-halftime-show-live/1730428556"
                                        },
                                        {
                                            title: "U Don't Have to Call",
                                            src: "https://embed.music.apple.com/us/music-video/u-dont-have-to-call/548916411"
                                        },
                                        {
                                            title: "Yeah! (feat. Lil Jon & Ludacris)",
                                            src: "https://embed.music.apple.com/us/music-video/yeah-feat-lil-jon-ludacris/1279672787"
                                        },
                                    ]
                                },
                                {
                                    artist: "Velous, Fabolous & Chris Brown",
                                    songs: [ 
                                        {
                                            title: "Flipmode",
                                            src: "https://embed.music.apple.com/us/music-video/flipmode/1444999954"
                                        },
                                    ]
                                },
                                {
                                    artist: "Whitney Houston",
                                    birthday: [{ month: "August", day: 9, year: 1963 }],
                                    songs: [ 
                                        {
                                            title: "I Wanna Dance with Somebody",
                                            src: "https://embed.music.apple.com/us/music-video/i-wanna-dance-with-somebody/278338689"
                                        },
                                    ]
                                },
                                {
                                    artist: "Whitney Houston & Jordin Sparks",
                                    birthday: [{ month: "August", day: 9, year: 1963 },{ month: "December", day: 22, year: 1989 }],
                                    songs: [ 
                                        {
                                            title: "Celebrate (From 'Sparkle')",
                                            src: "https://embed.music.apple.com/us/music-video/celebrate-from-sparkle/1281289589"
                                        },
                                    ]
                                },
                                {
                                    artist: "will.i.am",
                                    birthday: [{ month: "March", day: 15, year: 1975 }],
                                    songs: [ 
                                        {
                                            title: "Feelin' Myself (feat. Miley Cyrus, Wiz Khalifa & French Montana)",
                                            src: "https://embed.music.apple.com/us/music-video/feelin-myself-feat-miley-cyrus-wiz-khalifa-french-montana/1445061047"
                                        },
                                    ]
                                },
                                {
                                    artist: "Wiz Khalifa",
                                    birthday: [{ month: "September", day: 8, year: 1987 }],
                                    songs: [ 
                                        {
                                            title: "Black and Yellow",
                                            src: "https://embed.music.apple.com/us/music-video/black-and-yellow/426754430"
                                        },
                                        {
                                            title: "King of Everything",
                                            src: "https://embed.music.apple.com/us/music-video/king-of-everything/1081219003"
                                        },
                                        {
                                            title: "Roll Up",
                                            src: "https://embed.music.apple.com/us/music-video/roll-up/426663112"
                                        },
                                        {
                                            title: "Work Hard, Play Hard",
                                            src: "https://embed.music.apple.com/us/music-video/work-hard-play-hard/562648533"
                                        },
                                    ]
                                },
                                {
                                    artist: "Wizkid",
                                    birthday: [{ month: "July", day: 16, year: 1990 }],
                                    songs: [ 
                                        {
                                            title: "Piece of My Heart (feat. Brent Faiyaz)",
                                            src: "https://embed.music.apple.com/us/music-video/piece-of-my-heart-feat-brent-faiyaz/1774530039"
                                        },
                                    ]
                                },
                                {
                                    artist: "Wu-Tang Clan",
                                    songs: [ 
                                        {
                                            title: "C.R.E.A.M.",
                                            src: "https://embed.music.apple.com/us/music-video/c-r-e-a-m/1366602298"
                                        },
                                        {
                                            title: "Gravel Pit",
                                            src: "https://embed.music.apple.com/us/music-video/gravel-pit/602342018"
                                        },
                                    ]
                                },
                                {
                                    artist: "XG",
                                    birthday: [{ month: "January", day: 17, year: 2002 },{ month: "June", day: 11, year: 2002 },{ month: "June", day: 19, year: 2002 },{ month: "December", day: 18, year: 2002 },{ month: "November", day: 28, year: 2004 },{ month: "August", day: 10, year: 2005 },{ month: "December", day: 6, year: 2005 }],
                                    songs: [ 
                                        {
                                            title: "HOWLING",
                                            src: "https://embed.music.apple.com/us/music-video/howling/1779006172"
                                        },
                                    ]
                                },
                                {
                                    artist: "YG",
                                    birthday: [{ month: "March", day: 9, year: 1990 }],
                                    songs: [ 
                                        {
                                            title: "Go Loko (feat. Tyga & Jon Z)",
                                            src: "https://embed.music.apple.com/us/music-video/go-loko-feat-tyga-jon-z/1461926431"
                                        },
                                        {
                                            title: "My N***a (feat. Lil Wayne, Rich Homie Quan, Meek Mill & Nicki Minaj) [Remix]",
                                            src: "https://embed.music.apple.com/us/music-video/my-n-a-feat-lil-wayne-rich-homie-quan-meek-mill/1561876367"
                                        },
                                        {
                                            title: "Who Do You Love? (feat. Drake)",
                                            src: "https://embed.music.apple.com/us/music-video/who-do-you-love-feat-drake/1444343797"
                                        },
                                    ]
                                },
                                {
                                    artist: "Ying Yang Twins",
                                    songs: [ 
                                        {
                                            title: "Wait (The Whisper Song)",
                                            src: "https://embed.music.apple.com/us/music-video/wait-the-whisper-song/299412103"
                                        },
                                    ]
                                },
                                {
                                    artist: "Yo Gotti",
                                    birthday: [{ month: "May", day: 19, year: 1981 }],
                                    songs: [ 
                                        {
                                            title: "Act Right (feat. Jeezy & YG)",
                                            src: "https://embed.music.apple.com/us/music-video/act-right-feat-jeezy-yg/675680225"
                                        },
                                        {
                                            title: "Drop (feat. DaBaby)",
                                            src: "https://embed.music.apple.com/us/music-video/drop-feat-dababy/1571422048"
                                        },
                                        {
                                            title: "Juice",
                                            src: "https://embed.music.apple.com/us/music-video/juice/1318272159"
                                        },
                                        {
                                            title: "No Fake Love",
                                            src: "https://embed.music.apple.com/us/music-video/no-fake-love/1699375103"
                                        },
                                        {
                                            title: "The One",
                                            src: "https://embed.music.apple.com/us/music-video/the-one/1701009897"
                                        },
                                        {
                                            title: "Rake It Up (feat. Nicki Minaj)", 
                                            src: "https://embed.music.apple.com/us/music-video/rake-it-up-feat-nicki-minaj/1274617514"
                                        },
                                        {
                                            title: "Rihanna (feat. Young Thug)",
                                            src: "https://embed.music.apple.com/us/music-video/rihanna-feat-young-thug/1025134480"
                                        },
                                    ]
                                },
                                {
                                    artist: "Young Buck",
                                    birthday: [{ month: "March", day: 15, year: 1981 }],
                                    songs: [ 
                                        {
                                            title: "Get Buck",
                                            src: "https://embed.music.apple.com/us/music-video/get-buck/1445850182"
                                        },
                                        {
                                            title: "Shorty Wanna Ride",
                                            src: "https://embed.music.apple.com/us/music-video/shorty-wanna-ride/1445837511"
                                        },
                                    ]
                                },
                                {
                                    artist: "Young Jeezy",
                                    birthday: [{ month: "September", day: 28, year: 1977 }],
                                    songs: [
                        {
                            title: "Back (feat. Yo Gotti)",
                            src: "https://embed.music.apple.com/us/music-video/back-feat-yo-gotti/1537381386"
                        },
                        {
                            title: "OJ (feat. Fabolous & Jadakiss)",
                            src: "https://embed.music.apple.com/us/music-video/oj-feat-fabolous-jadakiss/1445707007"
                        },
                                    ]
                                },
                                {
                                    artist: "Young Money",
                                    songs: [ 
                                        {
                                            title: "Bed Rock",
                                            src: "https://embed.music.apple.com/us/music-video/bed-rock/1445854589"
                                        },
                                        {
                                            title: "Every Girl",
                                            src: "https://embed.music.apple.com/us/music-video/every-girl/1445874109"
                                        },
                                        {
                                            title: "Roger That",
                                            src: "https://embed.music.apple.com/us/music-video/roger-that/1445827215"
                                        },
                                    ]
                                },
                                {
                                    artist: "Yung Bleu",
                                    birthday: [{ month: "April", day: 4, year: 1994 }],
                                    songs: [ 
                                        {
                                            title: "Confirmation (Remix) [feat. Lil Wayne]",
                                            src: "https://embed.music.apple.com/us/music-video/confirmation-remix-feat-lil-wayne/1740883502"
                                        },
                                    ]
                                },
                                {
                                    artist: "Yung Bleu, Chris Brown & 2 Chainz",
                                    birthday: [{ month: "April", day: 4, year: 1994 },{ month: "May", day: 5, year: 1989 },{ month: "September", day: 12, year: 1977 }],
                                    songs: [ 
                                        {
                                            title: "Baddest",
                                            src: "https://embed.music.apple.com/us/music-video/baddest/1575637463"
                                        },
                                    ]
                                },
                                {
                                    artist: "Zara Larsson",
                                    birthday: [{ month: "December", day: 16, year: 1997 }],
                                    songs: [ 
                                        {
                                            title: "Ain't My Fault",
                                            src: "https://embed.music.apple.com/us/music-video/aint-my-fault/1160438693"
                                        },
                                        {
                                            title: "All the Time",
                                            src: "https://embed.music.apple.com/us/music-video/all-the-time/1469562506"
                                        },
                                        {
                                            title: "Can't Tame Her (Official Music Video)",
                                            src: "https://embed.music.apple.com/us/music-video/cant-tame-her/1667671868"
                                        },
                                        {
                                            title: "Carry You Home",
                                            src: "https://embed.music.apple.com/us/music-video/carry-you-home/1538402700"
                                        },
                                        {
                                            title: "End Of Time (Official Music Video)",
                                            src: "https://embed.music.apple.com/us/music-video/end-of-time-official-music-video/1688287993"
                                        },
                                        {
                                            title: "Invisible (from the Netflix Film Klaus)",
                                            src: "https://embed.music.apple.com/us/music-video/invisible-from-the-netflix-film-klaus/1488037568"
                                        },
                                        {
                                            title: "Love Me Land",
                                            src: "https://embed.music.apple.com/us/music-video/love-me-land/1522533621"
                                        },
                                        {
                                            title: "Lush Life",
                                            src: "https://embed.music.apple.com/us/music-video/lush-life/1130027642"
                                        },
                                        {
                                            title: "Rooftop",
                                            src: "https://embed.music.apple.com/us/music-video/rooftop/926748741"
                                        },
                                        {
                                            title: "Ruin My Life",
                                            src: "https://embed.music.apple.com/us/music-video/ruin-my-life/1439865720"
                                        },
                                        {
                                            title: "So Good (feat. Ty Dolla $ign)",
                                            src: "https://embed.music.apple.com/us/music-video/so-good-feat-ty-dolla-%24ign/1201940698"
                                        },
                                        {
                                            title: "You Love Who You Love",
                                            src: "https://embed.music.apple.com/us/music-video/you-love-who-you-love/1729450703"
                                        },
                                    ]
                                },
                                {
                                    artist: "Zara Larsson & David Guetta",
                                    birthday: [{ month: "December", day: 16, year: 1997 },{ month: "November", day: 7, year: 1967 }],
                                    songs: [ 
                                        {
                                            title: "On My Love",
                                            src: "https://embed.music.apple.com/us/music-video/on-my-love/1707089724"
                                        },
                                    ]
                                },
                                {
                                    artist: "070 Shake",
                                    birthday: [{ month: "June", day: 13, year: 1997 }],
                                    songs: [ 
                                        {
                                            title: "Winter Baby / New Jersey Blues",
                                            src: "https://embed.music.apple.com/us/music-video/winter-baby-new-jersey-blues/1772887065"
                                        },
                                    ]
                                },
                                {
                                    artist: "2 Chainz",
                                    birthday: [{ month: "September", day: 12, year: 1977 }],
                                    songs: [ 
                                        {
                                            title: "Birthday Song (feat. Kanye West)",
                                            src: "https://embed.music.apple.com/us/music-video/birthday-song-feat-kanye-west/1445847213"
                                        },
                                        {
                                            title: "I Luv Dem Strippers (feat. Nicki Minaj)",
                                            src: "https://embed.music.apple.com/us/music-video/i-luv-dem-strippers-feat-nicki-minaj/1445851493"
                                        },
                                        {
                                            title: "I'm Different",
                                            src: "https://embed.music.apple.com/us/music-video/im-different/1444877146"
                                        },
                                        {
                                            title: "Money Maker (feat. Lil Wayne)",
                                            src: "https://embed.music.apple.com/us/music-video/money-maker-feat-lil-wayne/1540063054"
                                        },
                                        {
                                            title: "No Lie (feat. Drake)",
                                            src: "https://embed.music.apple.com/us/music-video/no-lie-feat-drake/1445829400"
                                        },
                                    ]
                                },
                                {
                                    artist: "2 Chainz, Lil Wayne & USHER",
                                    birthday: [{ month: "September", day: 12, year: 1977 },{ month: "September", day: 27, year: 1982 },{ month: "October", day: 14, year: 1978 }],
                                    songs: [ 
                                        {
                                            title: "Transparency",
                                            src: "https://embed.music.apple.com/us/music-video/transparency/1716804527"
                                        },
                                    ]
                                },
                                {
                                    artist: "2Pac",
                                    birthday: [{ month: "June", day: 16, year: 1971 }],
                                    songs: [ 
                                        {
                                            title: "Brenda's Got a Baby",
                                            src: "https://embed.music.apple.com/us/music-video/brendas-got-a-baby/1445838964"
                                        },
                                        {
                                            title: "Hit 'Em Up (Live) [feat. Outlawz]",
                                            src: "https://embed.music.apple.com/us/music-video/hit-em-up-live-feat-outlawz/382586539"
                                        },
                                        {
                                            title: "I Get Around",
                                            src: "https://embed.music.apple.com/us/music-video/i-get-around/1445837366"
                                        },
                                    ]
                                },
                                {
                                    artist: "21 Savage",
                                    birthday: [{ month: "October", day: 22, year: 1992 }],
                                    songs: [ 
                                        {
                                            title: "redrum",
                                            src: "https://embed.music.apple.com/us/music-video/redrum/1726276331"
                                        },
                                    ]
                                },
                                {
                                    artist: "4batz & Lil Baby",
                                    birthday: [{ month: "November", day: 5, year: 2003 },{ month: "December", day: 3, year: 1994 }],
                                    songs: [ 
                                        {
                                            title: "roll da dice",
                                            src: "https://embed.music.apple.com/us/music-video/roll-da-dice/1770533767"
                                        },
                                    ]
                                },
                                {
                                    artist: "50 Cent",
                                    birthday: [{ month: "July", day: 6, year: 1975 }],
                                    songs: [ 
                                        {
                                            title: "I Get Money (Edited Version)",
                                            src: "https://embed.music.apple.com/us/music-video/i-get-money-edited-version/1445849542"
                                        },
                                        {
                                            title: "I'm the Man (feat. Chris Brown) [Remix]",
                                            src: "https://embed.music.apple.com/us/music-video/im-the-man-feat-chris-brown-remix/1444869221"
                                        },
                                        {
                                            title: "in da Club (Edited Version)",
                                            src: "https://embed.music.apple.com/us/music-video/in-da-club-edited-version/1445827611"
                                        },
                                        {
                                            title: "in Da Club (International Version) [International Version]",
                                            src: "https://embed.music.apple.com/us/music-video/in-da-club-international-version-international-version/1445848339"
                                        },
                                        {
                                            title: "Just a Lil Bit",
                                            src: "https://embed.music.apple.com/us/music-video/just-a-lil-bit/1445842154"
                                        },
                                        {
                                            title: "Major Distribution (feat. Snoop Dogg & Young Jeezy)",
                                            src: "https://embed.music.apple.com/us/music-video/major-distribution-feat-snoop-dogg-young-jeezy/1444849535"
                                        },
                                        {
                                            title: "OK, You're Right",
                                            src: "https://embed.music.apple.com/us/music-video/ok-youre-right/1446736300"
                                        },
                                        {
                                            title: "P.I.M.P. (feat. Snoop Dogg & G-Unit) [Snoop Dogg Remix]",
                                            src: "https://embed.music.apple.com/us/music-video/p-i-m-p-feat-snoop-dogg-g-unit-snoop-dogg-remix/1446009474"
                                        },
                                        {
                                            title: "Pilot",
                                            src: "https://embed.music.apple.com/us/music-video/pilot/1445316806"
                                        },
                                        {
                                            title: "Wanksta (Alternate Version)",
                                            src: "https://embed.music.apple.com/us/music-video/wanksta-alternate-version/1446008227"
                                        },
                                    ]
                                },
                                {
                                    artist: "50 Cent & Ne-Yo",
                                    birthday: [{ month: "July", day: 6, year: 1975 },{ month: "October", day: 18, year: 1979 }],
                                    songs: [ 
                                        {
                                            title: "Baby By Me (Edited Version)",
                                            src: "https://embed.music.apple.com/us/music-video/baby-by-me-edited-version/1446735071"
                                        },
                                    ]
                                },
                                {
                                    artist: "50 Cent & Olivia",
                                    birthday: [{ month: "July", day: 6, year: 1975 },{ month: "February", day: 15, year: 1981 }],
                                    songs: [ 
                                        {
                                            title: "Candy Shop (Director's Version)",
                                            src: "https://embed.music.apple.com/us/music-video/candy-shop-directors-version/1445737548"
                                        },
                                    ]
                                },
                                {
                                    artist: "50 Cent featuring Nate Dogg",
                                    birthday: [{ month: "July", day: 6, year: 1975 },{ month: "August", day: 19, year: 1969 }],
                                    songs: [ 
                                        {
                                            title: "21 Questions",
                                            src: "https://embed.music.apple.com/us/music-video/21-questions/1445739540"
                                        },
                                    ]
                                },
                            ]
                        
              
                            
                    
  document.getElementById("_id_Good-News").innerHTML = setInterval(() => {

  document.getElementById("_id_Good-News").innerHTML = `${new Date().toLocaleTimeString()}`;
//   appleMusic[Math.floor(Math.random() * appleMusic.length)].artist;
}, 1000);                      
                    



const defaultUrl = appleMusic[0].songs[0].src;
let iframe = document.createElement("iframe");
iframe.className = "random-iframe";
iframe.src = defaultUrl;
iframe.quality = "high";
iframe.allow = "fullscreen; autoplay";
iframe.allowfullscreen = true;
iframe.autoplay = true;
iframe.width = "100%";
iframe.height = "100%";
iframe.referrerPolicy = "strict-origin";
iframe.sandbox = "allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation";
iframe.frameborder = 0;
iframe.framepadding = 0;
iframe.allowtransparency = true;
iframe.title = "Apple Music";
iframe.name = "Apple Music";
iframe.seamless = "seamless";


let Appleiframe = document.getElementById("_id_iframe");
Appleiframe.appendChild(iframe);



let currentUrl = defaultUrl;
let a = 0;
let s = 0;
let autoLoadInterval;



async function AppleMusicForward() {
    if (appleMusic[a].songs.length > s + 1) {
        s++;
        iframe.src = appleMusic[a].songs[s].src; 
    } else if (appleMusic.length > a + 1) {
        s = 0;
        a++;
        iframe.src = appleMusic[a].songs[s].src; 
    } else {
        return;
    }
}

async function AppleMusicBack() {
    if (s > 0) {
        s--;
        fetch(appleMusic[a].songs[s].src);
        iframe.src = appleMusic[a].songs[s].src;
    } else if (a > 0) {
        a--;
        s = appleMusic[a].songs.length - 1;
        iframe.src = appleMusic[a].songs[s].src;
    } else {
        return;
    }
} 



document.getElementById("_id_iframe").addEventListener("click", () => {
    clearInterval(autoLoadInterval);
    iframe.src = appleMusic[a].songs[s].src;
});

document.querySelector("._c_Apple-Music-Video-forward").addEventListener("click", () => {
    clearInterval(autoLoadInterval);
    AppleMusicForward();
});

document.querySelector("._c_Apple-Music-Video-refresh").addEventListener("click", () => {
    clearInterval(autoLoadInterval);
    iframe.src = appleMusic[a].songs[s].src;
});

document.querySelector("._c_Apple-Music-Video-back").addEventListener("click", () => {
    clearInterval(autoLoadInterval);
    AppleMusicBack();
});

const alphabet_number = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".toString().split("");

alphabet_number.forEach(letter => {
    document.querySelector(`._c_Apple-Music-Video-${letter}`).addEventListener("click", () => {
        a = appleMusic.findIndex((item) => item.artist.startsWith(letter));
        s = 0;
        clearInterval(autoLoadInterval);
        iframe.src = appleMusic[a].songs[s].src;
        console.log(iframe.src);
    });
});








////////////////////////////////////////////////////////////////////////////////



///////////////////////

let currentArtistIndex = 0;
let currentSongIndex = 0;

function createDateFromBirthday(birthday) {
    if (!birthday || !birthday.month || !birthday.day || !birthday.year) return null;
    return new Date(birthday.year, new Date(`${birthday.month} 1`).getMonth(), birthday.day);
}

function sortArtistsByUpcomingBirthday(artists) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to the start of the day

    return artists.slice().sort((a, b) => {
        if (!a.birthday || !a.birthday[0]) return 1;
        if (!b.birthday || !b.birthday[0]) return -1;

        const aBirthday = createDateFromBirthday(a.birthday[0]);
        const bBirthday = createDateFromBirthday(b.birthday[0]);

        if (!aBirthday) return 1;
        if (!bBirthday) return -1;

        const aNextBirthday = new Date(today.getFullYear(), aBirthday.getMonth(), aBirthday.getDate());
        const bNextBirthday = new Date(today.getFullYear(), bBirthday.getMonth(), bBirthday.getDate());

        if (aNextBirthday < today) aNextBirthday.setFullYear(today.getFullYear() + 1);
        if (bNextBirthday < today) bNextBirthday.setFullYear(today.getFullYear() + 1);

        return aNextBirthday - bNextBirthday;
    });
}

const sortedAppleMusic = sortArtistsByUpcomingBirthday(appleMusic);


///////////////////////////////////////

function updateIframeSrc() {
    const artist = sortedAppleMusic[currentArtistIndex];
    const song = artist.songs[currentSongIndex];
    iframe.src = song.src;
}


// Start cycling through artists and songs
autoLoadInterval = setInterval(cycleThroughArtists, 3000);

function cycleThroughArtists() {
    currentSongIndex = (currentSongIndex + 1) % sortedAppleMusic[currentArtistIndex].songs.length;
    if (currentSongIndex === 0) {
        currentArtistIndex = (currentArtistIndex + 1) % sortedAppleMusic.length;
    }
    updateIframeSrc();
}

//////////////////////////////////////////////////



// Initial update to include the first item in the list
updateIframeSrc();

//////////////////////////////////////////////

    // Log all birthdays, including artists without birthdays
    sortedAppleMusic.forEach(artist => {
        if (artist.birthday && artist.birthday.length > 0) {
            artist.birthday.forEach(birthday => {
                console.log(`Artist: ${artist.artist}, Birthday: ${birthday.month} ${birthday.day}, ${birthday.year}`);
            });
        } else {
            console.log(`Artist: ${artist.artist}, Birthday: Not available`);
        }
    });


//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE