document.getElementById("_id_Good-News").innerHTML = setInterval(() => {
    document.getElementById("_id_Good-News").innerHTML = new Date().toLocaleTimeString();
}, 1000);


const id_frame = document.getElementById("_id_frame");



 const appleMusic = [
    {
        artist: "A Great Big World & Christina Aguilera",
        songs: [
            {
                title: "Say Something",
                src: "https://embed.music.apple.com/us/music-video/say-something/757359463"
            }
        ]
    },
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
        birthday: [{ month: "January", day: 16, year: 1979 }],
        songs: [
            {
                title: "Rock The Boat",
                src: "https://embed.music.apple.com/us/music-video/rock-the-boat/1585461561"
            },
            {
                title: "Age Ain't Nothing But a Number",
                src: "https://embed.music.apple.com/us/music-video/age-aint-nothing-but-a-number/548917897"
            },
            {
                title: "Hot Like Fire (Timbaland's Groove Mix) [feat. Missy Elliott & Timbaland] [Bonus]",
                src: "https://embed.music.apple.com/us/music-video/hot-like-fire-timbalands-groove-mix-feat-missy-elliott/1786507788"
            },
            {
                title: "Miss You",
                src: "https://embed.music.apple.com/us/music-video/miss-you/1788435862"
            },
            {
                title: "More Than A Woman",
                src: "https://embed.music.apple.com/us/music-video/more-than-a-woman/1585460722"
            },
            {
                title: "Try Again",
                src: "https://embed.music.apple.com/us/music-video/try-again/1780671893"
            },
            {
                title: "Are You That Somebody?",
                src: "https://embed.music.apple.com/us/music-video/are-you-that-somebody/1780672248"
            },
            {
                title: "4 Page Letter",
                src: "https://embed.music.apple.com/us/music-video/4-page-letter/1582104491"
            },
            {
                title: "One In A Million",
                src: "https://embed.music.apple.com/us/music-video/one-in-a-million/1780663858"
            },
            {
                title: "Got To Give It Up (feat. Slick Rick)",
                src: "https://embed.music.apple.com/us/music-video/got-to-give-it-up-feat-slick-rick/1783890277"
            },
            {
                title: "If Your Girl Only Knew",
                src: "https://embed.music.apple.com/us/music-video/if-your-girl-only-knew/1780673048"
            },
            {
                title: "At Your Best (You Are Love)",
                src: "https://embed.music.apple.com/us/music-video/at-your-best-you-are-love/548919461"
            },
        ]
    },
    {
        artist: "ABBA",
        birthday: [{ month: "April", day: 5, year: 1950 }, { month: "April", day: 25, year: 1945 }, { month: "December", day: 16, year: 1946 }, { month: "November", day: 15, year: 1945 }],
        songs: [
            {
                title: "Dancing Queen",
                src: "https://embed.music.apple.com/us/music-video/dancing-queen/1440982435"
            },
        ]
    },
      {
        artist: "Above & Beyond & Justine Suissa",
        songs: [
            {
                title: "Almost Home (Official Music Video)",
                src: "https://embed.music.apple.com/us/music-video/almost-home-official-music-video/1586066415"
            },
        ]
    },
      {
        artist: "Above & Beyond & Zoë Johnston",
        songs: [
            {
                title: "You Got To Go (feat. Zoë Johnston)",
                src: "https://embed.music.apple.com/us/music-video/you-got-to-go-feat-zo%C3%AB-johnston/469578250"
            },
        ]
    },
    {
        artist: "Ace Hood",
        birthday: [{ month: "May", day: 11, year: 1988 }],
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
            },
            {
                title: "High Fashion",
                src: "https://embed.music.apple.com/us/music-video/high-fashion/1795789859"
            },
            {
                title: "Diet Pepsi",
                src: "https://embed.music.apple.com/us/music-video/diet-pepsi/1761887993"
            },
            {
                title: "Obsessed",
                src: "https://embed.music.apple.com/us/music-video/obsessed/1559088980"
            },
             {
                title: "Times Like These",
                src: "https://embed.music.apple.com/us/music-video/times-like-these/1818889182"
            },
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
            },
        ]
    },
    {
        artist: "Afro B",
        songs: [
            {
                title: "Condo (feat. T-Pain)",
                src: "https://embed.music.apple.com/us/music-video/condo-feat-t-pain/1506982614"
            },
        ]
    },
    {
        artist: "Afroman",
        birthday: [{ month: "July", day: 28, year: 1974 }],
        songs: [
            {
                title: "Smoke a Blunt with You (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/smoke-a-blunt-with-you-feat-snoop-dogg/1653004472"
            },
        ]
    },
    {
        artist: "aespa",
        birthday: [{ month: "April", day: 11, year: 2000 }, { month: "October", day: 30, year: 2000 }, { month: "January", day: 1, year: 2001 }, { month: "October", day: 23, year: 2002 }],
        songs: [
            {
                title: "Spicy",
                src: "https://embed.music.apple.com/us/music-video/spicy/1687220466"
            },
            {
                title: "Whiplash",
                src: "https://embed.music.apple.com/us/music-video/whiplash/1775679946"
            },
            {
                title: "Better Things",
                src: "https://embed.music.apple.com/us/music-video/better-things/1702940823"
            },
        ]
    },
    {
        artist: "Aitch & Ashanti",
        birthday: [{ month: "December", day: 9, year: 1999 }, { month: "October", day: 13, year: 1980 }],
        songs: [
            {
                title: "Baby",
                src: "https://embed.music.apple.com/us/music-video/baby/1613513631"
            },
        ]
    },
     {
        artist: "AJ Tracey",
        birthday: [{ month: "March", day: 4, year: 1994 }],
        songs: [
            {
                title: "Summertime Shootout (feat. T-Pain)",
                src: "https://embed.music.apple.com/us/music-video/summertime-shootout-feat-t-pain/1676620843"
            }
        ]
    },
    {
        artist: "Akon",
        birthday: [{ month: "April", day: 16, year: 1973 }],

        songs: [
            {
                title: "Smack That (feat. Eminem)",
                src: "https://embed.music.apple.com/us/music-video/smack-that-feat-eminem/1445893631"
            },
            {
                title: "Akon's Beautiful Day",
                src: "https://embed.music.apple.com/us/music-video/akons-beautiful-day/1771920539"
            },
        ]
    },
     {
        artist: "Akon & Sheesh",
        songs: [
            {
                title: "Ghetto Livin",
                src: "https://embed.music.apple.com/us/music-video/ghetto-livin/1814641152"
            },
        ]
    },
    {
        artist: "Akon & T-Pain",
        birthday: [{ month: "April", day: 16, year: 1973 }, { month: "September", day: 30, year: 1984 }],
        songs: [
            {
                title: "Bartender (feat. Akon)",
                src: "https://embed.music.apple.com/us/music-video/bartender-feat-akon/262804746"
            },
        ]
    },
    {
        artist: "Alabama",
        birthday: [{ month: "January", day: 22, year: 1952 }, { month: "December", day: 13, year: 1949 }],
        songs: [
            {
                title: "God Must Have Spent A Little More Time On You (feat. *NSYNC)",
                src: "https://embed.music.apple.com/us/music-video/god-must-have-spent-a-little-more-time-on-you-feat-nsync/275888624"
            },
        ]
    },
    {
        artist: "Alesso & Katy Perry",
        birthday: [{ month: "July", day: 7, year: 1991 }, { month: "October", day: 25, year: 1984 }],
        songs: [
            {
                title: "When I'm Gone",
                src: "https://embed.music.apple.com/us/music-video/when-im-gone/1603752492"
            },
        ]
    },
    {
        artist: "Alesso & Nate Smith",
        birthday: [{ month: "July", day: 7, year: 1991 }, { month: "September", day: 19, year: 1985 }],
        songs: [
            {
                title: "I Like It",
                src: "https://embed.music.apple.com/us/music-video/i-like-it/1756815859"
            },
        ]
    },
    {
        artist: "Alesso & Zara Larsson",
        birthday: [{ month: "July", day: 7, year: 1991 }, { month: "December", day: 16, year: 1997 }],
        songs: [
            {
                title: "Words",
                src: "https://embed.music.apple.com/us/music-video/words/1620620421"
            },
        ]
    },
    {
        artist: "Alexa Ayaz",
        songs: [
            {
                title: "Hey Danze (feat. Elephant Man)",
                src: "https://embed.music.apple.com/us/music-video/hey-danze-feat-elephant-man/1445019561" 
            },
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
            },
        ]
    },
    {
        artist: "Alexandra Stan & MATTN",
        birthday: [{ month: "June", day: 10, year: 1989 }, { month: "December", day: 18, year: 1992 }],
        songs: [
            {
                title: "Bitch Is Fire",
                src: "https://embed.music.apple.com/us/music-video/bitch-is-fire/1702028112"
            },
        ]
    },
        {
        artist: "Alexcis & T-Pain",
        songs: [
            {
                title: "Until The Day",
                src: "https://embed.music.apple.com/us/music-video/until-the-day/1586400135"
            },
        ]
    },
    {
        artist: "Ali Gatie",
        birthday: [{ month: "May", day: 31, year: 1997 }],
        songs: [
            {
                title: "The Look (feat. Kehlani)",
                src: "https://embed.music.apple.com/us/music-video/the-look-feat-kehlani/1639454694"
            },
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
        artist: "Alok, Sigala & Ellie Goulding",
        birthday: [{ month: "August", day: 26, year: 1991 }, { month: "November", day: 7, year: 1992 }, { month: "December", day: 30, year: 1986 }],
        songs: [
            {
                title: "All By Myself",
                src: "https://embed.music.apple.com/us/music-video/all-by-myself/1665635134"
            },
        ]
    },
    {
        artist: "Alok & Kylie Minogue",
        birthday: [{ month: "August", day: 26, year: 1991 }, { month: "May", day: 28, year: 1968 }],
        songs: [
            {
                title: "last night i dreamt i fell in love",
                src: "https://embed.music.apple.com/us/music-video/last-night-i-dreamt-i-fell-in-love/1797069258"
            },
        ]
    },
    {
        artist: "Alyssa Reid",
        birthday: [{ month: "March", day: 15, year: 1993 }],
        songs: [
            {
                title: "The Game (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/the-game-feat-snoop-dogg/556008261"
            },
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
            {
                title: "Curious",
                src: "https://embed.music.apple.com/us/music-video/curious/1451203974"
            },
            {
                title: "Heard 'Em All (Bonus Video)",
                src: "https://embed.music.apple.com/us/music-video/heard-em-all-bonus-video/1445743836"
            },
            {
                title: "More Than Love",
                src: "https://embed.music.apple.com/us/music-video/more-than-love/1445707382"
            },
            {
                title: "Gotta Work",
                src: "https://embed.music.apple.com/us/music-video/gotta-work/262801933"
            },
            {
                title: "Talkin' to Me",
                src: "https://embed.music.apple.com/us/music-video/talkin-to-me/206814891"
            },
            {
                title: "I'm Coming Out",
                src: "https://embed.music.apple.com/us/music-video/im-coming-out/1380461471"
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
        artist: "Anitta & Missy Elliott",
        birthday: [{ month: "March", day: 30, year: 1993 }, { month: "July", day: 1, year: 1971 }],
        songs: [
            {
                title: "Lobby",
                src: "https://embed.music.apple.com/us/music-video/lobby/1643057462"
            },
        ]
    },
    {
        artist: "Ann Marie",
        birthday: [{ month: "November", day: 20, year: 1995 }],
        songs: [
            {
                title: "Favorite Love Song",
                src: "https://embed.music.apple.com/us/music-video/favorite-love-song/1583808713"
            },
            {
                title: "Yo Body",
                src: "https://embed.music.apple.com/us/music-video/yo-body/1593295959"
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
        artist: "Anthony Lewis",
        songs: [
            {
                title: "It's Not My Fault (feat. T.I.)",
                src: "https://embed.music.apple.com/us/music-video/its-not-my-fault-feat-t-i/1444610500" 
            },
        ]
    },
    {
        artist: "Anthrax & Public Enemy",
        songs: [
            {
                title: "Bring Tha Noize",
                src: "https://embed.music.apple.com/us/music-video/bring-tha-noize/1594273122"
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
             {
                title: "Soft Girl Era",
                src: "https://embed.music.apple.com/us/music-video/soft-girl-era/1810040315"
            },
        ]
    },
       {
        artist: "Ariaa",
        songs: [
            {
                title: "Farsi (feat. T-Pain)",
                src: "https://embed.music.apple.com/us/music-video/farsi-feat-t-pain/1433818007"
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
        artist: "Ariana Grande & Victoria Monét",
        birthday: [{ month: "June", day: 26, year: 1993 }, { month: "May", day: 1, year: 1989 }],
        songs: [

            {
                title: "MONOPOLY",
                src: "https://embed.music.apple.com/us/music-video/monopoly/1458665007"
            },
        ]
    },
    {
        artist: "Arman Cekin",
        songs: [
            {
                title: "California Dreaming (feat. Snoop Dogg & Paul Rey)",
                src: "https://embed.music.apple.com/us/music-video/california-dreaming-feat-snoop-dogg-paul-rey/1206019392"
            },
        ]
    },
      {
        artist: "Armin van Buuren",
        birthday: [{ month: "December", day: 25, year: 1976 }],
        songs: [
            {
                title: "Let It Be For Love (feat. JAI RYU)",
                src: "https://embed.music.apple.com/us/music-video/let-it-be-for-love-feat-jai-ryu/1822949754"
            },
        ]
    },
    {
        artist: "Arrested Development",
        songs: [
            {
                title: "Vibe (feat. Big Daddy Kane, Cleveland P. Jones, Tasha LaRae & Configa)",
                src: "https://embed.music.apple.com/us/music-video/vibe-feat-big-daddy-kane-cleveland-p-jones-tasha-larae/1708092789"
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
            {
                title: "Falling For You",
                src: "https://embed.music.apple.com/us/music-video/falling-for-you/1651983643"
            },
            {
                title: "Never Should Have",
                src: "https://embed.music.apple.com/us/music-video/never-should-have/647715924"
            },
            {
                title: "Only U",
                src: "https://embed.music.apple.com/us/music-video/only-u/1675470503"
            },
            {
                title: "Rock Wit U (Awww Baby)",
                src: "https://embed.music.apple.com/us/music-video/rock-wit-u-awww-baby/1445835051"
            },
        ]
    },
    {
        artist: "Ashanti, Ja Rule, Charli Baltimore & Hussein Fatal",
        birthday: [{ month: "October", day: 13, year: 1980 }, { month: "August", day: 16, year: 1974 }, { month: "April", day: 3, year: 1977 },],
        songs: [
            {
                title: "Rain on Me",
                src: "https://embed.music.apple.com/us/music-video/rain-on-me/1445841190"
            },

        ]
    },
    {
        artist: "Ashanti & Keyshia Cole",
        birthday: [{ month: "October", day: 13, year: 1980 }, { month: "October", day: 15, year: 1981 }],
        songs: [
            {
                title: "Always On Time (Verzuz Live)",
                src: "https://embed.music.apple.com/us/music-video/always-on-time-verzuz-live/1550860369"
            },
            {
                title: "Baby (Verzuz Live)",
                src: "https://embed.music.apple.com/us/music-video/baby-verzuz-live/1550861162"
            },
            {
                title: "Down 4 U (Verzuz Live)",
                src: "https://embed.music.apple.com/us/music-video/down-4-u-verzuz-live/1550861942"
            },
            {
                title: "Foolish (Verzuz Live)",
                src: "https://embed.music.apple.com/us/music-video/foolish-verzuz-live/1550863516"
            },
            {
                title: "Mesmerize (Verzuz Live)",
                src: "https://embed.music.apple.com/us/music-video/mesmerize-verzuz-live/1550865042"
            },
            {
                title: "Rain On Me (Verzuz Live)",
                src: "https://embed.music.apple.com/us/music-video/rain-on-me-verzuz-live/1550866426"
            },
            {
                title: "What's Luv? (Verzuz Live)",
                src: "https://embed.music.apple.com/us/music-video/whats-luv-verzuz-live/1550867871"
            },
        ]
    },
    {
        artist: "Asher Roth & Keri Hilson",
        birthday: [{ month: "August", day: 11, year: 1985 }, { month: "December", day: 5, year: 1982 }],
        songs: [
            {
                title: "She Don't Wanna Man",
                src: "https://embed.music.apple.com/us/music-video/she-dont-wanna-man/1445855285"
            },
        ]
    },
     {
        artist: "Ashlee Keating",
        birthday: [{ month: "September", day: 9, year: 1993 }],
        songs: [
            {
                title: "Saucy",
                src: "https://embed.music.apple.com/us/music-video/saucy/1642430939"
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
        artist: "Austin Millz & Alina Baraz",
        birthday: [{ month: "October", day: 30, year: 1988 }, { month: "September", day: 24, year: 1993 }],   
        songs: [
            {
                title: "Breathless (with Alina Baraz)",
                src: "https://embed.music.apple.com/us/music-video/breathless-with-alina-baraz/1702801664"
            },
        ]
    },
     {
        artist: "Austin Millz & Jozzy",
        birthday: [{ month: "October", day: 30, year: 1988 }, { month: "January", day: 25, year: 1991 }],   
        songs: [
            {
                title: "Need I Say More",
                src: "https://embed.music.apple.com/us/music-video/need-i-say-more/1777128532"
            },
        ]
    },
     {
        artist: "Austin Millz & Justine Skye",
        birthday: [{ month: "October", day: 30, year: 1988 }, { month: "August", day: 24, year: 1995 }],   
        songs: [
            {
                title: "On + On (with Justine Skye)",
                src: "https://embed.music.apple.com/us/music-video/on-on-with-justine-skye/1702803706"
            },
        ]
    },
     {
        artist: "Austin Millz & Sabrina Claudio",
        birthday: [{ month: "October", day: 30, year: 1988 }, { month: "September", day: 19, year: 1996 }],   
        songs: [
            {
                title: "Inhale / Exhale (with Sabrina Claudio)",
                src: "https://embed.music.apple.com/us/music-video/inhale-exhale-with-sabrina-claudio/1675408558"
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
            {
                title: "Lovin Myself",
                src: "https://embed.music.apple.com/us/music-video/lovin-myself/1817722161"
            },
        ]
    },
    {
        artist: "Avila Brothers",
        songs: [
            {
                title: "A Hard Working Man (feat. Billy Ray Cyrus & Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/a-hard-working-man-feat-billy-ray-cyrus-snoop-dogg/1712258885"
            },
        ]
    },
       {
        artist: "Avril Lavigne",
        birthday: [{ month: "September", day: 27, year: 1984 }],
        songs: [
            {
                title: "Young & Dumb (feat. Simple Plan)",
                src: "https://embed.music.apple.com/us/music-video/young-dumb-feat-simple-plan/1813522335"
            },
        ]
    },
    {
        artist: "Aygün Kazımova",
        birthday: [{ month: "January", day: 26, year: 1971 }],
        songs: [
            {
                title: "Coffee from Columbia (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/coffee-from-columbia-feat-snoop-dogg/872202619"
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
            {
                title: "We Still In This Bitch (feat. T.I. & Juicy J)",
                src: "https://embed.music.apple.com/us/music-video/we-still-in-this-bitch-feat-t-i-juicy-j/606562008" 
            },
        ]
    },
    {
        artist: "BABYMONSTER",
        birthday: [{ month: "March", day: 20, year: 2002 }, { month: "August", day: 26, year: 2005 }, { month: "April", day: 17, year: 2006 }, { month: "April", day: 11, year: 2007 }, { month: "October", day: 17, year: 2007 } , { month: "August", day: 14, year: 2008 } , { month: "February", day: 17, year: 2009 }],
        songs: [
            {
                title: "Really Like You",
                src: "https://embed.music.apple.com/us/music-video/really-like-you/1791019849"
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
        artist: "Bankrol Hayden",
        birthdays: [{ month: "September", day: 30, year: 2001 }],
        songs: [
            {
                title: "Whatchu On Today (feat. Polo G)",
                src: "https://embed.music.apple.com/us/music-video/whatchu-on-today-feat-polo-g/1530632674"
            },
        ]
    },
    {
        artist: "Bankroll Freddie & Megan Thee Stallion",
        birthdays: [{ month: "October", day: 15, year: 1994 }, { month: "February", day: 15, year: 1995 }],
        songs: [
            {
                title: "Pop It",
                src: "https://embed.music.apple.com/us/music-video/pop-it/1561635220"
            },
        ]
    },
    {
        artist: "Bankroll Mafia, T.I., Shad Da God, Young Thug & London Jae",
        songs: [
            {
                title: "Out My Face (feat. T.I., Shad Da God, Young Thug & London Jae)",
                src: "https://embed.music.apple.com/us/music-video/out-my-face-feat-t-i-shad-da-god-young-thug-london-jae/1101541887" 
            },
        ]
    },
    {
        artist: "Bas & J. Cole",
        birthdays: [{ month: "May", day: 27, year: 1987 }, { month: "January", day: 28, year: 1985 }],
        songs: [
            {
                title: "Passport Bros",
                src: "https://embed.music.apple.com/us/music-video/passport-bros/1698321197"
            },
            {
                title: "The Jackie (feat. Lil Tjay)",
                src: "https://embed.music.apple.com/us/music-video/the-jackie-feat-lil-tjay/1574968972"
            },
        ]
    },
      {
        artist: "BENEE",
        birthday: [{ month: "January", day: 30, year: 2000 }],
        songs: [
            {
                title: "Off The Rails",
                src: "https://embed.music.apple.com/us/music-video/off-the-rails/1822337460"
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
        birthday: [{ month: "February", day: 7, year: 1999 }, { month: "June", day: 24, year: 1992 }],
        songs: [
            {
                title: "it's not u it's me",
                src: "https://embed.music.apple.com/us/music-video/its-not-u-its-me/1458911230"
            },
        ]
    },
    {
        artist: "Beanie Sigel & Eve",
        birthday: [{ month: "March", day: 6, year: 1974 }, { month: "November", day: 10, year: 1978 }],
        songs: [
            {
                title: "Remember Them Days",
                src: "https://embed.music.apple.com/us/music-video/remember-them-days/1445834771"
            },
        ]
    },
    {
        artist: "Ben Rector",
        birthday: [{ month: "November", day: 6, year: 1986 }],
        songs: [
            {
                title: "Sunday (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/sunday-feat-snoop-dogg/1621540444"
            },
        ]
    },
    {
        artist: "Benny Benassi & Public Enemy",
        songs: [
            {
                title: "Bring the Noise (Remix)",
                src: "https://embed.music.apple.com/us/music-video/bring-the-noise-remix/315248410"
            },
        ]
    },
       {
        artist: "Benny the Butcher",
        songs: [
            {
                title: "Summer '25",
                src: "https://embed.music.apple.com/us/music-video/summer-25/1823554408"
            },
        ]
    },
    {
        artist: "Benny the Butcher & Snoop Dogg",
        songs: [
            {
                title: "Back Again",
                src: "https://embed.music.apple.com/us/music-video/back-again/1727635019"
            },
        ]
    },
    {
        artist: "Benson Boone",
        birthday: [{ month: "June", day: 25, year: 2002 }],
        songs: [
            {
                title: "Beautiful Things",
                src: "https://embed.music.apple.com/us/music-video/beautiful-things/1726561628"
            },
            {
                title: "Momma Song",
                src: "https://embed.music.apple.com/us/music-video/momma-song/1815401753"
            },
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
        birthday: [{ month: "August", day: 30, year: 1989 }, { month: "November", day: 7, year: 1967 }],
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
        birthday: [{ month: "March", day: 2, year: 1997 }, { month: "December", day: 10, year: 1986 }],
        songs: [
            {
                title: "Sin Pijama",
                src: "https://embed.music.apple.com/us/music-video/sin-pijama/1374667561"
            }
        ]
    },
    {
        artist: "Beenie Man",
        birthday: [{ month: "August", day: 22, year: 1973 },],
        songs: [

            {
                title: "Girls Dem Sugar (feat. Mýa)",
                src: "https://embed.music.apple.com/us/music-video/girls-dem-sugar-feat-m%C3%BDa/1655407461"
            },
        ]
    },
    {
        artist: "Beenie Man, Ms. Thing & Shawna",
        birthday: [{ month: "August", day: 22, year: 1973 }, { month: "September", day: 15, year: 1986 }, { month: "April", day: 9, year: 1978 }],
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
        artist: "Belly",
        songs: [
            {
                title: "Trap Phone (feat. Jadakiss)",
                src: "https://embed.music.apple.com/us/music-video/trap-phone-feat-jadakiss/1444611199"
            },
        ]
    },
    {
        artist: "Belly & The Weeknd",
        songs: [
            {
                title: "Die For It (feat. Nas)",
                src: "https://embed.music.apple.com/us/music-video/die-for-it-feat-nas/1581054744"
            },
        ]
    },
    {
        artist: "Berner",
        songs: [
            {
                title: "La Plaza (feat. Wiz Khalifa & Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/la-plaza-feat-wiz-khalifa-snoop-dogg/1794594076"
            },
            {
                title: "Best Thang Smokin (feat. B-Real, Wiz Khalifa & Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/best-thang-smokin-feat-b-real-wiz-khalifa-snoop-dogg/1794392935"
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
        birthday: [{ month: "September", day: 4, year: 1981 }, { month: "December", day: 4, year: 1969 }],
        songs: [
            {
                title: 'Crazy in Love',
                src: 'https://embed.music.apple.com/us/music-video/crazy-in-love/980687544'
            },
        ]
    },
    {
        artist: "Beyoncé, Blue Ivy, SAINt JHN & WizKid",
        birthday: [{ month: "September", day: 4, year: 1981 }, { month: "January", day: 7, year: 2012 }, { month: "August", day: 26, year: 1986 }, { month: "July", day: 16, year: 1990 }],
        songs: [
            {
                title: 'Brown Skin Girl',
                src: 'https://embed.music.apple.com/us/music-video/brown-skin-girl/1528922670'
            },
        ]
    },
    {
        artist: "Beyoncé, JAY Z & Childish Gambino",
        birthday: [{ month: "September", day: 4, year: 1981 }, { month: "September", day: 25, year: 1983 }],
        songs: [
            {
                title: 'MOOD 4 EVA (feat. Oumou Sangaré)',
                src: 'https://embed.music.apple.com/us/music-video/mood-4-eva-feat-oumou-sangar%C3%A9/1579578153'
            },
        ]
    },
    {
        artist: "Beyoncé, Mary J. Blige, Rihanna, Fergie, Natasha Bedingfield, Miley Cyrus, Leona Lewis, Carrie Underwood, Keyshia Cole, Ashanti, Ciara, Nicole Scherzinger & Mariah Carey",
        songs: [
            {
                title: 'Just Stand Up! (Just Stand Up Live: A Benefit for Stand Up to Cancer)',
                src: "https://embed.music.apple.com/us/music-video/just-stand-up-just-stand-up-live-a-benefit-for/1445842350"
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
        artist: "BJ the Chicago Kid & Coco Jones",
        birthday: [{ month: "November", day: 23, year: 1984 }, { month: "January", day: 4, year: 1998 }],
        songs: [
            {
                title: "Spend The Night",
                src: "https://embed.music.apple.com/us/music-video/spend-the-night/1711821990"
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
            {
                title: 'Get Like Me (feat. NLE Choppa)',
                src: "https://embed.music.apple.com/us/music-video/get-like-me-feat-nle-choppa/1470208939"
            },
            {
                title: 'Babyface Savage (feat. Tory Lanez)',
                src: "https://embed.music.apple.com/us/music-video/babyface-savage-feat-tory-lanez/1449578410"
            },
            {
                title: 'Juice (feat. YG)',
                src: "https://embed.music.apple.com/us/music-video/juice-feat-yg/1440058835"
            },
            {
                title: "Geek'd (feat. Lil Baby)",
                src: "https://embed.music.apple.com/us/music-video/geekd-feat-lil-baby/1437159745"
            },
            {
                title: "Mama Don't Worry (Still Ain't Dirty)",
                src: "https://embed.music.apple.com/us/music-video/mama-dont-worry-still-aint-dirty/1333299667"
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
        birthday: [{ month: "August", day: 16, year: 1991 }, { month: "October", day: 31, year: 1990 }],
        songs: [
            {
                title: 'LIGHTS OUT',
                src: 'https://embed.music.apple.com/us/music-video/lights-out/1750545638'
            },
        ]
    },
    {
        artist: "BIA & Lil Yachty",
        birthday: [{ month: "August", day: 16, year: 1991 }, { month: "August", day: 23, year: 1997 }],
        songs: [
            {
                title: 'PISSED OFF',
                src: 'https://embed.music.apple.com/us/music-video/pissed-off/1770842730'
            },
        ]
    },
    {
        artist: "BIA & Timbaland",
        birthday: [{ month: "August", day: 16, year: 1991 }, { month: "March", day: 10, year: 1972 }],
        songs: [
            {
                title: "I'M THAT BITCH",
                src: 'https://embed.music.apple.com/us/music-video/im-that-bitch/1678614033'
            },
        ]
    },
    {
        artist: "Big Bad 40",
        songs: [
            {
                title: "Damn (feat. Ray J) [Edited] [edited]",
                src: "https://embed.music.apple.com/us/music-video/damn-feat-ray-j-edited-edited/381994332"
            },
        ]
    },
    {
        artist: "Big Daddy Kane",
        birthday: [{ month: "September", day: 10, year: 1968 }],
        songs: [
            {
                title: "Smooth Operator",
                src: "https://embed.music.apple.com/us/music-video/smooth-operator/281904721"
            },
        ]
    },
    {
        artist: "Big K.R.I.T.",
        birthday: [{ month: "August", day: 26, year: 1986 }],
        songs: [
            {
                title: "1999 (feat. Lloyd)",
                src: "https://embed.music.apple.com/us/music-video/1999-feat-lloyd/1711293653"
            },
            {
                title: "What U Mean (feat. Ludacris)",
                src: "https://embed.music.apple.com/us/music-video/what-u-mean-feat-ludacris/1445748924"
            },
        ]
    },
    {
        artist: "Big Punisher & Fat Joe",
        birthday: [{ month: "November", day: 10, year: 1971 }, { month: "August", day: 19, year: 1970 }],
        songs: [
            {
                title: "Twinz (Deep Cover 98)",
                src: "https://embed.music.apple.com/us/music-video/twinz-deep-cover-98/1536519587"
            },
        ]
    },
    {
        artist: "Big Sean",
        birthday: [{ month: "March", day: 25, year: 1988 }],
        songs: [
            {
                title: "Body Language (feat. Ty Dolla $ign & Jhené Aiko)",
                src: "https://embed.music.apple.com/us/music-video/body-language-feat-ty-dolla-%24ign-jhen%C3%A9-aiko/1557691623"
            },
        ]
    },
    {
        artist: "Big Time Rush",
        birthday: [{ month: "November", day: 2, year: 1990 }, { month: "July", day: 16, year: 1990 }, { month: "August", day: 15, year: 1989 }, { month: "September", day: 14, year: 1989 }],
        songs: [
            {
                title: "Boyfriend (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/boyfriend-feat-snoop-dogg/418956022"
            },
        ]
    },
    {
        artist: "Big Tymers",
        birthday: [{ month: "February", day: 15, year: 1969 }, { month: "March", day: 20, year: 1969 }],
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
        birthday: [{ month: "February", day: 15, year: 1969 }, { month: "March", day: 20, year: 1969 }, { month: "January", day: 8, year: 1967 }],
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
        birthday: [{ month: "February", day: 15, year: 1969 }, { month: "April", day: 15, year: 1994 }],
        songs: [
            {
                title: "Presidential",
                src: "https://embed.music.apple.com/us/music-video/presidential/1442527210"
            },
        ]
    },
    {
        artist: "Birdman & Lil Wayne",
        birthday: [{ month: "February", day: 15, year: 1969 }, { month: "September", day: 27, year: 1982 }],
        songs: [
            {
                title: "Leather So Soft",
                src: "https://embed.music.apple.com/us/music-video/leather-so-soft/1445868536"
            },
        ]
    },
    {
        artist: "Birdman, Drake & Lil Wayne",
        birthday: [{ month: "February", day: 15, year: 1969 }, { month: "October", day: 24, year: 1986 }, { month: "September", day: 27, year: 1982 }],
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
        artist: "Black Bear Beats",
        songs: [
            {
                title: "Black Bear Beats - Who Shot Ya Ft. J.A.D.A.K.I.S.S. (Mix Video) (feat. Jadakiss)",
                src: "https://embed.music.apple.com/us/music-video/black-bear-beats-who-shot-ya-ft-j-a-d-a-k-i-s-s/1743287011"
            },
        ]
    },
    {
        artist: "Black Eyed Peas & Shakira",
        birthday: [{ month: "March", day: 15, year: 1975 }, { month: "November", day: 28, year: 1974 }, { month: "July", day: 14, year: 1975 }, { month: "March", day: 27, year: 1975 }, { month: "February", day: 2, year: 1977 }],
        songs: [
            {
                title: "GIRL LIKE ME",
                src: "https://embed.music.apple.com/us/music-video/girl-like-me/1542838238"
            },
        ]
    },
    {
        artist: "BLACKPINK & Selena Gomez",
        birthday: [{ month: "January", day: 3, year: 1995 }, { month: "January", day: 16, year: 1996 }, { month: "February", day: 11, year: 1997 }, { month: "March", day: 27, year: 1997 }, { month: "July", day: 22, year: 1992 }],
        songs: [
            {
                title: "Ice Cream",
                src: "https://embed.music.apple.com/us/music-video/ice-cream/1529654090"
            },
        ]
    },
    {
        artist: "Blanco Brown & T.I.",
        birthday: [{ month: "March", day: 24, year: 1985 }, { month: "September", day: 25, year: 1980 }],
        songs: [
            {
                title: "Trap Still Bumpin",
                src: "https://embed.music.apple.com/us/music-video/trap-still-bumpin/1653699875" 
            },
        ]
    },
    {
        artist: "Blaque",
        birthday: [{ month: "February", day: 22, year: 1980 }, { month: "October", day: 28, year: 1980 }, { month: "October", day: 5, year: 1982 }],
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
        artist: "Blueface",
        birthday: [{ month: "January", day: 20, year: 1997 }],
        songs: [
            {
                title: "Respect My Cryppin' (Remix) [feat. Snoop Dogg]",
                src: "https://embed.music.apple.com/us/music-video/respect-my-cryppin-remix-feat-snoop-dogg/1527615084"
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
        artist: "Blxst",
        birthday: [{ month: "September", day: 17, year: 1992 }],
        songs: [
            {
                title: "Ghetto Cinderella (feat. Mustard & Terrace Martin)",
                src: "https://embed.music.apple.com/us/music-video/ghetto-cinderella-feat-mustard-terrace-martin/1678094533"
            },
        ]
    },
      {
        artist: "bLAck pARty",
        songs: [
            {
                title: "Distant Lover",
                src: "https://embed.music.apple.com/us/music-video/distant-lover/1812084283"
            },
        ]
    },
    {
        artist: "Bobby Brackins, Ray J & P-LO",
        songs: [
            {
                title: "On Top",
                src: "https://embed.music.apple.com/us/music-video/on-top/1699931926"
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
        artist: "Bobby V",
        birthday: [{ month: "February", day: 27, year: 1980 }],
        songs: [
            {
                title: "lil' Bit (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/lil-bit-feat-snoop-dogg/1481853055"
            },
            {
                title: "Put It In feat K Michelle",
                src: "https://embed.music.apple.com/us/music-video/put-it-in-feat-k-michelle/640916059"
            },
        ]
    },
    {
        artist: "Bobby V & Ludacris",
        birthday: [{ month: "February", day: 27, year: 1980 }, { month: "September", day: 11, year: 1977 }],
        songs: [
            {
                title: "Pimpin' All Over the World",
                src: "https://embed.music.apple.com/us/music-video/pimpin-all-over-the-world/1445839105"
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
        artist: "Boogie Down Productions",
        songs: [
            {
                title: "I'm Still #1 (Live)",
                src: "https://embed.music.apple.com/us/music-video/im-still-1-live/1333850528"
            },
            {
                title: "We In There",
                src: "https://embed.music.apple.com/us/music-video/we-in-there/1380459539"
            },
            {
                title: "We In There (Remix)",
                src: "https://embed.music.apple.com/us/music-video/we-in-there-remix/1380486807"
            },
            {
                title: "My Philosophy",
                src: "https://embed.music.apple.com/us/music-video/my-philosophy/1366600807"
            },
        ]
    },
     {
        artist: "Bossman Dlow",
        birthday: [{ month: "August", day: 31, year: 1998 }],
        songs: [
            {
                title: "Finesse (feat. GloRilla)",
                src: "https://embed.music.apple.com/us/music-video/finesse-feat-glorilla/1738123461"
            },
        ]
    },
    {
        artist: "Bounty Killer",
        birthday: [{ month: "June", day: 12, year: 1972 }],
        songs: [
            {
                title: "Inner Voice",
                src: "https://embed.music.apple.com/us/music-video/inner-voice/1795971455"
            },
            {
                title: "Every Night",
                src: "https://embed.music.apple.com/us/music-video/every-night/1779145669"
            },
            {
                title: "Cock Up",
                src: "https://embed.music.apple.com/us/music-video/cock-up/1651507367"
            },
            {
                title: "Change Like the Weather",
                src: "https://embed.music.apple.com/us/music-video/change-like-the-weather/300227651"
            },
        ]
    },
    {
        artist: "Bounty Killer & Brian & Tony Gold",
        songs: [
            {
                title: "Things You Do (Official Music Video)",
                src: "https://embed.music.apple.com/us/music-video/things-you-do-official-music-video/1607785966"
            },
        ]
    },
    {
        artist: "Bounty Killer & Cham",
        songs: [
            {
                title: "Time Bomb",
                src: "https://embed.music.apple.com/us/music-video/time-bomb/1708958805"
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
            {
                title: "Bow Wow (That's My Name) [feat. Snoop Dogg]",
                src: "https://embed.music.apple.com/us/music-video/bow-wow-thats-my-name-feat-snoop-dogg/584947804"
            },
            {
                title: "Thank You (feat. Jagged Edge & Fundisha)",
                src: "https://embed.music.apple.com/us/music-video/thank-you-feat-jagged-edge-fundisha/1536521533"
            },
            {
                title: "Puppy Love (feat. Jagged Edge)",
                src: "https://embed.music.apple.com/us/music-video/puppy-love-feat-jagged-edge/329057281"
            },
        ]
    },
    {
        artist: "Bow Wow & Jagged Edge",
        songs: [
            {
                title: "My Baby",
                src: "https://embed.music.apple.com/us/music-video/my-baby/304239200"
            },
        ]
    },
    {
        artist: "Bow Wow & Omarion",
        birthday: [{ month: "March", day: 9, year: 1987 }, { month: "November", day: 12, year: 1984 }],
        songs: [
            {
                title: "Girlfriend",
                src: "https://embed.music.apple.com/us/music-video/girlfriend/268589422"
            },
        ]
    },
    {
        artist: "Brad Paisley",
        birthday: [{ month: "October", day: 28, year: 1972 }],
        songs: [
            {
                title: "Remind Me (with Carrie Underwood)",
                src: "https://embed.music.apple.com/us/music-video/remind-me-with-carrie-underwood/453490819"
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
            {
                title: "Starting Now (Live from Disneyland Resort)",
                src: "https://embed.music.apple.com/us/music-video/starting-now-live-from-disneyland-resort/1640793912"
            },
            {
                title: "Baby Mama (feat. Chance the Rapper)",
                src: "https://embed.music.apple.com/us/music-video/baby-mama-feat-chance-the-rapper/1510369725"
            },
            {
                title: "Almost Doesn't Count",
                src: "https://embed.music.apple.com/us/music-video/almost-doesnt-count/1480745887"
            },
            {
                title: "Best Friend",
                src: "https://embed.music.apple.com/us/music-video/best-friend/1480746327"
            },
            {
                title: "Wildest Dreams",
                src: "https://embed.music.apple.com/us/music-video/wildest-dreams/576332879"
            },
            {
                title: "Right Here (Departed)",
                src: "https://embed.music.apple.com/us/music-video/right-here-departed/297747217"
            },
            {
                title: "Afrodisiac",
                src: "https://embed.music.apple.com/us/music-video/afrodisiac/281896183"
            },
            {
                title: "Talk About Our Love (feat. Kanye West)",
                src: "https://embed.music.apple.com/us/music-video/talk-about-our-love-feat-kanye-west/1623471396"
            },
            {
                title: "Full Moon",
                src: "https://embed.music.apple.com/us/music-video/full-moon/1481509763"
            },
            {
                title: "Have You Ever?", 
                src: "https://embed.music.apple.com/us/music-video/have-you-ever/1480746817"
            },
            {
                title: "I Wanna Be Down (feat. Queen Latifah, Yo-Yo & MC Lyte) [Human Rhythm Hip Hop Remix]", 
                src: "https://embed.music.apple.com/us/music-video/i-wanna-be-down-feat-queen-latifah-yo-yo-mc-lyte-human/1480747155"
            },
            {
                title: "Baby", 
                src: "https://embed.music.apple.com/us/music-video/baby/281901576"
            },
            {
                title: "I Wanna Be Down", 
                src: "https://embed.music.apple.com/us/music-video/i-wanna-be-down/281901625"
            },
        ]
    },
    {
        artist: "Brandy & Monica",
        birthday: [{ month: "February", day: 11, year: 1979 }, { month: "October", day: 24, year: 1980 }],
        songs: [
            {
                title: "The Boy Is Mine",
                src: "https://embed.music.apple.com/us/music-video/the-boy-is-mine/1480744815"
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
        artist: "Bria Lee",
        songs: [
            {
                title: "One Shot (feat. Fat Joe)",
                src: "https://embed.music.apple.com/us/music-video/one-shot-feat-fat-joe/1444670654"
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
            {
                title: "Me Against the Music (feat. Madonna)",
                src: "https://embed.music.apple.com/us/music-video/me-against-the-music-feat-madonna/389896988"
            },
            {
                title: "...Baby One More Time (Live from Apple Music Festival, London, 2016)",
                src: "https://embed.music.apple.com/us/music-video/baby-one-more-time-live-from-apple-music-festival-london/1380343175"
            },
            {
                title: "Gimme More (Live from Apple Music Festival, London, 2016)",
                src: "https://embed.music.apple.com/us/music-video/gimme-more-live-from-apple-music-festival-london-2016/1380349577"
            },
            {
                title: "I'm a Slave 4 U (Live from Apple Music Festival, London, 2016)",
                src: "https://embed.music.apple.com/us/music-video/im-a-slave-4-u-live-from-apple-music-festival-london-2016/1380381968"
            },
            {
                title: "If U Seek Amy (Live from Apple Music Festival, London, 2016)",
                src: "https://embed.music.apple.com/us/music-video/if-u-seek-amy-live-from-apple-music-festival-london-2016/1380370238"
            },
            {
                title: "Oops!... I Did It Again (Live from Apple Music Festival, London, 2016)",
                src: "https://embed.music.apple.com/us/music-video/oops-i-did-it-again-live-from-apple-music-festival/1380357592"
            },
            {
                title: "Piece of Me (Live from Apple Music Festival, London, 2016)",
                src: "https://embed.music.apple.com/us/music-video/piece-of-me-live-from-apple-music-festival-london-2016/1380371097"
            },
            {
                title: "Toxic (Live from Apple Music Festival, London, 2016)",
                src: "https://embed.music.apple.com/us/music-video/toxic-live-from-apple-music-festival-london-2016/1380449344"
            },
            {
                title: "Womanizer (Live from Apple Music Festival, London, 2016)",
                src: "https://embed.music.apple.com/us/music-video/womanizer-live-from-apple-music-festival-london-2016/1380448544"
            },
            {
                title: "Work Bitch (Live from Apple Music Festival, London, 2016)",
                src: "https://embed.music.apple.com/us/music-video/work-bitch-live-from-apple-music-festival-london-2016/1380433950"
            },
            {
                title: "Do Somethin'",
                src: "https://embed.music.apple.com/us/music-video/do-somethin/1437689529"
            },
            {
                title: "Perfume",
                src: "https://embed.music.apple.com/us/music-video/perfume/790346249"
            },
            {
                title: "Work Bitch",
                src: "https://embed.music.apple.com/us/music-video/work-bitch/719362319"
            },
            {
                title: 'Ooh La La (From "The Smurfs 2")',
                src: "https://embed.music.apple.com/us/music-video/ooh-la-la-from-the-smurfs-2/672479671"
            },
            {
                title: "Criminal",
                src: "https://embed.music.apple.com/us/music-video/criminal/472849565"
            },
            {
                title: "I Wanna Go",
                src: "https://embed.music.apple.com/us/music-video/i-wanna-go/445603322"
            },
            {
                title: "Hold It Against Me",
                src: "https://embed.music.apple.com/us/music-video/hold-it-against-me/421224069"
            },
            {
                title: "3",
                src: "https://embed.music.apple.com/us/music-video/3/338828415"
            },
            {
                title: "Overprotected",
                src: "https://embed.music.apple.com/us/music-video/overprotected/320885810"
            },
            {
                title: "Radar",
                src: "https://embed.music.apple.com/us/music-video/radar/321636570"
            },
            {
                title: "If U Seek Amy",
                src: "https://embed.music.apple.com/us/music-video/if-u-seek-amy/308095988"
            },
            {
                title: "Womanizer (Director's Cut)",
                src: "https://embed.music.apple.com/us/music-video/womanizer-directors-cut/296259532"
            },
            {
                title: "Piece of Me",
                src: "https://embed.music.apple.com/us/music-video/piece-of-me/270793155"
            },
            {
                title: "Someday (I Will Understand)",
                src: "https://embed.music.apple.com/us/music-video/someday-i-will-understand/548919034"
            },
            {
                title: "My Prerogative",
                src: "https://embed.music.apple.com/us/music-video/my-prerogative/287817777"
            },
            {
                title: "(You Drive Me) Crazy",
                src: "https://embed.music.apple.com/us/music-video/you-drive-me-crazy/287852873"
            },
            {
                title: "I Love Rock 'N' Roll",
                src: "https://embed.music.apple.com/us/music-video/i-love-rock-n-roll/1000046666"
            },
            {
                title: "I'm Not a Girl, Not Yet a Woman",
                src: "https://embed.music.apple.com/us/music-video/im-not-a-girl-not-yet-a-woman/287852844"
            },
            {
                title: "I'm a Slave 4 U",
                src: "https://embed.music.apple.com/us/music-video/im-a-slave-4-u/326339365"
            },
            {
                title: "Don't Let Me Be the Last to Know",
                src: "https://embed.music.apple.com/us/music-video/dont-let-me-be-the-last-to-know/274224514"
            },
            {
                title: "Oops!...I Did It Again",
                src: "https://embed.music.apple.com/us/music-video/oops-i-did-it-again/332777704"
            },
            {
                title: "Born to Make You Happy",
                src: "https://embed.music.apple.com/us/music-video/born-to-make-you-happy/320840714"
            },
            {
                title: "Sometimes",
                src: "https://embed.music.apple.com/us/music-video/sometimes/299199305"
            },
            {
                title: "...Baby One More Time",
                src: "https://embed.music.apple.com/us/music-video/baby-one-more-time/307560076"
            },
        ]
    },
    {
        artist: "Britney Spears & Iggy Azalea",
        birthday: [{ month: "December", day: 2, year: 1981 }, { month: "June", day: 7, year: 1990 }],
        songs: [
            {
                title: "Pretty Girls",
                src: "https://embed.music.apple.com/us/music-video/pretty-girls/994250002"
            },
        ]
    },
    {
        artist: "BRS Kash",
        birthday: [{ month: "May", day: 15, year: 1993 }],
        songs: [
            {
                title: "Kash App (feat. Latto)",
                src: "https://embed.music.apple.com/us/music-video/kash-app-feat-latto/1556423939"
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
        birthday: [{ month: "March", day: 6, year: 1977 }, { month: "October", day: 5, year: 1970 }, { month: "December", day: 16, year: 1978 }, { month: "February", day: 23, year: 1979 }],
        songs: [
            {
                title: "Ms. New Booty",
                src: "https://embed.music.apple.com/us/music-video/ms-new-booty/719632692"
            },
        ]
    },
    {
        artist: "Bugle, Julian Marley & Bounty Killer",
        songs: [
            {
                title: "Time Is of Essence",
                src: "https://embed.music.apple.com/us/music-video/time-is-of-essence/1760356117"
            },
        ]
    },
    {
        artist: "Buju Banton",
        birthday: [{ month: "July", day: 15, year: 1973 }],
        songs: [
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
            {
                title: "Girlfriend (feat. Vybz Kartel & Tory Lanez) [Extended Version]",
                src: "https://embed.music.apple.com/us/music-video/girlfriend-feat-vybz-kartel-tory-lanez-extended-version/1291531905"
            },
        ]
    },
    {
        artist: "Byrd Gang, Jim Jones & Capella Grey", 
        songs: [
            {
                title: "FaceTime (feat. Dyce Payso & DramaB2R)",
                src: "https://embed.music.apple.com/us/music-video/facetime-feat-dyce-payso-dramab2r/1695586407"
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
        artist: "Calvin Harris",
        birthday: [{ month: "January", day: 17, year: 1984 }],
        songs: [
            {
                title: "I Need Your Love (feat. Ellie Goulding)",
                src: "https://embed.music.apple.com/us/music-video/i-need-your-love-feat-ellie-goulding/636608021"
            },
        ]
    },
     {
        artist: "Calvin Harris & Clementine Douglas",
        birthday: [{ month: "January", day: 17, year: 1984 }, { month: "December", day: 29, year: 1991 }],
        songs: [
            {
                title: "Blessings",
                src: "https://embed.music.apple.com/us/music-video/blessings/1820384210"
            },
        ]
    },
    {
        artist: "Calvin Harris & Ellie Goulding",
        birthday: [{ month: "January", day: 17, year: 1984 }, { month: "December", day: 30, year: 1986 }],
        songs: [
            {
                title: "Miracle",
                src: "https://embed.music.apple.com/us/music-video/miracle/1678495297"
            },
            {
                title: "Free (Live at Ushuaïa Ibiza, 2024)",
                src: "https://embed.music.apple.com/us/music-video/free-live-at-ushua%C3%AFa-ibiza-2024/1760616690"
            },
            {
                title: "Miracle (Live at The BRIT Awards, 2024)",
                src: "https://embed.music.apple.com/us/music-video/miracle-live-at-the-brit-awards-2024/1734411898"
            },
        ]
    },
    {
        artist: "Calvin Harris & Rihanna",
        birthday: [{ month: "January", day: 17, year: 1984 }, { month: "February", day: 20, year: 1988 }],
        songs: [
            {
                title: "This Is What You Came For",
                src: "https://embed.music.apple.com/us/music-video/this-is-what-you-came-for/1125405366"
            },
        ]
    },
    {
        artist: "Calvin Harris & Sam Smith",
        birthday: [{ month: "January", day: 17, year: 1984 }, { month: "May", day: 19, year: 1992 }],
        songs: [
            {
                title: "Desire",
                src: "https://embed.music.apple.com/us/music-video/desire/1702043530"
            },
        ]
    },
    {
        artist: "Calvin Harris,Charlie Puth & Shenseea",
        birthday: [{ month: "January", day: 17, year: 1984 }, { month: "December", day: 2, year: 1991 }, { month: "October", day: 1, year: 1996 }],
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
            {
                title: "Medellin",
                src: "https://embed.music.apple.com/us/music-video/medellin/1516003415"
            },
            {
                title: "Oh Boy",
                src: "https://embed.music.apple.com/us/music-video/oh-boy/1445733922"
            },
            {
                title: "Let Me Know",
                src: "https://embed.music.apple.com/us/music-video/let-me-know/311609664"
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
        birthday: [{ month: "October", day: 11, year: 1992 }, { month: "February", day: 15, year: 1995 }],
        songs: [
            {
                title: "Bongos",
                src: "https://embed.music.apple.com/us/music-video/bongos/1706428864"
            },
        ]
    },
    {
        artist: "Caribbean Connection, Angel y Khriz & Wayne Wonder",
        songs: [
            {
                title: "Dance",
                src: "https://embed.music.apple.com/us/music-video/dance/1445843624"
            },
        ]
    },
    {
        artist: "Carl Thomas",
        birthday: [{ month: "June", day: 15, year: 1972 }],
        songs: [
            {
                title: "Don't Kiss Me (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/dont-kiss-me-feat-snoop-dogg/1445750483"
            },
            {
                title: "Emotional",
                src: "https://embed.music.apple.com/us/music-video/emotional/908247355"
            },
            {
                title: "Summer Rain",
                src: "https://embed.music.apple.com/us/music-video/summer-rain/1470045652"
            },
        ]
    },
    {
        artist: "Carrie Underwood",
        birthday: [{ month: "March", day: 10, year: 1983 }],
        songs: [
            {
                title: "O Holy Night (Live From Carols In The Domain, 2021)",
                src: "https://embed.music.apple.com/us/music-video/o-holy-night-live-from-carols-in-the-domain-2021/1600740739"
            },
            {
                title: "Silent Night (2021 Opry Live: USO Holiday Special)",
                src: "https://embed.music.apple.com/us/music-video/silent-night-2021-opry-live-uso-holiday-special/1600753451"
            },
            {
                title: "O Come All Ye Faithful (2021 Santa Claus Parade)",
                src: "https://embed.music.apple.com/us/music-video/o-come-all-ye-faithful-2021-santa-claus-parade/1600554248"
            },
            {
                title: "Great Is Thy Faithfulness (feat. CeCe Winans) [Performance Video]",
                src: "https://embed.music.apple.com/us/music-video/great-is-thy-faithfulness-feat-cece-winans-performance/1561397985"
            },
            {
                title: "How Great Thou Art (Performance Video)",
                src: "https://embed.music.apple.com/us/music-video/how-great-thou-art-performance-video/1561390840"
            },
            {
                title: "Nothing But The Blood Of Jesus",
                src: "https://embed.music.apple.com/us/music-video/nothing-but-the-blood-of-jesus/1561393890"
            },
            {
                title: "Drinking Alone",
                src: "https://embed.music.apple.com/us/music-video/drinking-alone/1488030419"
            },
            {
                title: "Mama's Song (Walmart Soundcheck 2009)",
                src: "https://embed.music.apple.com/us/music-video/mamas-song-walmart-soundcheck-2009/1477564159"
            },
            {
                title: "So Small (Walmart Soundcheck 2009)",
                src: "https://embed.music.apple.com/us/music-video/so-small-walmart-soundcheck-2009/1477566398"
            },
            {
                title: "Before He Cheats (Walmart Soundcheck 2009)",
                src: "https://embed.music.apple.com/us/music-video/before-he-cheats-walmart-soundcheck-2009/1477564815"
            },
            {
                title: "All-American Girl (Walmart Soundcheck 2009)",
                src: "https://embed.music.apple.com/us/music-video/all-american-girl-walmart-soundcheck-2009/1477561474"
            },
            {
                title: "Jesus Take The Wheel (Walmart Soundcheck 2009)",
                src: "https://embed.music.apple.com/us/music-video/jesus-take-the-wheel-walmart-soundcheck-2009/1467312940"
            },
            {
                title: "Southbound",
                src: "https://embed.music.apple.com/us/music-video/southbound/1467092018"
            },
            {
                title: "Love Wins",
                src: "https://embed.music.apple.com/us/music-video/love-wins/1435733789"
            },
            {
                title: "Cry Pretty",
                src: "https://embed.music.apple.com/us/music-video/cry-pretty/1380458651"
            },
            {
                title: "Heartbeat",
                src: "https://embed.music.apple.com/us/music-video/heartbeat/1062393150"
            },
            {
                title: "Smoke Break",
                src: "https://embed.music.apple.com/us/music-video/smoke-break/1032876566"
            },
            {
                title: "Something in the Water",
                src: "https://embed.music.apple.com/us/music-video/something-in-the-water/934905094"
            },
            {
                title: "Mama's Song",
                src: "https://embed.music.apple.com/us/music-video/mamas-song/393967660"
            },
            {
                title: "Cowboy Casanova",
                src: "https://embed.music.apple.com/us/music-video/cowboy-casanova/333703169"
            },
            {
                title: "Last Name",
                src: "https://embed.music.apple.com/us/music-video/last-name/280391330"
            },
            {
                title: "All-American Girl",
                src: "https://embed.music.apple.com/us/music-video/all-american-girl/274141746"
            },
            {
                title: "Before He Cheats (Live)",
                src: "https://embed.music.apple.com/us/music-video/before-he-cheats-live/1070312046"
            },
            {
                title: "Don't Forget to Remember Me",
                src: "https://embed.music.apple.com/us/music-video/dont-forget-to-remember-me/1277927064"
            },
            {
                title: "Jesus, Take the Wheel",
                src: "https://embed.music.apple.com/us/music-video/jesus-take-the-wheel/1369386812"
            },
            {
                title: "Jesus, Take The Wheel (Sessions @ AOL 2005)",
                src: "https://embed.music.apple.com/us/music-video/jesus-take-the-wheel-sessions-aol-2005/1609841768"
            },
            {
                title: "Some Hearts (Sessions @ AOL 2005)",
                src: "https://embed.music.apple.com/us/music-video/some-hearts-sessions-aol-2005/1609835468"
            },
            {
                title: "Wasted (Sessions @ AOL 2005)",
                src: "https://embed.music.apple.com/us/music-video/wasted-sessions-aol-2005/1609841656"
            },
            {
                title: "Inside Your Heaven (Sessions @ AOL 2005)",
                src: "https://embed.music.apple.com/us/music-video/inside-your-heaven-sessions-aol-2005/1538371048"
            },
        ]
    },
    {
        artist: "Carrie Underwood & John Legend",
        birthday: [{ month: "March", day: 10, year: 1983 }, { month: "December", day: 28, year: 1978 }],
        songs: [
            {
                title: "Hallelujah",
                src: "https://embed.music.apple.com/us/music-video/hallelujah/1540868166"
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
        birthday: [{ month: "March", day: 31, year: 1998 }, { month: "January", day: 1, year: 2000 }, { month: "November", day: 26, year: 1999 }],
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
        artist: "Chamillionaire & Slick Rick",
        birthday: [{ month: "November", day: 28, year: 1979 }, { month: "January", day: 14, year: 1965 }],
        songs: [
            {
                title: "Hip Hop Police",
                src: "https://embed.music.apple.com/us/music-video/hip-hop-police/1446729102"
            },
        ]
    },
    {
        artist: "Chamillionaire featuring Krayzie Bone",
        birthday: [{ month: "November", day: 28, year: 1979 }, { month: "June", day: 17, year: 1973 }],
        songs: [
            {
                title: "Ridin' (feat. Krayzie Bone)",
                src: "https://embed.music.apple.com/us/music-video/ridin-feat-krayzie-bone/1445847240"
            },
        ]
    },
     {
        artist: "Chance the Rapper, Lil Wayne & Smino",
        birthday: [{ month: "April", day: 16, year: 1993 }, { month: "September", day: 27, year: 1982 }, { month: "October", day: 2, year: 1991 }],
        songs: [
            {
                title: "Tree",
                src: "https://embed.music.apple.com/us/music-video/tree/1825958239"
            },
        ]
    },
    {
        artist: "Charli xcx",
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
            {
                title: "Baby",
                src: "https://embed.music.apple.com/us/music-video/baby/1612694060"
            },
             {
                title: "party 4 u",
                src: "https://embed.music.apple.com/us/music-video/party-4-u/1815381936"
            },
        ]
    },
    {
        artist: "Charlie Bereal",
        songs: [
            {
                title: "The Greatest (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/the-greatest-feat-snoop-dogg/1792250862"
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
            },
            {
                title: "I Wish (feat. T.I.)",
                src: "https://embed.music.apple.com/us/music-video/i-wish-feat-t-i/712603653" 
            },
        ]
    },
    {
        artist: "Chillz",
        songs: [
            {
                title: "The City (feat. Jadakiss)",
                src: "https://embed.music.apple.com/us/music-video/the-city-feat-jadakiss/1625348548"
            }
        ]
    },
    {
        artist: "Chingy, Snoop Dogg & Ludacris",
        birthday: [{ month: "March", day: 9, year: 1980 }, { month: "October", day: 20, year: 1971 }, { month: "September", day: 11, year: 1977 }],
        songs: [
            {
                title: "Holidae In",
                src: "https://embed.music.apple.com/us/music-video/holidae-in/719983687"
            }
        ]
    },
    {
        artist: "Chloe & Chris Brown",
        birthday: [{ month: "July", day: 1, year: 1998 }, { month: "May", day: 5, year: 1989 }],
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
            {
                title: "Residuals",
                src: "https://embed.music.apple.com/us/music-video/residuals/1791838447"
            },
            {
                title: "Run It! (feat. Juelz Santana)",
                src: "https://embed.music.apple.com/us/music-video/run-it-feat-juelz-santana/1355846929"
            },
            {
                title: "Wall to Wall (feat. Jadakiss) [Remix]",
                src: "https://embed.music.apple.com/us/music-video/wall-to-wall-feat-jadakiss-remix/389903491"
            },
            {
                title: "Don't Think They Know (feat. Aaliyah)",
                src: "https://embed.music.apple.com/us/music-video/dont-think-they-know-feat-aaliyah/664702952"
            },
            {
                title: "Superhuman (feat. Keri Hilson)",
                src: "https://embed.music.apple.com/us/music-video/superhuman-feat-keri-hilson/293390968"
            },
        ]
    },
    {
        artist: "Chris Brown & Tyga",
        birthday: [{ month: "May", day: 5, year: 1989 }, { month: "November", day: 19, year: 1989 }],
        songs: [
            {
                title: "Ayo",
                src: "https://embed.music.apple.com/us/music-video/ayo/964651630"
            }
        ]
    },
    {
        artist: "Chris de Burgh",
        birthday: [{ month: "October", day: 15, year: 1948 }],
        songs: [
            {
                title: "The Lady in Red",
                src: "https://embed.music.apple.com/us/music-video/the-lady-in-red/1444337671"
            },
        ]
    },
    {
        artist: "Chris Lane",
        birthday: [{ month: "November", day: 9, year: 1984 }],
        songs: [
            {
                title: "Take Back Home Girl (Feat. Tori Kelly)",
                src: "https://embed.music.apple.com/us/music-video/take-back-home-girl-feat-tori-kelly/1443673613"
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
        artist: "Chris Webby",
        birthday: [{ month: "October", day: 13, year: 1988 }],
        songs: [
            {
                title: "We Up (feat. DMX)",
                src: "https://embed.music.apple.com/us/music-video/we-up-feat-dmx/1638021813"
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
            },
            {
                title: "Come on over (Live - Anniversary Version)",
                src: "https://embed.music.apple.com/us/music-video/come-on-over-live-anniversary-version/1780402711"
            },
            {
                title: "Obvious (Live - Anniversary Version)",
                src: "https://embed.music.apple.com/us/music-video/obvious-live-anniversary-version/1780404152"
            },
            {
                title: "Beautiful (2022 Version)",
                src: "https://embed.music.apple.com/us/music-video/beautiful-2022-version/1650451201"
            },
            {
                title: 'Reflection (2020)/Loyal Brave True Medley (From "Mulan")',
                src: "https://embed.music.apple.com/us/music-video/reflection-2020-loyal-brave-true-medley-from-mulan/1530127623"
            },
            {
                title: 'Reflection (2020) [From "Mulan" ]',
                src: "https://embed.music.apple.com/us/music-video/reflection-2020-from-mulan/1529683029"
            },
            {
                title: "Your Body",
                src: "https://embed.music.apple.com/us/music-video/your-body/566587904"
            },
            {
                title: "But I Am a Good Girl (Burlesque Original Motion Picture Soundtrack)",
                src: "https://embed.music.apple.com/us/music-video/but-i-am-a-good-girl-burlesque-original-motion/1278690477"
            },
            {
                title: "Not Myself Tonight",
                src: "https://embed.music.apple.com/us/music-video/not-myself-tonight/1280561979"
            },
            {
                title: "Ain't No Other Man",
                src: "https://embed.music.apple.com/us/music-video/aint-no-other-man/327233698"
            },
            {
                title: "At Last",
                src: "https://embed.music.apple.com/us/music-video/at-last/301981849"
            },
            {
                title: "Christmas Time (Live Video)",
                src: "https://embed.music.apple.com/us/music-video/christmas-time-live-video/301981836"
            },
            {
                title: "Falsas Esperanzas",
                src: "https://embed.music.apple.com/us/music-video/falsas-esperanzas/455719383"
            },
            {
                title: "Have Yourself a Merry Little Christmas (Live)",
                src: "https://embed.music.apple.com/us/music-video/have-yourself-a-merry-little-christmas-live/297411676"
            },
            {
                title: "The Voice Within",
                src: "https://embed.music.apple.com/us/music-video/the-voice-within/548916007"
            },
            {
                title: "Can't Hold Us Down",
                src: "https://embed.music.apple.com/us/music-video/cant-hold-us-down/454842709"
            },
            {
                title: "Beautiful",
                src: "https://embed.music.apple.com/us/music-video/beautiful/299373716"
            },
            {
                title: "Dirrty (feat. Redman)",
                src: "https://embed.music.apple.com/us/music-video/dirrty-feat-redman/379642585"
            },
            {
                title: "Come On Over (All I Want Is You)",
                src: "https://embed.music.apple.com/us/music-video/come-on-over-all-i-want-is-you/379641879"
            },
            {
                title: "So Emotional",
                src: "https://embed.music.apple.com/us/music-video/so-emotional/327609471"
            },
            {
                title: "I Turn to You",
                src: "https://embed.music.apple.com/us/music-video/i-turn-to-you/326335006"
            },
        ]
    },
    {
        artist: "Christina Milian",
        birthday: [{ month: "September", day: 26, year: 1981 }],
        songs: [
            {
                title: "Like Me (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/like-me-feat-snoop-dogg/1168322531"
            },
            {
                title: "Whatever U Want (feat. Joe Budden) [feat. Joe Budden]",
                src: "https://embed.music.apple.com/us/music-video/whatever-u-want-feat-joe-budden-feat-joe-budden/1445755108"
            },
        ]
    },
    {
        artist: "Christopher Martin",
        birthday: [{ month: "February", day: 14, year: 1987 }],
        songs: [
            {
                title: "It's Guaranteed (feat. Bounty Killer & Busy Signal) [Remix]",
                src: "https://embed.music.apple.com/us/music-video/its-guaranteed-feat-bounty-killer-busy-signal-remix/1699315402"
            },
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
            {
                title: "Oh (feat. Ludacris) [MTV Version]",
                src: "https://embed.music.apple.com/us/music-video/oh-feat-ludacris-mtv-version/1359839033"
            },
             {
                title: "Ecstasy",
                src: "https://embed.music.apple.com/us/music-video/ecstasy/1806002867"
            },
        ]
    },
    {
        artist: "Ciara & Chris Brown",
        birthday: [{ month: "October", day: 25, year: 1985 }, { month: "May", day: 5, year: 1989 }],
        songs: [
            {
                title: "How We Roll",
                src: "https://embed.music.apple.com/us/music-video/how-we-roll/1779215642"
            },
        ]
    },
    {
        artist: "City Girls",
        birthday: [{ month: "February", day: 11, year: 1994 }, { month: "December", day: 3, year: 1992 }],
        songs: [
            {
                title: "Pussy Talk (feat. Doja Cat)",
                src: "https://embed.music.apple.com/us/music-video/pussy-talk-feat-doja-cat/1522104426"
            },
            {
                title: "Good Love (feat. Usher)",
                src: "https://embed.music.apple.com/us/music-video/good-love-feat-usher/1632119216"
            },
            {
                title: "I Need A Thug",
                src: "https://embed.music.apple.com/us/music-video/i-need-a-thug/1692260647"
            },
            {
                title: "Flewed Out (feat. Lil Baby)",
                src: "https://embed.music.apple.com/us/music-video/flewed-out-feat-lil-baby/1537739995"
            },
            {
                title: "Twerk (feat. Cardi B)",
                src: "https://embed.music.apple.com/us/music-video/twerk-feat-cardi-b/1449668962"
            },
            {
                title: "Season (feat. Lil Baby)",
                src: "https://embed.music.apple.com/us/music-video/season-feat-lil-baby/1443959967"
            },
            {
                title: "Millionaire Dick",
                src: "https://embed.music.apple.com/us/music-video/millionaire-dick/1437562934"
            },
            {
                title: "Sweet Tooth",
                src: "https://embed.music.apple.com/us/music-video/sweet-tooth/1405312110"
            },
            {
                title: "Where the Bag At",
                src: "https://embed.music.apple.com/us/music-video/where-the-bag-at/1354196336"
            },
        ]
    },
    {
        artist: "City Girls & Fivio Foreign",
        birthday: [{ month: "February", day: 11, year: 1994 }, { month: "December", day: 3, year: 1992 }, { month: "March", day: 29, year: 1990 }],
        songs: [
            {
                title: "Top Notch",
                src: "https://embed.music.apple.com/us/music-video/top-notch/1617202505"
            },
        ]
    },
    {
        artist: "City Girls & Kim Petras",
        birthday: [{ month: "February", day: 11, year: 1994 }, { month: "December", day: 3, year: 1992 }, { month: "August", day: 27, year: 1992 }],
        songs: [
            {
                title: "Flashy",
                src: "https://embed.music.apple.com/us/music-video/flashy/1712781373"
            }
         
        ]
    },
    {
        artist: "Claire Rosinkranz",
        birthday: [{ month: "January", day: 2, year: 2004 }],
        songs: [
            {
                title: "Frankenstein",
                src: "https://embed.music.apple.com/us/music-video/frankenstein/1567945918"
            },
        ]
    },
     {
        artist: "Claudia Valentina",
        birthday: [{ month: "June", day: 6, year: 2001 }],
        songs: [
            {
                title: "Candy",
                src: "https://embed.music.apple.com/us/music-video/candy/1815806661"
            },
        ]
    },
        {
        artist: "Clean Bandit",
        songs: [
            {
                title: "Baby (feat. Marina and the Diamonds & Luis Fonsi)",
                src: "https://embed.music.apple.com/us/music-video/baby-feat-marina-and-the-diamonds-luis-fonsi/1441302196"
            },
        ]
    },
    {
        artist: "Clipse",
        birthday: [{ month: "May", day: 13, year: 1977 }, { month: "August", day: 18, year: 1972 }],
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
            {
                title: "Silver Bells",
                src: "https://embed.music.apple.com/us/music-video/silver-bells/1657740680"
            },
            {
                title: "Caliber",
                src: "https://embed.music.apple.com/us/music-video/caliber/1627318283"
            },
        ]
    },
    {
        artist: "Coco Jones",
        birthday: [{ month: "January", day: 4, year: 1998 }],
        songs: [
            {
                title: "Taste",
                src: "https://embed.music.apple.com/us/music-video/taste/1797607851" 
            },
            {
                title: "Santa Is Me",
                src: "https://embed.music.apple.com/us/music-video/santa-is-me/1783661951" 
            },
            {
                title: "Crazy For Me (Live Performance)",
                src: "https://embed.music.apple.com/us/music-video/crazy-for-me-live-performance/1692798097"
            },
            {
                title: "Holla at the DJ",
                src: "https://embed.music.apple.com/us/music-video/holla-at-the-dj/1445865333"
            },
        ]
    },
    {
        artist: "Cocoa Tea",
        birthday: [{ month: "September", day: 3, year: 1959 }],
        songs: [
            {
                title: "New Immigration Law",
                src: "https://embed.music.apple.com/us/music-video/new-immigration-law/1445849145" 
            },
        ]
    },
     {
        artist: "Coco & Breezy & Tara Carosielli",
        songs: [
            {
                title: "Just Say",
                src: "https://embed.music.apple.com/us/music-video/just-say/1650485124"
            },
        ]
    },
    {
        artist: "Cody Johnson",
        birthday: [{ month: "May", day: 21, year: 1987 }],
        songs: [
            {
                title: "I'm Gonna Love You (with Carrie Underwood)",
                src: "https://embed.music.apple.com/us/music-video/im-gonna-love-you-with-carrie-underwood/1769479661"
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
            },
        ]
    },
    {
        artist: "Colbie Caillat",
        birthday: [{ month: "May", day: 28, year: 1985 }],
        songs: [
            {
                title: "Favorite Song (feat. Common)",
                src: "https://embed.music.apple.com/us/music-video/favorite-song-feat-common/1445747478"
            },
        ]
    },
    {
        artist: "Collie Buddz",
        songs: [
            {
                title: "Light It Up (KE Remix) [feat. Snoop Dogg]",
                src: "https://embed.music.apple.com/us/music-video/light-it-up-ke-remix-feat-snoop-dogg/1286217582"
            },
        ]
    },
    {
        artist: "Collie Buddz, Bounty Killer & Massive B",
        songs: [
            {
                title: "Twisted Agenda",
                src: "https://embed.music.apple.com/us/music-video/twisted-agenda/1606036310"
            },
        ]
    },
    {
        artist: "Colonel Loud",
        songs: [
            {
                title: "California (feat. T.I., Young Dolph & Ricco Barrino)",
                src: "https://embed.music.apple.com/us/music-video/california-feat-t-i-young-dolph-ricco-barrino/1070649206" 
            },
        ]
    },
    {
        artist: "Colt Ford",
        songs: [
            {
                title: "Hood (feat. Kevin Gates & Jermaine Dupri)",
                src: "https://embed.music.apple.com/us/music-video/hood-feat-kevin-gates-jermaine-dupri/1596537571"
            },
        ]
    },
    {
        artist: "Common",
        birthday: [{ month: "March", day: 13, year: 1972 }],
        songs: [
            {
                title: "Heat",
                src: "https://embed.music.apple.com/us/music-video/heat/1699682297"
            },
            {
                title: "Majesty (Where We Gonna Take It)",
                src: "https://embed.music.apple.com/us/music-video/majesty-where-we-gonna-take-it/1598206731"
            },
            {
                title: "Imagine (feat. PJ)",
                src: "https://embed.music.apple.com/us/music-video/imagine-feat-pj/1574364889"
            },
            {
                title: "What Do You Say (Move It Baby)",
                src: "https://embed.music.apple.com/us/music-video/what-do-you-say-move-it-baby/1562125487"
            },
            {
                title: "Courageous",
                src: "https://embed.music.apple.com/us/music-video/courageous/1541083820"
            },
            {
                title: "Don't Forget Who You Are",
                src: "https://embed.music.apple.com/us/music-video/dont-forget-who-you-are/1541083827"
            },
            {
                title: "Fallin'",
                src: "https://embed.music.apple.com/us/music-video/fallin/1541083811"
            },
            {
                title: "A Place In This World",
                src: "https://embed.music.apple.com/us/music-video/a-place-in-this-world/1541083824"
            },
            {
                title: "A Riot In My Mind",
                src: "https://embed.music.apple.com/us/music-video/a-riot-in-my-mind/1541083825"
            },
            {
                title: "Say Peace",
                src: "https://embed.music.apple.com/us/music-video/say-peace/1541083814"
            },
            {
                title: "What Do You Say (Move It Baby)",
                src: "https://embed.music.apple.com/us/music-video/what-do-you-say-move-it-baby/1541083817"
            },
            {
                title: "Show Me That You Love (feat. Jill Scott & Samora Pinderhughes)",
                src: "https://embed.music.apple.com/us/music-video/show-me-that-you-love-feat-jill-scott-samora-pinderhughes/1477144851"
            },
            {
                title: "Hercules (feat. Swizz Beatz)",
                src: "https://embed.music.apple.com/us/music-video/hercules-feat-swizz-beatz/1472078647"
            },
            {
                title: "HER Love (feat. Daniel Caesar)",
                src: "https://embed.music.apple.com/us/music-video/her-love-feat-daniel-caesar/1468033264"
            },
            {
                title: "Diamonds (feat. Big Sean)",
                src: "https://embed.music.apple.com/us/music-video/diamonds-feat-big-sean/1445009327"
            },
            {
                title: "Raw (How You Like It)",
                src: "https://embed.music.apple.com/us/music-video/raw-how-you-like-it/495020731"
            },
            {
                title: "Celebrate",
                src: "https://embed.music.apple.com/us/music-video/celebrate/493706734"
            },
            {
                title: "Blue Sky",
                src: "https://embed.music.apple.com/us/music-video/blue-sky/478438133"
            },
            {
                title: "Ghetto Dreams (feat. Nas)",
                src: "https://embed.music.apple.com/us/music-video/ghetto-dreams-feat-nas/458758609"
            },
            {
                title: "The Game",
                src: "https://embed.music.apple.com/us/music-video/the-game/1445843574"
            },
            {
                title: "I Want You (Edited Version)",
                src: "https://embed.music.apple.com/us/music-video/i-want-you-edited-version/1445850503"
            },
            {
                title: "The People",
                src: "https://embed.music.apple.com/us/music-video/the-people/1445838744"
            },
            {
                title: "Testify (Short Version/ Closed Captioned)",
                src: "https://embed.music.apple.com/us/music-video/testify-short-version-closed-captioned/1634876298"
            },
            {
                title: "The Corner (feat. The Last Poets) [Closed Captioned]",
                src: "https://embed.music.apple.com/us/music-video/the-corner-feat-the-last-poets-closed-captioned/1634871891"
            },
        ]
    },
    {
        artist: "Common & Lily Allen",
        birthday: [{ month: "March", day: 13, year: 1972 }, { month: "May", day: 2, year: 1985 }],
        songs: [
            {
                title: "Drivin' Me Wild (Edited Version)",
                src: "https://embed.music.apple.com/us/music-video/drivin-me-wild-edited-version/1467932876"
            },
        ]
    },
    {
        artist: "Common & Mary J. Blige",
        birthday: [{ month: "March", day: 13, year: 1972 }, { month: "January", day: 11, year: 1971 }],
        songs: [
            {
                title: "Come Close",
                src: "https://embed.music.apple.com/us/music-video/come-close/1446735885"
            },
        ]
    },
    {
        artist: "Common & Pete Rock",
        birthday: [{ month: "March", day: 13, year: 1972 }, { month: "June", day: 21, year: 1970 }],
        songs: [
            {
                title: "Dreamin'",
                src: "https://embed.music.apple.com/us/music-video/dreamin/1764565853"
            },
            {
                title: "All Kind Of Ideas",
                src: "https://embed.music.apple.com/us/music-video/all-kind-of-ideas/1754050990"
            },
            {
                title: "Wise Up",
                src: "https://embed.music.apple.com/us/music-video/wise-up/1747388609"
            },
        ]
    },
    {
        artist: "Common featuring Bilal",
        birthday: [{ month: "March", day: 13, year: 1972 }, { month: "August", day: 23, year: 1979 }],
        songs: [
            {
                title: "The 6th Sense",
                src: "https://embed.music.apple.com/us/music-video/the-6th-sense/1445726452"
            },
        ]
    },
    {
        artist: "Cordae",
        birthday: [{ month: "August", day: 26, year: 1997 }],
        songs: [
            {
                title: "Syrup Sandwiches (feat. Joey Bada$$)",
                src: "https://embed.music.apple.com/us/music-video/syrup-sandwiches-feat-joey-bada%24%24/1779112214"
            },
        ]
    },
    {
        artist: "Cory Gunz",
        birthday: [{ month: "June", day: 22, year: 1987 }],
        songs: [
            {
                title: "Whispering (feat. Whispers & Styles P)",
                src: "https://embed.music.apple.com/us/music-video/whispering-feat-whispers-styles-p/1729907995"
            },
        ]
    },
    {
        artist: "Cory Gunz & Lil Wayne",
        birthday: [{ month: "June", day: 22, year: 1987 }, { month: "September", day: 27, year: 1982 }],
        songs: [
            {
                title: "6 Foot 7 Foot (feat. Cory Gunz)",
                src: "https://embed.music.apple.com/us/music-video/6-foot-7-foot-feat-cory-gunz/1445830620"
            },
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
            },
        ]
    },
    {
        artist: "Cris Streetz",
        songs: [
            {
                title: "Get It Str8 (feat. Jadakiss)",
                src: "https://embed.music.apple.com/us/music-video/get-it-str8-feat-jadakiss/1674773287"
            },
        ]
    },
    {
        artist: "Critical Records Presents",
        songs: [
            {
                title: "Krack the Gates (feat. Dojia V & Mozzy)",
                src: "https://embed.music.apple.com/us/music-video/krack-the-gates-feat-dojia-v-mozzy/1640866307"
            },
        ]
    },
    {
        artist: "Cruch Calhoun",
        songs: [
            {
                title: "Black Sheep (feat. Maino)",
                src: "https://embed.music.apple.com/us/music-video/black-sheep-feat-maino/1684548042"
            },
        ]
    },
    {
        artist: "Cuban Deejay$, Black Box, Mr. Vegas & DJ Shorty",
        songs: [
            {
                title: "Ride On Time",
                src: "https://embed.music.apple.com/us/music-video/ride-on-time/1663925118"
            },
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
        artist: "D3szn",
        songs: [
            {
                title: "Red Rags (feat. YG & Mozzy)",
                src: "https://embed.music.apple.com/us/music-video/red-rags-feat-yg-mozzy/1647600743"
            },
        ]
    },
    {
        artist: "D-Block",
        birthday: [{ month: "May", day: 27, year: 1975 }, { month: "November", day: 28, year: 1974 }, { month: "September", day: 30, year: 1974 }],
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
        birthday: [{ month: "April", day: 14, year: 1974 }, { month: "December", day: 30, year: 1978 }],
        songs: [
            {
                title: "What'chu Like",
                src: "https://embed.music.apple.com/us/music-video/whatchu-like/1536521020"
            },
        ]
    },
    {
        artist: "Da Great Ape",
        songs: [
            {
                title: "Ape Mode (feat. T.I.)",
                src: "https://embed.music.apple.com/us/music-video/ape-mode-feat-t-i/1480915002" 
            },
        ]
    },
    {
        artist: "Da Inphamus Amadeuz The Punchline Academy",
        songs: [
            {
                title: "Delay The Drama (feat. Styles P & Blazin)",
                src: "https://embed.music.apple.com/us/music-video/delay-the-drama-feat-styles-p-blazin/1789418277"
            },
        ]
    },
    {
        artist: "Dame D.O.L.L.A.",
        songs: [
            {
                title: "Right One (feat. Lil Wayne & Mozzy)",
                src: "https://embed.music.apple.com/us/music-video/right-one-feat-lil-wayne-mozzy/1591074517"
            },
        ]
    },
    {
        artist: `Damian "Jr. Gong" Marley & Nas`,
        birthday: [{ month: "July", day: 21, year: 1978 }, { month: "September", day: 14, year: 1973 }],
        songs: [
            {
                title: "Dispear (Live from Wembley Stadium, 2011)",
                src: "https://embed.music.apple.com/us/music-video/dispear-live-from-wembley-stadium-2011/1445863039"
            },
            {
                title: "Nah Mean",
                src: "https://embed.music.apple.com/us/music-video/nah-mean/1445830873"
            },
        ]
    },
    {
        artist: `Damian "Jr. Gong" Marley, Nas, Ras Kassa & Yamani Watkins`,
        songs: [
            {
                title: "Land of Promise (feat. Dennis Brown)",
                src: "https://embed.music.apple.com/us/music-video/land-of-promise-feat-dennis-brown/1446013286"
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
        birthday: [{ month: "June", day: 29, year: 1983 }, { month: "July", day: 6, year: 1985 }, { month: "March", day: 22, year: 1980 }, { month: "August", day: 5, year: 1983 }, { month: "February", day: 11, year: 1984 }],
        songs: [
            {
                title: "Show Stopper (video) FEAT. YUNG JOC",
                src: "https://embed.music.apple.com/us/music-video/show-stopper-feat-yung-joc/212006328"
            },
            {
                title: "Bad Girl (feat. Missy Elliott)",
                src: "https://embed.music.apple.com/us/music-video/bad-girl-feat-missy-elliott/286844741"
            },
        ]
    },
    {
        artist: "Danny Boy & Snoop Dogg",
        songs: [
            {
                title: "My Everything",
                src: "https://embed.music.apple.com/us/music-video/my-everything/1776914504"
            },
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
        artist: "Dave East & Styles P",
        birthday: [{ month: "June", day: 3, year: 1988 }, { month: "November", day: 28, year: 1974 }],
        songs: [
            {
                title: "We Got Everything",
                src: "https://embed.music.apple.com/us/music-video/we-got-everything/1439317195"
            },
        ]
    },
    {
        artist: "David Banner",
        birthday: [{ month: "April", day: 11, year: 1974 }],
        songs: [
            {
                title: "Be With You (feat. Ludacris & Marsha Ambrosius)",
                src: "https://embed.music.apple.com/us/music-video/be-with-you-feat-ludacris-marsha-ambrosius/411008341"
            },
        ]
    },
    {
        artist: "David Guetta",
        birthday: [{ month: "November", day: 7, year: 1967 }],
        songs: [
            {
                title: "This One's for You (feat. Zara Larsson) [Official Song UEFA EURO 2016]",
                src: "https://embed.music.apple.com/us/music-video/this-ones-for-you-feat-zara-larsson-official-song-uefa/1126060284"
            },
        ]
    },
    {
        artist: "David Guetta & Bebe Rexha",
        birthday: [{ month: "November", day: 7, year: 1967 }, { month: "August", day: 30, year: 1989 }],
        songs: [
            {
                title: "I'm Good (Blue)",
                src: "https://embed.music.apple.com/us/music-video/im-good-blue/1646266064"
            },
        ]
    },
    {
        artist: "Davido",
        birthday: [{ month: "November", day: 21, year: 1992 }],
        songs: [
            {
                title: "Offa Me",
                src: "https://embed.music.apple.com/us/music-video/offa-me/1810050713"
            },
            {
                title: "Be There Still",
                src: "https://embed.music.apple.com/us/music-video/be-there-still/1812140573"
            },
        ]
    },
    {
        artist: "Davido,Sean Paul & Ding Dong",
        birthday: [{ month: "November", day: 21, year: 1992 }, { month: "January", day: 9, year: 1973 }, { month: "September", day: 29, year: 1980 }],
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
            {
                title: "Don't Call",
                src: "https://embed.music.apple.com/us/music-video/dont-call/1754590524"
            },
            {
                title: "Love You When You're Gone",
                src: "https://embed.music.apple.com/us/music-video/love-you-when-youre-gone/1631209233"
            },
        ]
    },
    {
        artist: "Daya & RL Grime",
        birthday: [{ month: "October", day: 24, year: 1998 }, { month: "February", day: 8, year: 1991 }],
        songs: [
            {
                title: "I Wanna Know (feat. Daya)",
                src: "https://embed.music.apple.com/us/music-video/i-wanna-know-feat-daya/1707062873"
            },
        ]
    },
    {
        artist: "DDG",
        birthday: [{ month: "October", day: 10, year: 1997 }],
        songs: [
            {
                title: "9 Lives (feat. Polo G & NLE Choppa)",
                src: "https://embed.music.apple.com/us/music-video/9-lives-feat-polo-g-nle-choppa/1647664273"
            },
            {
                title: "I'm Geekin",
                src: "https://embed.music.apple.com/us/music-video/im-geekin/1683655395"
            },
            {
                title: "I'm Geekin (feat. NLE Choppa & BIA) [Remix - Official Music Video]",
                src: "https://embed.music.apple.com/us/music-video/im-geekin-feat-nle-choppa-bia-remix-official-music-video/1692967159"
            },
        ]
    },
    {
        artist: "De La Soul",
        songs: [
            {
                title: "Buddy (Native Tongue Decision) [Official Music Video] [feat. Jungle Brothers, A Tribe Called Quest, Queen Latifah & Monie Love]",
                src: "https://embed.music.apple.com/us/music-video/buddy-native-tongue-decision-official-music-video-feat/1700293985"
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
        artist: "Deaton Chris Anthony",
        birthday: [{ month: "November", day: 19, year: 1993 }],
        songs: [
            {
                title: "RACECAR (feat. Clairo, Coco & Clair Clair)",
                src: "https://embed.music.apple.com/us/music-video/racecar-feat-clairo-coco-clair-clair/1481880440"
            },
        ]
    },
    {
        artist: "Deborah Cox",
        birthday: [{ month: "July", day: 13, year: 1974 }],
        songs: [
            {
                title: "Up & Down (feat. Jadakiss) [Allstar Remix]",
                src: "https://embed.music.apple.com/us/music-video/up-down-feat-jadakiss-allstar-remix/1299962514"
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
            {
                title: "Can You Take It (feat. Babyface Ray)",
                src: "https://embed.music.apple.com/us/music-video/can-you-take-it-feat-babyface-ray/1778536445"
            },
            {
                title: "MIAMI FLOW",
                src: "https://embed.music.apple.com/us/music-video/miami-flow/1771690167"
            },
            {
                title: "BNB",
                src: "https://embed.music.apple.com/us/music-video/bnb/1769246535"
            },
            {
                title: "Me U & Hennessy (Video)",
                src: "https://embed.music.apple.com/us/music-video/me-u-hennessy-video/1286493170"
            },
        ]
    },
    {
        artist: "DeJ Loaf, Teni & Cheekychizzy",
        songs: [
            {
                title: "Plese Don't Go",
                src: "https://embed.music.apple.com/us/music-video/plese-dont-go/1710219002"
            },
        ]
    },
    {
        artist: "Dem Franchize Boyz, Jermaine Dupri, Da Brat & Bow Wow",
        songs: [
            {
                title: "I Think They Like Me (feat. Jermaine Dupri, Da Brat & Bow Wow) [BET edit]",
                src: "https://embed.music.apple.com/us/music-video/i-think-they-like-me-feat-jermaine-dupri-da-brat-bow/744191487"
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
        birthday: [{ month: "September", day: 4, year: 1981 }, { month: "November", day: 1, year: 1981 }, { month: "February", day: 11, year: 1981 }, , { month: "March", day: 11, year: 1981 }, { month: "May", day: 3, year: 1981 }, , { month: "July", day: 23, year: 1979 }],
        songs: [
            {
                title: "8 Days of Christmas",
                src: "https://embed.music.apple.com/us/music-video/8-days-of-christmas/1490004706"
            }, 
            {
                title: "Bug a Boo (TWOTW 20 Edition)",
                src: "https://embed.music.apple.com/us/music-video/bug-a-boo-twotw-20-edition/1474291295"
            },
            {
                title: "Bills, Bills, Bills (TWOTW 20 Edition)",
                src: "https://embed.music.apple.com/us/music-video/bills-bills-bills-twotw-20-edition/1474292695"
            }, 
            {
                title: "Say My Name (TWOTW 20 Edition)",
                src: "https://embed.music.apple.com/us/music-video/say-my-name-twotw-20-edition/1474020243"
            },  
            {
                title: "Bootylicious",
                src: "https://embed.music.apple.com/us/music-video/bootylicious/661101597"
            },  
            {
                title: "Bills, Bills, Bills",
                src: "https://embed.music.apple.com/us/music-video/bills-bills-bills/659677249"
            },
            {
                title: "Cater 2 U",
                src: "https://embed.music.apple.com/us/music-video/cater-2-u/659678445"
            }, 
            {
                title: "Soldier (feat. T.I. & Lil Wayne)",
                src: "https://embed.music.apple.com/us/music-video/soldier-feat-t-i-lil-wayne/708696441"
            }, 
            {
                title: "Girl",
                src: "https://embed.music.apple.com/us/music-video/girl/659677841"
            }, 
            {
                title: "Jumpin', Jumpin'",
                src: "https://embed.music.apple.com/us/music-video/jumpin-jumpin/659677414"
            },
            {
                title: "No, No, No, Pt. 1",
                src: "https://embed.music.apple.com/us/music-video/no-no-no-pt-1/659677022"
            },
            {
                title: "No, No, No, Pt. 2 (feat. Wyclef Jean)",
                src: "https://embed.music.apple.com/us/music-video/no-no-no-pt-2-feat-wyclef-jean/659677024"
            }, 
            {
                title: "Stand Up for Love",
                src: "https://embed.music.apple.com/us/music-video/stand-up-for-love/659677991"
            }, 
            {
                title: "8 Days of Christmas (Live Version)",
                src: "https://embed.music.apple.com/us/music-video/8-days-of-christmas-live-version/297411458"
            },
            {
                title: "Lose My Breath",
                src: "https://embed.music.apple.com/us/music-video/lose-my-breath/708695465"
            }, 
            {
                title: "Say My Name",
                src: "https://embed.music.apple.com/us/music-video/say-my-name/708696119"
            }, 
            {
                title: "With Me, Pt. 1",
                src: "https://embed.music.apple.com/us/music-video/with-me-pt-1/1380425245"
            },              
        ]
    },
    {
        artist: "Destiny's Child & Da Brat",
        birthday: [{ month: "September", day: 4, year: 1981 }, { month: "November", day: 1, year: 1981 }, { month: "February", day: 11, year: 1981 }, , { month: "March", day: 11, year: 1981 }, { month: "May", day: 3, year: 1981 }, , { month: "July", day: 23, year: 1979 }, { month: "April", day: 14, year: 1974 }],
        songs: [
            {
                title: "Survivor",
                src: "https://embed.music.apple.com/us/music-video/survivor/659677468"
            },
        ]
    },
      {
        artist: "Destiny's Child & Missy Elliott",
        birthday: [{ month: "September", day: 4, year: 1981 }, { month: "November", day: 1, year: 1981 }, { month: "February", day: 11, year: 1981 }, , { month: "March", day: 11, year: 1981 }, { month: "May", day: 3, year: 1981 }, , { month: "July", day: 23, year: 1979 }, { month: "July", day: 1, year: 1971 }],
        songs: [
            {
                title: "Bootylicious (Remix Version)",
                src: "https://embed.music.apple.com/us/music-video/bootylicious-remix-version/659677551"
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
        artist: "Dexta Daps, Cham & Bounty Killer",
        songs: [
            {
                title: "Slow Motion",
                src: "https://embed.music.apple.com/us/music-video/slow-motion/1718325189"
            },
        ]
    },
    {
        artist: "Diamond D",
        songs: [
            {
                title: "Survive or Die (feat. Fat Joe, Fred the Godson & Raekwon)",
                src: "https://embed.music.apple.com/us/music-video/survive-or-die-feat-fat-joe-fred-the-godson-raekwon/1502313444"
            },
        ]
    },
    {
        artist: "Diddy - Dirty Money, Rick Ross & T.I.",
        birthday: [{ month: "November", day: 4, year: 1969 }, { month: "August", day: 5, year: 1983 }, { month: "August", day: 13, year: 1982 }, { month: "January", day: 28, year: 1976 }, { month: "September", day: 25, year: 1980 }], 
        songs: [
            {
                title: "Hello Good Morning (feat. Rick Ross & T.I.) [Final Version]",
                src: "https://embed.music.apple.com/us/music-video/hello-good-morning-feat-rick-ross-t-i-final-version/1445737125" 
            },
        ]
    },
    {
        artist: "Diddy - Dirty Money & Rick Ross",
        birthday: [{ month: "November", day: 4, year: 1969 }, { month: "August", day: 5, year: 1983 }, { month: "August", day: 13, year: 1982 }, { month: "January", day: 28, year: 1976 }],
        songs: [
            {
                title: "Angels (Remix)",
                src: "https://embed.music.apple.com/us/music-video/angels-remix/1445892898"
            },
        ]
    },
    {
        artist: "Diddy, Bryson Tiller, Ashanti & Yung Miami",
        birthday: [{ month: "November", day: 4, year: 1969 }, { month: "January", day: 2, year: 1993 }, { month: "October", day: 13, year: 1980 }, { month: "February", day: 11, year: 1994 }],
        songs: [
            {
                title: "Gotta Move On (Queens Remix)",
                src: "https://embed.music.apple.com/us/music-video/gotta-move-on-queens-remix/1651351332"
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
            },
            {
                title: "Thank You (Live In Concert with BBC Radio 2, 2019)",
                src: "https://embed.music.apple.com/us/music-video/thank-you-live-in-concert-with-bbc-radio-2-2019/1783757796"
            },
            {
                title: "Here With Me (Live In Concert with BBC Radio 2, 2019)",
                src: "https://embed.music.apple.com/us/music-video/here-with-me-live-in-concert-with-bbc-radio-2-2019/1783757295"
            },
            {
                title: "Thank You (Live from Later With Jools Holland, 2001)",
                src: "https://embed.music.apple.com/us/music-video/thank-you-live-from-later-with-jools-holland-2001/1719277100"
            },
            {
                title: "Here With Me (Live from the BRITs, 2002)",
                src: "https://embed.music.apple.com/us/music-video/here-with-me-live-from-the-brits-2002/1655653907"
            },
            {
                title: "Here With Me (Live from Later With Jools Holland, 2001)",
                src: "https://embed.music.apple.com/us/music-video/here-with-me-live-from-later-with-jools-holland-2001/1655115717"
            },
            {
                title: "Take You Home",
                src: "https://embed.music.apple.com/us/music-video/take-you-home/1711293242"
            },
            {
                title: "Here With Me (Top of the Pops 16/02/2001)",
                src: "https://embed.music.apple.com/us/music-video/here-with-me-top-of-the-pops-16-02-2001/1609970194"
            },
            {
                title: "Thank You (Top of the Pops 23/06/2001)",
                src: "https://embed.music.apple.com/us/music-video/thank-you-top-of-the-pops-23-06-2001/1610021150"
            },
            {
                title: "Take My Hand (Live at Brixton Academy)",
                src: "https://embed.music.apple.com/us/music-video/take-my-hand-live-at-brixton-academy/1279881243"
            },
            {
                title: "White Flag (Live at Brixton Academy)",
                src: "https://embed.music.apple.com/us/music-video/white-flag-live-at-brixton-academy/1279715391"
            },
            {
                title: "White Flag (Top Of The Pops 2003)",
                src: "https://embed.music.apple.com/us/music-video/white-flag-top-of-the-pops-2003/1536498869"
            },
            {
                title: "Thank You (Google+ Live Session)",
                src: "https://embed.music.apple.com/us/music-video/thank-you-google-live-session/1609902039"
            },
            {
                title: "White Flag (Google+ Live Session)",
                src: "https://embed.music.apple.com/us/music-video/white-flag-google-live-session/1609928973"
            },
            {
                title: "Thank You (Live at Brixton Academy)",
                src: "https://embed.music.apple.com/us/music-video/thank-you-live-at-brixton-academy/1282196717"
            },
            {
                title: "Here With Me (Live at Brixton Academy)",
                src: "https://embed.music.apple.com/us/music-video/here-with-me-live-at-brixton-academy/1282196079"
            },
            {
                title: "Sand In My Shoes (Live at Brixton Academy)",
                src: "https://embed.music.apple.com/us/music-video/sand-in-my-shoes-live-at-brixton-academy/1282197695"
            },
            {
                title: "Thank You (Acoustic) [Live]",
                src: "https://embed.music.apple.com/us/music-video/thank-you-acoustic-live/1281369170"
            },
            {
                title: "Here With Me",
                src: "https://embed.music.apple.com/us/music-video/here-with-me/1720031578"
            },
            {
                title: "Let's Do the Things We Normally Do (Short Film Version)",
                src: "https://embed.music.apple.com/us/music-video/lets-do-the-things-we-normally-do-short-film-version/306100985"
            },
            {
                title: "Sand In My Shoes",
                src: "https://embed.music.apple.com/us/music-video/sand-in-my-shoes/548916593"
            },
            {
                title: "White Flag",
                src: "https://embed.music.apple.com/us/music-video/white-flag/1705247975"
            },
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
        birthday: [{ month: "May", day: 16, year: 1982 }, { month: "December", day: 2, year: 1985 }, { month: "February", day: 17, year: 1981 }],
        songs: [
            {
                title: "Best Friend's Ass",
                src: "https://embed.music.apple.com/us/music-video/best-friends-ass/1467972325"
            }
        ]
    },
     {
        artist: "Diplo & Damian Lazarus",
        birthday: [{ month: "November", day: 10, year: 1978 }, { month: "November", day: 15, year: 1978 } ],
        songs: [
            {
                title: "Don't Be Afraid (feat. Jungle)",
                src: "https://embed.music.apple.com/us/music-video/dont-be-afraid-feat-jungle/1573569393"
            },
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
            {
                title: "Day Dreaming (feat. Akon, Snoop Dogg & T.I.)",
                src: "https://embed.music.apple.com/us/music-video/day-dreaming-feat-akon-snoop-dogg-t-i/314314160"
            },
            {
                title: "We in This (feat. Ludacris, Young Jeezy, T.I. & Future)",
                src: "https://embed.music.apple.com/us/music-video/we-in-this-feat-ludacris-young-jeezy-t-i-future/528054053" 
            },
        ]
    },
    {
        artist: "DJ Felli Fel",
        birthday: [{ month: "September", day: 3, year: 1970 }],
        songs: [
            {
                title: "Get Buck In Here (feat. Diddy, Akon, Ludacris & Lil Jon)",
                src: "https://embed.music.apple.com/us/music-video/get-buck-in-here-feat-diddy-akon-ludacris-lil-jon/1446735713"
            },
            {
                title: "Boomerang (feat. Akon, Pitbull & Jermaine Dupri)",
                src: "https://embed.music.apple.com/us/music-video/boomerang-feat-akon-pitbull-jermaine-dupri/450564801"
            },
        ]
    },
    {
        artist: "DJ Infamous",
        songs: [
            {
                title: "Double Cup",
                src: "https://embed.music.apple.com/us/music-video/double-cup/836314451"
            },
        ]
    },
    {
        artist: "DJ Kay Slay",
        birthday: [{ month: "August", day: 14, year: 1966 }],
        songs: [
            {
                title: "The Jungle (feat. Snoop Dogg, Too $hort, Sheek Louch & Papoose)",
                src: "https://embed.music.apple.com/us/music-video/the-jungle-feat-snoop-dogg-too-%24hort-sheek-louch-papoose/1598629194"
            },
            {
                title: "Thug Luv (Director's Cut) [feat. Ray J, Maino, Papoose & Red Café) [Director's Cut]",
                src: "https://embed.music.apple.com/us/music-video/thug-luv-directors-cut-feat-ray-j-maino-papoose-red/352630291"
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
            {
                title: "JADAKISS INTERLUDE (feat. Jadakiss)",
                src: "https://embed.music.apple.com/us/music-video/jadakiss-interlude-feat-jadakiss/1643168382"
            },
            {
                title: "THESE STREETS KNOW MY NAME (feat. Skillibeng, Buju Banton, Capleton, Bounty Killer & Sizzla)",
                src: "https://embed.music.apple.com/us/music-video/these-streets-know-my-name-feat-skillibeng-buju-banton/1642068836"
            },
            {
                title: "Holy Mountain (feat. Buju Banton, Sizzla, Mavado & 070 Shake)",
                src: "https://embed.music.apple.com/us/music-video/holy-mountain-feat-buju-banton-sizzla-mavado-070-shake/1463900664"
            },
            {
                title: "(Intro) I'm so Grateful [feat. Sizzla]",
                src: "https://embed.music.apple.com/us/music-video/intro-im-so-grateful-feat-sizzla/1251751738"
            },
            {
                title: "WE GOING CRAZY (feat. H.E.R. & Migos)",
                src: "https://embed.music.apple.com/us/music-video/we-going-crazy-feat-h-e-r-migos/1566275272"
            },
            {
                title: "SORRY NOT SORRY (feat. Nas, JAY-Z & James Fauntleroy) [Harmonies by The Hive]",
                src: "https://embed.music.apple.com/us/music-video/sorry-not-sorry-feat-nas-jay-z-james-fauntleroy-harmonies/1565477690"
            },
            {
                title: "It's Secured (feat. Nas & Travis Scott)",
                src: "https://embed.music.apple.com/us/music-video/its-secured-feat-nas-travis-scott/1252092865"
            },
            {
                title: "Nas Album Done (feat. Nas)",
                src: "https://embed.music.apple.com/us/music-video/nas-album-done-feat-nas/1152676561"
            },
        ]
    },
    {
        artist: "DJ Khaled featuring Akon, T.I., Rick Ross, Fat Joe, Baby & Lil Wayne",
        songs: [
            {
                title: "We Takin Over (Extended Version)",
                src: "https://embed.music.apple.com/us/music-video/we-takin-over-extended-version/251136698"
            }
        ]
    },
    {
        artist: "Dj Norie, Shaggy & Wayne Wonder",
        songs: [
            {
                title: "The One",
                src: "https://embed.music.apple.com/us/music-video/the-one/1733719695"
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
            },
            {
                title: "No Love For Me (feat. Swizz Beatz & Drag-On)",
                src: "https://embed.music.apple.com/us/music-video/no-love-for-me-feat-swizz-beatz-drag-on/1714510363"
            },
            {
                title: "No Sunshine",
                src: "https://embed.music.apple.com/us/music-video/no-sunshine/1584069949"
            },
            {
                title: "I Don't Dance (feat. Machine Gun Kelly)",
                src: "https://embed.music.apple.com/us/music-video/i-dont-dance-feat-machine-gun-kelly/546707745"
            },
            {
                title: "Party Up (Up In Here)",
                src: "https://embed.music.apple.com/us/music-video/party-up-up-in-here/1445864351"
            },
            {
                title: "Lord Give Me a Sign",
                src: "https://embed.music.apple.com/us/music-video/lord-give-me-a-sign/207701092"
            },
            {
                title: "We In Here",
                src: "https://embed.music.apple.com/us/music-video/we-in-here/400036416"
            },
            {
                title: "How's It Goin' Down",
                src: "https://embed.music.apple.com/us/music-video/hows-it-goin-down/1445835938"
            },
            {
                title: "Ruff Ryders' Anthem",
                src: "https://embed.music.apple.com/us/music-video/ruff-ryders-anthem/1445738400"
            },
            {
                title: "We Right Here",
                src: "https://embed.music.apple.com/us/music-video/we-right-here/1446731910"
            },
            {
                title: "What's My Name",
                src: "https://embed.music.apple.com/us/music-video/whats-my-name/1446732955"
            },
            {
                title: "Who We Be",
                src: "https://embed.music.apple.com/us/music-video/who-we-be/1446856652"
            },
            {
                title: "X Gon' Give It to Ya",
                src: "https://embed.music.apple.com/us/music-video/x-gon-give-it-to-ya/1467924425"
            },
        ]
    },
      {
        artist: "Doechii",
        birthday: [{ month: "August", day: 14, year: 1998 }],
        songs: [
            {
                title: "Anxiety",
                src: "https://embed.music.apple.com/us/music-video/anxiety/1809308768"
            },
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
        birthday: [{ month: "October", day: 21, year: 1995 }, { month: "November", day: 19, year: 1989 }],
        songs: [
            {
                title: "Juicy (Official Video)",
                src: "https://embed.music.apple.com/us/music-video/juicy/1560225429"
            },
        ]
    },
    {
        artist: "Domino & Snoop Dogg",
        songs: [
            {
                title: "Baby So West Coast (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/baby-so-west-coast-feat-snoop-dogg/1537622760"
            },
        ]
    },
    {
        artist: "Don Toliver",
        birthday: [{ month: "June", day: 12, year: 1994 }],
        songs: [
            {
                title: "BROTHER STONE (feat. KODAK BLACK)",
                src: "https://embed.music.apple.com/us/music-video/brother-stone-feat-kodak-black/1752748296"
            },
             {
                title: "FWU",
                src: "https://embed.music.apple.com/us/music-video/fwu/1823121172"
            },
            {
                title: "Lose My Mind (feat. Doja Cat) [From F1® The Movie]",
                src: "https://embed.music.apple.com/us/music-video/lose-my-mind-feat-doja-cat-from-f1-the-movie/1811622125"
            },
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
        artist: "Dorrough Music",
        birthday: [{ month: "October", day: 28, year: 1986 }],
        songs: [
            {
                title: "Get Big (Remix) [feat. Maino, Shawty Lo, Diamond, Bun B, Yo Gotti, Diddy & DJ Drama]",
                src: "https://embed.music.apple.com/us/music-video/get-big-remix-feat-maino-shawty-lo-diamond-bun-b-yo/1644142073"
            },
        ]
    },
    {
        artist: "DOPE LEMON",
        birthday: [{ month: "April", day: 27, year: 1986 }],
        songs: [
            {
                title: "Kimosabè",
                src: "https://embed.music.apple.com/us/music-video/kimosab%C3%A8/1691871868"
            },
             {
                title: "Sugarcat",
                src: "https://embed.music.apple.com/us/music-video/sugarcat/1804606735"
            },
        ]
    },
    {
        artist: "DRAM",
        birthday: [{ month: "August", day: 3, year: 1988 }],
        songs: [
            {
                title: "The Lay Down (feat. H.E.R. & WATT)",
                src: "https://embed.music.apple.com/us/music-video/the-lay-down-feat-h-e-r-watt/1476519879"
            },
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
        birthday: [{ month: "February", day: 18, year: 1965 }, { month: "October", day: 17, year: 1972 }],
        songs: [
            {
                title: "Guilty Conscience (Director's Cut)",
                src: "https://embed.music.apple.com/us/music-video/guilty-conscience-directors-cut/1445846801"
            },
        ]
    },
    {
        artist: "Dr. Dre, Akon & Snoop Dogg",
        birthday: [{ month: "February", day: 18, year: 1965 }, { month: "April", day: 16, year: 1973 }, { month: "October", day: 20, year: 1971 }],
        songs: [
            {
                title: "Kush (feat. Akon & Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/kush-feat-akon-snoop-dogg/1445852639"
            },
        ]
    },
    {
        artist: "Dr. Dre, Snoop Dogg, Eminem, Mary J. Blige, Kendrick Lamar & 50 Cent",
        birthday: [{ month: "February", day: 18, year: 1965 }, { month: "October", day: 20, year: 1971 }, { month: "October", day: 17, year: 1972 }, { month: "January", day: 11, year: 1971 }, { month: "June", day: 17, year: 1987 }, { month: "July", day: 6, year: 1975 }],
        songs: [
            {
                title: "Pepsi Super Bowl LVI Halftime Show (Live)",
                src: "https://embed.music.apple.com/us/music-video/pepsi-super-bowl-lvi-halftime-show-live/1609894651"
            }
        ]
    },
    {
        artist: "Dr. Dre featuring Snoop Dogg, Kurupt & Nate Dogg",
        birthday: [{ month: "February", day: 18, year: 1965 }, { month: "October", day: 20, year: 1971 }, { month: "November", day: 23, year: 1972 }, { month: "August", day: 19, year: 1969 }],
        songs: [
            {
                title: "The Next Episode (Edited Version)",
                src: "https://embed.music.apple.com/us/music-video/the-next-episode-edited-version/1445837399"
            },
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
             {
                title: "NOKIA",
                src: "https://embed.music.apple.com/us/music-video/nokia/1805946437"
            },
              {
                title: "End of the World",
                src: "https://embed.music.apple.com/us/music-video/end-of-the-world/1806134050"
            },
        ]
    },
    {
        artist: "Drake & 21 Savage",
        birthday: [{ month: "October", day: 24, year: 1986 }, { month: "October", day: 22, year: 1992 }],
        songs: [
            {
                title: "Spin Bout U",
                src: "https://embed.music.apple.com/us/music-video/spin-bout-u/1674251945"
            },
        ]
    },
    {
        artist: "Drake & Nicki Minaj",
        birthday: [{ month: "October", day: 24, year: 1986 }, { month: "December", day: 8, year: 1982 }],
        songs: [
            {
                title: "Moment 4 Life (feat. Drake)",
                src: "https://embed.music.apple.com/us/music-video/moment-4-life-feat-drake/1446741240"
            },
        ]
    },
    {
        artist: "Drake & Rihanna",
        birthday: [{ month: "October", day: 24, year: 1986 }, { month: "February", day: 20, year: 1988 }],
        songs: [
            {
                title: "What's My Name? (feat. Drake)",
                src: "https://embed.music.apple.com/us/music-video/whats-my-name-feat-drake/1445826170"
            },
        ]
    },
    {
        artist: "Drake,Kanye West,Lil Wayne & Eminem",
        birthday: [{ month: "October", day: 24, year: 1986 }, { month: "June", day: 8, year: 1977 }, { month: "September", day: 27, year: 1982 }, { month: "October", day: 17, year: 1972 }],
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
            },
        ]
    },
    {
        artist: "Dreamville", 
        songs: [
            {
                title: "Down Bad (feat. JID, Bas, J. Cole, EARTHGANG & Young Nudy)",
                src: "https://embed.music.apple.com/us/music-video/down-bad-feat-jid-bas-j-cole-earthgang-young-nudy/1484370652"
            },
        ]
    },
    {
        artist: "Dreamville, JID & J. Cole", 
        songs: [
            {
                title: "Stick (feat. Kenny Mason & Sheck Wes)",
                src: "https://embed.music.apple.com/us/music-video/stick-feat-kenny-mason-sheck-wes/1635426422"
            },
        ]
    },
     {
        artist: "Dreezy",
        birthday: [{ month: "March", day: 28, year: 1994 }],
        songs: [
            {
                title: "Close to You (feat. T-Pain)",
                src : "https://embed.music.apple.com/us/music-video/close-to-you-feat-t-pain/1444604207"
            },
        ]
    },
    {
        artist: "Drewski",
        birthday: [{ month: "August", day: 22, year: 1987 }],
        songs: [

            {
                title: "Water (feat. DreamDoll, Molly Brazy & Rubi Rose)",
                src: "https://embed.music.apple.com/us/music-video/water-feat-dreamdoll-molly-brazy-rubi-rose/1521323897"
            },
        ]
    },
    {
        artist: "DTP",
        songs: [

            {
                title: "Celebrity Chick (feat. Chingy, Ludacris, Small World & Steph Jones)",
                src: "https://embed.music.apple.com/us/music-video/celebrity-chick-feat-chingy-ludacris-small-world-steph/1445835995"
            },
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
        artist: "Dunw3ll & Vybz Kartel",
        songs: [
            {
                title: "Amazing (feat. Stefflon Don)",
                src: "https://embed.music.apple.com/us/music-video/amazing-feat-stefflon-don/1653135672"
            },
        ]
    },
    {
        artist: "Dyce Payso",
        songs: [
            {
                title: "Bling Bling (feat. Jim Jones)",
                src: "https://embed.music.apple.com/us/music-video/bling-bling-feat-jim-jones/1659108999"
            },
        ]
    },
    {
        artist: "Dyce Payso, Jim Jones & Keen Streetz",
        songs: [
            {
                title: "Go Girl",
                src: "https://embed.music.apple.com/us/music-video/go-girl/1630405313"
            },
        ]
    },
    {
        artist: "Dylan Reese & Musiq Soulchild",
        songs: [
            {
                title: "Lose Your Love",
                src: "https://embed.music.apple.com/us/music-video/lose-your-love/1608718762"
            },
        ]
    },
    {
        artist: "E-40",
        birthday: [{ month: "November", day: 15, year: 1967 }],
        songs: [
            {
                title: "Rapper's Ball (feat. Too $hort and K-Ci)",
                src: "https://embed.music.apple.com/us/music-video/rappers-ball-feat-too-%24hort-and-k-ci/267970182"
            },
        ]
    },
    {
        artist: "E-Dee",
        songs: [
            {
                title: "Needed Me (alone) [feat. Wayne Wonder]",
                src: "https://embed.music.apple.com/us/music-video/needed-me-alone-feat-wayne-wonder/1536016757"
            },
        ]
    },
    {
        artist: "EARTHGANG & Musiq Soulchild",
        songs: [
            {
                title: "AMEN",
                src: "https://embed.music.apple.com/us/music-video/amen/1616879067"
            },
        ]
    },
      {
        artist: "EARTHGANG, Spillage Village & T-Pain",
        songs: [
            {
                title: "Love You More",
                src: "https://embed.music.apple.com/us/music-video/love-you-more/1780115075"
            },
        ]
    },
    {
        artist: "Ed Sheeran",
        birthday: [{ month: "February", day: 17, year: 1991 }],
        songs: [
            {
                title: "Azizam",
                src: "https://embed.music.apple.com/us/music-video/azizam/1806310638"
            },
            {
                title: "Sapphire",
                src: "https://embed.music.apple.com/us/music-video/sapphire/1818340526"
            },
        ]
    },
    {
        artist: "Edd Stark & Maino",
        songs: [
            {
                title: "Best Alone",
                src: "https://embed.music.apple.com/us/music-video/best-alone/1636660203"
            },
        ]
    },
    {
        artist: "El DeBarge & Faith Evans",
        birthday: [{ month: "June", day: 4, year: 1961 }, { month: "June", day: 10, year: 1973 }],
        songs: [
            {
                title: "Lay With You (feat. Faith Evans)",
                src: "https://embed.music.apple.com/us/music-video/lay-with-you-feat-faith-evans/1445753890"
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
        artist: "Elbizzle Tha Flame Spitta",
        songs: [
            {
                title: "Power of She (feat. Sizzla Kalonji)",
                src: "https://embed.music.apple.com/us/music-video/power-of-she-feat-sizzla-kalonji/1669687834"
            },
        ]
    },
    {
        artist: "Elephant Man",
        songs: [
            {
                title: "Neat & Tight",
                src: "https://embed.music.apple.com/us/music-video/neat-tight/1684333266"
            },
            {
                title: "Cool Reminder",
                src: "https://embed.music.apple.com/us/music-video/cool-reminder/1659782416" 
            },
            {
                title: "Dancers Segment (feat. Horro General)",
                src: "https://embed.music.apple.com/us/music-video/dancers-segment-feat-horro-general/1607563673" 
            },
            {
                title: "Watch Watch (feat. Breeza)",
                src: "https://embed.music.apple.com/us/music-video/watch-watch-feat-breeza/1524825681" 
            },
            {
                title: "Jesus Take The Wheel",
                src: "https://embed.music.apple.com/us/music-video/jesus-take-the-wheel/1461152005" 
            },
            {
                title: "Oh Nah Nah",
                src: "https://embed.music.apple.com/us/music-video/oh-nah-nah/1382578294" 
            },
            {
                title: "Miley Cyrus (Twerk) [Clean]",
                src: "https://embed.music.apple.com/us/music-video/miley-cyrus-twerk-clean/777012408"  
            },
            {
                title: "Bad Man Style",
                src: "https://embed.music.apple.com/us/music-video/bad-man-style/587977704" 
            },
        ]
    },
    {
        artist: "Elephant Man, DJ Mac & CrashDummy",
        songs: [
            {
                title: "Workout",
                src: "https://embed.music.apple.com/us/music-video/workout/1756781486" 
            },
        ]
    },
    {
        artist: "Elephant Man & Kat Deluna",
        songs: [
            {
                title: "Whine Up (English Version)",
                src: "https://embed.music.apple.com/us/music-video/whine-up-english-version/263175176" 
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
            },
            {
                title: "Like A Saviour (Live At Koko)",
                src: "https://embed.music.apple.com/us/music-video/like-a-saviour-live-at-koko/1680753087"
            },
            {
                title: "By The End Of The Night (Live)",
                src: "https://embed.music.apple.com/us/music-video/by-the-end-of-the-night-live/1680754172"
            },
            {
                title: "Like A Saviour",
                src: "https://embed.music.apple.com/us/music-video/like-a-saviour/1668086645"
            },
            {
                title: "Fields Of Gold",
                src: "https://embed.music.apple.com/us/music-video/fields-of-gold/1660756621"
            },
            {
                title: "Easy Lover (feat. Big Sean)",
                src: "https://embed.music.apple.com/us/music-video/easy-lover-feat-big-sean/1634632151"
            },
            {
                title: "Love I'm Given",
                src: "https://embed.music.apple.com/us/music-video/love-im-given/1528183275"
            },
            {
                title: `Still Falling for You (From "Bridget Jones's Baby" Original Soundtrack)`,
                src: "https://embed.music.apple.com/us/music-video/still-falling-for-you-from-bridget-joness-baby-original/1444877208"
            },
            {
                title: "Something In the Way You Move",
                src: "https://embed.music.apple.com/us/music-video/something-in-the-way-you-move/1444901847"
            },
            {
                title: "Love Me Like You Do (Abbey Road Performance)",
                src: "https://embed.music.apple.com/us/music-video/love-me-like-you-do-abbey-road-performance/1445147103"
            },
            {
                title: "Love Me Like You Do",
                src: "https://embed.music.apple.com/us/music-video/love-me-like-you-do/1445130329"
            },
            {
                title: "Goodness Gracious",
                src: "https://embed.music.apple.com/us/music-video/goodness-gracious/1444877784"
            },
            {
                title: "Lights",
                src: "https://embed.music.apple.com/us/music-video/lights/1445825830"
            },
            {
                title: "Your Song",
                src: "https://embed.music.apple.com/us/music-video/your-song/1445832933"
            },
        ]
    },
    {
        artist: "Ellie Goulding, Diplo & Swae Lee",
        birthday: [{ month: "December", day: 30, year: 1986 }, { month: "November", day: 10, year: 1978 }, { month: "June", day: 7, year: 1993 }],
        songs: [
            {
                title: "Close To Me",
                src: "https://embed.music.apple.com/us/music-video/close-to-me/1523531833"
            }
        ]
    },
    {
        artist: "Elvis Presley, Post Malone, Shawn Mendes, Darius Rucker, Blake Shelton & Carrie Underwood",
        songs: [
            {
                title: "If I Can Dream (from the NBC Elvis All-Star Tribute)",
                src: "https://embed.music.apple.com/us/music-video/if-i-can-dream-from-the-nbc-elvis-all-star-tribute/1451268268"
            }
        ]
    },
    {
        artist: "Emii",
        birthday: [{ month: "December", day: 4, year: 1984 }],
        songs: [
            {
                title: "Mr. Romeo (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/mr-romeo-feat-snoop-dogg/421520126"
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
        birthday: [{ month: "October", day: 17, year: 1972 }, { month: "February", day: 23, year: 1986 }],
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
        artist: "Eric B. & Rakim",
        birthday: [{ month: "November", day: 8, year: 1963 }, { month: "January", day: 28, year: 1968 }],
        songs: [
            {
                title: "Don't Sweat the Technique",
                src: "https://embed.music.apple.com/us/music-video/dont-sweat-the-technique/1445827235"
            },
            {
                title: "Let The Rhythm Hit 'Em",
                src: "https://embed.music.apple.com/us/music-video/let-the-rhythm-hit-em/1561644411"
            },
            {
                title: "Follow the Leader",
                src: "https://embed.music.apple.com/us/music-video/follow-the-leader/1446738559"
            },
            {
                title: "Microphone Fiend",
                src: "https://embed.music.apple.com/us/music-video/microphone-fiend/1446008633"
            },
            {
                title: "I Ain't No Joke",
                src: "https://embed.music.apple.com/us/music-video/i-aint-no-joke/1445848164"
            },
            {
                title: "Move the Crowd",
                src: "https://embed.music.apple.com/us/music-video/move-the-crowd/1446005060"
            },
            {
                title: "Paid In Full",
                src: "https://embed.music.apple.com/us/music-video/paid-in-full/1458907913"
            },
        ]
    },
    {
        artist: "Eric Bellinger",
        songs: [
            {
                title: "Gang Slide (feat. Mozzy)",
                src: "https://embed.music.apple.com/us/music-video/gang-slide-feat-mozzy/1744391205"
            }
        ]
    },
    {
        artist: "Erick Sermon",
        birthday: [{ month: "November", day: 25, year: 1968 }],
        songs: [
            {
                title: "Make Room (feat. Sheek Louch & Joell Ortiz)",
                src: "https://embed.music.apple.com/us/music-video/make-room-feat-sheek-louch-joell-ortiz/1445115382"
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
            },
            {
                title: "The Streets",
                src: "https://embed.music.apple.com/us/music-video/the-streets/1793242153"
            },
        ]
    },
    {
        artist: "Esco",
        songs: [
            {
                title: "Bounce Suh Riddim Medley (feat. Bounty Killer, Pamputtae, Iyara & Sanjay & Shelly Belly)",
                src: "https://embed.music.apple.com/us/music-video/bounce-suh-riddim-medley-feat-bounty-killer-pamputtae/1445326440"
            }
        ]
    },
    {
        artist: "Essie Wilson",
        songs: [
            {
                title: "Do Me Right (feat. Jadakiss)",
                src: "https://embed.music.apple.com/us/music-video/do-me-right-feat-jadakiss/1652632758"
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
        birthday: [{ month: "December", day: 25, year: 1954 }, { month: "September", day: 9, year: 1952 }],
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
            },
            {
                title: "Gotta Man (Revised Version) [Edited]",
                src: "https://embed.music.apple.com/us/music-video/gotta-man-revised-version-edited/1445831824"
            },
            {
                title: "Satisfaction (Edited Version)",
                src: "https://embed.music.apple.com/us/music-video/satisfaction-edited-version/1445894117"
            },
        ]
    },
      {
        artist: "Eyedress",
        birthday: [{ month: "May", day: 28, year: 1990 }],
        songs: [
            {
                title: "Something About You (feat. Dent May)",
                src: "https://embed.music.apple.com/us/music-video/something-about-you-feat-dent-may/1601866943"
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
        artist: "Fabolous & Dave East",
        birthday: [{ month: "November", day: 18, year: 1977 }, { month: "June", day: 3, year: 1988 }],
        songs: [
            {
                title: "Make Some Money (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/make-some-money-feat-snoop-dogg/1598982141"
            },
        ]
    },
    {
        artist: "Fabolous & JAY-Z",
        birthday: [{ month: "November", day: 18, year: 1977 }, { month: "December", day: 4, year: 1969 }],
        songs: [
            {
                title: "Money Goes, Honey Stay (When the Money Goes Remix)",
                src: "https://embed.music.apple.com/us/music-video/money-goes-honey-stay-when-the-money-goes-remix/1445854489"
            },
        ]
    },
    {
        artist: "Fabolous & Jadakiss",
        birthday: [{ month: "November", day: 18, year: 1977 }, { month: "May", day: 27, year: 1975 }],
        songs: [
            {
                title: "Theme Music (feat. Swizz Beatz)",
                src: "https://embed.music.apple.com/us/music-video/theme-music-feat-swizz-beatz/1444858281"
            },
            {
                title: "Soul Food",
                src: "https://embed.music.apple.com/us/music-video/soul-food/1444863616"
            },
            {
                title: "F vs J Intro",
                src: "https://embed.music.apple.com/us/music-video/f-vs-j-intro/1444865363"
            },
        ]
    },
    {
        artist: "Fabolous featuring Ne-Yo",
        birthday: [{ month: "November", day: 18, year: 1977 }, { month: "October", day: 18, year: 1979 }],
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
        birthday: [{ month: "November", day: 18, year: 1977 }, { month: "December", day: 5, year: 1982 }, { month: "September", day: 25, year: 1978 }],
        songs: [
            {
                title: "Everything, Everyday, Everywhere",
                src: "https://embed.music.apple.com/us/music-video/everything-everyday-everywhere/1446741205"
            },
        ]
    },
    {
        artist: "Faith Evans",
        birthday: [{ month: "June", day: 10, year: 1973 }],
        songs: [
            {
                title: "Can't Believe (feat. Carl Thomas)",
                src: "https://embed.music.apple.com/us/music-video/cant-believe-feat-carl-thomas/894484099"
            },
            {
                title: "Fragile",
                src: "https://embed.music.apple.com/us/music-video/fragile/1713603423"
            },
            {
                title: "Good Time (feat. Problem)",
                src: "https://embed.music.apple.com/us/music-video/good-time-feat-problem/1713245388"
            },
            {
                title: "Tears of Joy (Extended Version)",
                src: "https://embed.music.apple.com/us/music-video/tears-of-joy-extended-version/579191867"
            },
            {
                title: "Again",
                src: "https://embed.music.apple.com/us/music-video/again/1554920473"
            },
            {
                title: "I Love You",
                src: "https://embed.music.apple.com/us/music-video/i-love-you/1623470796"
            },
            {
                title: "Never Gonna Let You Go",
                src: "https://embed.music.apple.com/us/music-video/never-gonna-let-you-go/1622875348"
            },
            {
                title: "Soon As I Get Home",
                src: "https://embed.music.apple.com/us/music-video/soon-as-i-get-home/887481708"
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
            {
                title: "American Heart",
                src: "https://embed.music.apple.com/us/music-video/american-heart/577992838"
            },
            {
                title: "Joy to the World",
                src: "https://embed.music.apple.com/us/music-video/joy-to-the-world/298883815"
            },
            {
                title: "Just to Hear You Say That You Love Me",
                src: "https://embed.music.apple.com/us/music-video/just-to-hear-you-say-that-you-love-me/1607495259"
            },
            {
                title: "Free",
                src: "https://embed.music.apple.com/us/music-video/free/539781026"
            },
            {
                title: "Take Me As I Am",
                src: "https://embed.music.apple.com/us/music-video/take-me-as-i-am/281897743"
            },
            {
                title: "This Kiss",
                src: "https://embed.music.apple.com/us/music-video/this-kiss/281882911"
            },
            {
                title: "You Can't Lose Me",
                src: "https://embed.music.apple.com/us/music-video/you-cant-lose-me/281895256"
            },
        ]
    },
    {
        artist: "Faith Hill & Tim McGraw",
        birthday: [{ month: "September", day: 21, year: 1967 }, { month: "May", day: 1, year: 1967 }],
        songs: [
            {
                title: "Let's Make Love",
                src: "https://embed.music.apple.com/us/music-video/lets-make-love/1612123842"
            },
        ]
    },
    {
        artist: "Fantasia",
        birthday: [{ month: "June", day: 30, year: 1984 }],
        songs: [
            {
                title: "Without Me (feat. Kelly Rowland & Missy Elliott)",
                src: "https://embed.music.apple.com/us/music-video/without-me-feat-kelly-rowland-missy-elliott/668122265"
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
        birthday: [{ month: "May", day: 2, year: 1991 }, { month: "December", day: 8, year: 1982 }, { month: "March", day: 10, year: 1994 }],
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
            {
                title: "Make It Rain (Remix)",
                src: "https://embed.music.apple.com/us/music-video/make-it-rain-remix/719977420"
            },
            {
                title: "All I Need (feat. Armageddon & Tony Sunshine)",
                src: "https://embed.music.apple.com/us/music-video/all-i-need-feat-armageddon-tony-sunshine/281899565"
            },
            {
                title: "So Much More",
                src: "https://embed.music.apple.com/us/music-video/so-much-more/86500817"
            },
            {
                title: "Success",
                src: "https://embed.music.apple.com/us/music-video/success/1380483760"
            },
            {
                title: "Flow Joe",
                src: "https://embed.music.apple.com/us/music-video/flow-joe/1380492523"
            },
        ]
    },
    {
        artist: "Fat Joe, DJ Khaled & Amorphous",
        birthday: [{ month: "August", day: 19, year: 1970 }, { month: "November", day: 26, year: 1975 }, { month: "December", day: 31, year: 1997 }],
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
        birthday: [{ month: "August", day: 19, year: 1970 }, { month: "May", day: 30, year: 1980 }, { month: "November", day: 26, year: 1975 }, { month: "December", day: 18, year: 1974 }, { month: "April", day: 23, year: 1977 }, { month: "November", day: 10, year: 1971 }],
        songs: [
            {
                title: "Lean Back (Alternate Version)",
                src: "https://embed.music.apple.com/us/music-video/lean-back-alternate-version/1445834531"
            },
        ]
    },
    {
        artist: "Fat Joe, Remy Ma & Cool & Dre",
        songs: [
            {
                title: "Outta Control",
                src: "https://embed.music.apple.com/us/music-video/outta-control/1766173041"
            },
        ]
    },
    {
        artist: "Fat Joe, Anitta & DJ Khaled",
        birthday: [{ month: "August", day: 19, year: 1970 }, { month: "March", day: 30, year: 1993 }, { month: "November", day: 26, year: 1975 }],
        songs: [
            {
                title: "Paradise",
                src: "https://embed.music.apple.com/us/music-video/paradise/1766835686"
            },
        ]
    },
    {
        artist: "FendiDa Rappa & Cardi B",
        birthday: [{ month: "September", day: 27, year: 1995 }, { month: "October", day: 11, year: 1992 }],
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
            {
                title: "Hungry (feat. Rick Ross)",
                src: "https://embed.music.apple.com/us/music-video/hungry-feat-rick-ross/1282656850"
            },
            {
                title: "L.A.LOVE (la la) [feat. YG]",
                src: "https://embed.music.apple.com/us/music-video/l-a-love-la-la-feat-yg/1282657138"
            },
            {
                title: "Life Goes On",
                src: "https://embed.music.apple.com/us/music-video/life-goes-on/1282657132"
            },
            {
                title: "Like It Ain't Nuttin'",
                src: "https://embed.music.apple.com/us/music-video/like-it-aint-nuttin/1282657121"
            },
            {
                title: "Tension",
                src: "https://embed.music.apple.com/us/music-video/tension/1282657137"
            },
            {
                title: "London Bridge (Closed Captioned/Oh Snap/Revised Version)",
                src: "https://embed.music.apple.com/us/music-video/london-bridge-closed-captioned-oh-snap-revised-version/1445733323"
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
        artist: "Field Mob & Ludacris",
        songs: [
            {
                title: "Georgia",
                src: "https://embed.music.apple.com/us/music-video/georgia/1445826164"
            },
        ]
    },
    {
        artist: "Fifth Harmony",
        birthday: [{ month: "July", day: 7, year: 1993 }, { month: "June", day: 22, year: 1997 }, { month: "June", day: 27, year: 1996 }, { month: "May", day: 31, year: 1996 }, { month: "March", day: 3, year: 1997 }],
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
        artist: "Finesse2tymes",
        birthday: [{ month: "June", day: 10, year: 1992 }],
        songs: [
            {
                title: "Whatever",
                src: "https://embed.music.apple.com/us/music-video/whatever/1809829276"
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
             {
                title: "2001",
                src: "https://embed.music.apple.com/us/music-video/2001/1814048622"
            },
        ]
    },
      {
        artist: "Fireboy DML",
        birthday: [{ month: "February", day: 5, year: 1996 }],
        songs: [
            {
                title: "ecstasy (feat. Seun Kuti)",
                src: "https://embed.music.apple.com/us/music-video/ecstasy-feat-seun-kuti/1789425392"
            },
        ]
    },
    {
        artist: "Five Finger Death Punch",
        songs: [
            {
                title: "This Is the Way (feat. DMX)",
                src: "https://embed.music.apple.com/us/music-video/this-is-the-way-feat-dmx/1739826709"
            },
        ]
    },
    {
        artist: "Fivio Foreign & Polo G",
        birthday: [{ month: "March", day: 29, year: 1990 }, { month: "January", day: 6, year: 1999 }],
        songs: [
            {
                title: "Bop It",
                src: "https://embed.music.apple.com/us/music-video/bop-it/1534812158"
            },
        ]
    },
     {
        artist: "FKA twigs",
        songs: [
            {
                title: "Perfect Stranger",
                src: "https://embed.music.apple.com/us/music-video/perfect-stranger/1776264378"
            },
        ]
    },
    {
        artist: "Flau'jae & NLE Choppa",
        songs: [
            {
                title: "AMF",
                src: "https://embed.music.apple.com/us/music-video/amf/1738049648"
            },
        ]
    },
      {
        artist: "FLO",
        songs: [
            {
                title: "Fly Girl (feat. Missy Elliott)",
                src: "https://embed.music.apple.com/us/music-video/fly-girl-feat-missy-elliott/1679323056"
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
        birthday: [{ month: "January", day: 31, year: 1987 }, { month: "August", day: 26, year: 1985 }],
        songs: [
            {
                title: "God, Your Mama, and Me (feat. Backstreet Boys)",
                src: "https://embed.music.apple.com/us/music-video/god-your-mama-and-me-feat-backstreet-boys/1444878040"
            },
        ]
    },
    {
        artist: "Fred Money",
        songs: [
            {
                title: "Fair Exchange (feat. Cassidy)",
                src: "https://embed.music.apple.com/us/music-video/fair-exchange-feat-cassidy/1706984424"
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
            {
                title: "Too Late (feat. Jim Jones)",
                src: "https://embed.music.apple.com/us/music-video/too-late-feat-jim-jones/1547915502"
            },
            {
                title: "Pardon My Thoughts (feat. Dave East)",
                src: "https://embed.music.apple.com/us/music-video/pardon-my-thoughts-feat-dave-east/1544018013"
            },
            {
                title: "Wiggle It (feat. City Girls)",
                src: "https://embed.music.apple.com/us/music-video/wiggle-it-feat-city-girls/1472598780"
            },
        ]
    },
    {
        artist: "French Montana & Doja Cat",
        birthday: [{ month: "November", day: 9, year: 1984 }, { month: "October", day: 21, year: 1995 }],
        songs: [

            {
                title: "Handstand (feat. Saweetie)",
                src: "https://embed.music.apple.com/us/music-video/handstand-feat-saweetie/1599137909"
            },
        ]
    },
    {
        artist: "French Montana, Fivio Foreign & Fabolous",
        birthday: [{ month: "November", day: 9, year: 1984 }, { month: "March", day: 29, year: 1990 }, { month: "November", day: 18, year: 1977 }],
        songs: [
            {
                title: "To the Moon",
                src: "https://embed.music.apple.com/us/music-video/to-the-moon/1755779296"
            },
        ]
    },
    {
        artist: "Fresco Trey",
        songs: [
            {
                title: "Passenger Princess (feat. NLE Choppa)",
                src: "https://embed.music.apple.com/us/music-video/passenger-princess-feat-nle-choppa/1716795289"
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
        artist: "Full Force",
        songs: [
            {
                title: "I Feel Good, I Look Good, I'm God Good (feat. Faith Evans, Sheila E. & The God Good Choir & Children)",
                src: "https://embed.music.apple.com/us/music-video/i-feel-good-i-look-good-im-god-good-feat-faith-evans/922159977"
            },
        ]
    },
    {
        artist: "Funk Flex, Jadakiss & Murda Beatz",
        birthday: [{ month: "August", day: 5, year: 1967 }, { month: "May", day: 27, year: 1975 }, { month: "February", day: 11, year: 1994 }],
        songs: [
            {
                title: "Damn Shame",
                src: "https://embed.music.apple.com/us/music-video/damn-shame/1555715398"
            },
        ]
    },
    {
        artist: "Funk Flex & King Von",
        birthday: [{ month: "August", day: 5, year: 1967 }, { month: "August", day: 9, year: 1994 }],
        songs: [
            {
                title: "Lurkin (feat. Polo G) [Remix]",
                src: "https://embed.music.apple.com/us/music-video/lurkin-feat-polo-g-remix/1576745596"
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
            {
                title: "100 Shooters (feat. Meek Mill & Doe Boy)",
                src: "https://embed.music.apple.com/us/music-video/100-shooters-feat-meek-mill-doe-boy/1477401481"
            },
            {
                title: "Neva End (Remix) [feat. Kelly Rowland]",
                src: "https://embed.music.apple.com/us/music-video/neva-end-remix-feat-kelly-rowland/580648150"
            },
            {
                title: "LIL DEMON",
                src: "https://embed.music.apple.com/us/music-video/lil-demon/1799048095"
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
            {
                title: "Down (feat. Latto)",
                src: "https://embed.music.apple.com/us/music-video/down-feat-latto/1530102552"
            },
        ]
    },
    {
        artist: "G-Eazy & Bebe Rexha",
        birthday: [{ month: "May", day: 24, year: 1989 }, { month: "August", day: 30, year: 1989 }],
        songs: [
            {
                title: "Me, Myself & I",
                src: "https://embed.music.apple.com/us/music-video/me-myself-i/1053765703"
            },
        ]
    },
    {
        artist: "G-Eazy & Halsey",
        birthday: [{ month: "May", day: 24, year: 1989 }, { month: "September", day: 29, year: 1994 }],
        songs: [
            {
                title: "Him & I",
                src: "https://embed.music.apple.com/us/music-video/him-i/1320217962"
            },
        ]
    },
    {
        artist: "Gang Starr",
        songs: [
            {
                title: "Rite Where U Stand (feat. Jadakiss)",
                src: "https://embed.music.apple.com/us/music-video/rite-where-u-stand-feat-jadakiss/1483149492"
            },
        ]
    },
    {
        artist: "GeminiJynX",
        songs: [
            {
                title: "Flood the Town (feat. Jadakiss & Brandon Rose)",
                src: "https://embed.music.apple.com/us/music-video/flood-the-town-feat-jadakiss-brandon-rose/1647603078"
            },
        ]
    },
    {
        artist: "George Michael & Whitney Houston",
        birthday: [{ month: "June", day: 25, year: 1963 }, { month: "August", day: 9, year: 1963 }],
        songs: [
            {
                title: "If I Told You That",
                src: "https://embed.music.apple.com/us/music-video/if-i-told-you-that/279026959"
            },
        ]
    },
    {
        artist: "George Strait",
        birthday: [{ month: "May", day: 18, year: 1952 }],
        songs: [
            {
                title: "All My Ex's Live In Texas (feat. Jason Aldean, Ray Benson, Kenny Chesney, Eric Church, Sheryl Crow, Vince Gill, Faith Hill, Alan Jackson, Miranda Lambert & Martina McBride) [Live]",
                src: "https://embed.music.apple.com/us/music-video/all-my-exs-live-in-texas-feat-jason-aldean-ray-benson/1585919003"
            },
            {
                title: "Let's Fall To Pieces Together (feat. Faith Hill) [Live]",
                src: "https://embed.music.apple.com/us/music-video/lets-fall-to-pieces-together-feat-faith-hill-live/1585918898"
            },
            {
                title: "A Showman's Life (feat. Faith Hill) [Live]",
                src: "https://embed.music.apple.com/us/music-video/a-showmans-life-feat-faith-hill-live/1585918897"
            },
        ]
    },
    {
        artist: "Ghostface Killah featuring Jadakiss & Comp",
        songs: [
            {
                title: "Run (Edited Version) [Edited Version]",
                src: "https://embed.music.apple.com/us/music-video/run-edited-version-edited-version/1446014608"
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
        artist: "Girll Codee",
        songs: [
            {
                title: "Chaa Chaa Chaa (feat. HoodCelebrityy)",
                src: "https://embed.music.apple.com/us/music-video/chaa-chaa-chaa-feat-hoodcelebrityy/1631463122"
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
             {
                title: "High AF",
                src: "https://embed.music.apple.com/us/music-video/high-af/1750778718"
            },
             {
                title: "Yeah Glo!",
                src: "https://embed.music.apple.com/us/music-video/yeah-glo/1729914762"
            },
             {
                title: "Blessed",
                src: "https://embed.music.apple.com/us/music-video/blessed/1648168104"
            },
        ]
    },
    {
        artist: "GloRilla & Kehlani",
        birthday: [{ month: "July", day: 28, year: 1999 }, { month: "April", day: 24, year: 1995 }],
        songs: [
            {
                title: "Xmas Time (Live Performance Video)",
                src: "https://embed.music.apple.com/us/music-video/xmas-time-live-performance-video/1785310833"
            },
        ]
    },
    {
        artist: "GloRilla & Latto",
        birthday: [{ month: "July", day: 28, year: 1999 }, { month: "December", day: 22, year: 1998 }],
        songs: [
            {
                title: "PROCEDURE",
                src: "https://embed.music.apple.com/us/music-video/procedure/1793806593"
            },
        ]
    },
      {
        artist: "GloRilla & Megan Thee Stallion",
        birthday: [{ month: "July", day: 28, year: 1999 }, { month: "February", day: 15, year: 1995 }],
        songs: [
            {
                title: "Wanna Be",
                src: "https://embed.music.apple.com/us/music-video/wanna-be/1739838843"
            },
        ]
    },
    {
        artist: "GloRilla & T-Pain",
        birthday: [{ month: "July", day: 28, year: 1999 }, { month: "September", day: 30, year: 1984 }],
        songs: [
            {
                title: "I LUV HER",
                src: "https://embed.music.apple.com/us/music-video/i-luv-her/1779595332"
            },
        ]
    },
     {
        artist: "Gloss Up",
        birthday: [{ month: "July", day: 16, year: 1997 }],
        songs: [
            {
                title: "Bestfrenn (feat. GloRilla)",
                src: "https://embed.music.apple.com/us/music-video/bestfrenn-feat-glorilla/1666708630"
            },
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
        artist: "Gracie Abrams",
        birthday: [{ month: "September", day: 7, year: 1999 }],
        songs: [
            {
                title: "I Love You, I'm Sorry",
                src: "https://embed.music.apple.com/us/music-video/i-love-you-im-sorry/1757693927"
            },
            {
                title: "Risk",
                src: "https://embed.music.apple.com/us/music-video/risk/1773474497"
            },
            {
                title: "Mess It Up",
                src: "https://embed.music.apple.com/us/music-video/mess-it-up/1566088599"
            },
        ]
    },
    {
        artist: "Gromee & Inna",
        birthday: [{ month: "December", day: 14, year: 1978 }, { month: "October", day: 16, year: 1986 }],
        songs: [
            {
                title: "Cool Me Down",
                src: "https://embed.music.apple.com/us/music-video/cool-me-down/1563970489"
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
            {
                title: "Pissy (feat. Roddy Ricch, Nardo Wick)",
                src: "https://embed.music.apple.com/us/music-video/pissy-feat-roddy-ricch-nardo-wick/1685383661"
            },
            {
                title: "There I Go (feat. J. Cole & Mike WiLL Made-It)",
                src: "https://embed.music.apple.com/us/music-video/there-i-go-feat-j-cole-mike-will-made-it/1703158821"
            },
        ]
    },
    {
        artist: "Gucci Mane & Nicki Minaj",
        birthday: [{ month: "February", day: 12, year: 1980 }, { month: "December", day: 8, year: 1982 }],
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
        birthday: [{ month: "October", day: 3, year: 1969 }, { month: "July", day: 2, year: 1993 }],
        songs: [
            {
                title: "Slow Clap",
                src: "https://embed.music.apple.com/us/music-video/slow-clap/1562052203"
            },
        ]
    },
    {
        artist: "Gwen Stefani & Eve",
        birthday: [{ month: "October", day: 3, year: 1969 }, { month: "November", day: 10, year: 1978 }],
        songs: [
            {
                title: "Rich Girl",
                src: "https://embed.music.apple.com/us/music-video/rich-girl/1445830603"
            },
        ]
    },
    {
        artist: "Gwen Stefani featuring Slim Thug",
        birthday: [{ month: "October", day: 3, year: 1969 }, { month: "September", day: 8, year: 1980 }],
        songs: [
            {
                title: "Luxurious (feat. Slim Thug) [Remix featuring Slim Thug]",
                src: "https://embed.music.apple.com/us/music-video/luxurious-feat-slim-thug-remix-featuring-slim-thug/1445722190"
            },
        ]
    },
    {
        artist: "H.E.R.",
        birthday: [{ month: "June", day: 27, year: 1997 }],
        songs: [
            {
                title: "America the Beautiful",
                src: "https://embed.music.apple.com/us/music-video/america-the-beautiful/1552052358"
            },
            {
                title: "Damage",
                src: "https://embed.music.apple.com/us/music-video/damage/1536506952"
            },
            {
                title: "Slide (feat. YG)",
                src: "https://embed.music.apple.com/us/music-video/slide-feat-yg/1483812155"
            },
        ]
    },
    {
        artist: "HAIM",
        birthday: [{ month: "December", day: 15, year: 1991 }, { month: "February", day: 16, year: 1989 }, { month: "March", day: 14, year: 1986 }],
        songs: [
            {
                title: "Relationships",
                src: "https://embed.music.apple.com/us/music-video/relationships/1801807056"
            },
            {
                title: "All over me",
                src: "https://embed.music.apple.com/us/music-video/all-over-me/1822359031"
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
        birthday: [{ month: "December", day: 11, year: 1996 }, { month: "August", day: 15, year: 1990 }],
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
            },
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
            {
                title: "safeword",
                src: "https://embed.music.apple.com/us/music-video/safeword/1798815204"
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
        artist: "Hayes Warner",
        birthday: [{ month: "July", day: 16, year: 1999 }],
        songs: [
            {
                title: "Oh!",
                src: "https://embed.music.apple.com/us/music-video/oh/1790240795"
            },
        ]
    },
    {
        artist: "Heem B$F, Black Soprano Family & Benny the Butcher",
        songs: [
            {
                title: "Mob Business (feat. Styles P)",
                src: "https://embed.music.apple.com/us/music-video/mob-business-feat-styles-p/1687510414"
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
        artist: "Hitmaka & Queen Naija",
        birthday: [{ month: "September", day: 9, year: 1985 }, { month: "October", day: 17, year: 1995 }],
        songs: [
            {
                title: "Quickie (feat. Ty Dolla $ign)",
                src: "https://embed.music.apple.com/us/music-video/quickie-feat-ty-dolla-%24ign/1587069345"
            },
        ]
    },
    {
        artist: "Höly & Maino", 
        songs: [
            {
                title: "Holy Matrimony",
                src: "https://embed.music.apple.com/us/music-video/holy-matrimony/1763308397"
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
        artist: "Hurricane Chris",
        songs: [
            {
                title: "A Bay Bay (The Ratchet Remix) [Extended Edit]",
                src: "https://embed.music.apple.com/us/music-video/a-bay-bay-the-ratchet-remix-extended-edit/263313007"
            },
        ]
    },
    {
        artist: "Hustle Gang",
        songs: [
            {
                title: "Game 7 (feat. T.I., Rara & Brandon Rossi)",
                src: "https://embed.music.apple.com/us/music-video/game-7-feat-t-i-rara-brandon-rossi/1444845330" 
            },
        ]
    },
    {
        artist: "IAMJOSHSTONE",
        songs: [
            {
                title: "Drip Sauce Swag (feat. Juelz Santana)",
                src: "https://embed.music.apple.com/us/music-video/drip-sauce-swag-feat-juelz-santana/1555553684"
            },
            {
                title: "Magic (feat. Jim Jones, Rose & Pnb Relly)",
                src: "https://embed.music.apple.com/us/music-video/magic-feat-jim-jones-rose-pnb-relly/1591629843"
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
            {
                title: "Popa",
                src: "https://embed.music.apple.com/us/music-video/popa/1768190987"
            },
            {
                title: "In Ha Mood",
                src: "https://embed.music.apple.com/us/music-video/in-ha-mood/1668468476"
            },
            {
                title: "Bikini Bottom",
                src: "https://embed.music.apple.com/us/music-video/bikini-bottom/1652102025"
            },
            {
                title: "Munch (Feelin' U)",
                src: "https://embed.music.apple.com/us/music-video/munch-feelin-u/1651877708"
            },
        ]
    },
    {
        artist: "Ice Spice & Central Cee",
        birthday: [{ month: "January", day: 1, year: 2000 }, { month: "June", day: 4, year: 1998 }],
        songs: [
            {
                title: "Did It First",
                src: "https://embed.music.apple.com/us/music-video/did-it-first/1756654629"
            },
        ]
    },

    {
        artist: "Ice Spice & Nicki Minaj",
        birthday: [{ month: "January", day: 1, year: 2000 }, { month: "December", day: 8, year: 1982 }],
        songs: [
            {
                title: "Princess Diana",
                src: "https://embed.music.apple.com/us/music-video/princess-diana/1682405342"
            },
        ]
    },
    {
        artist: "Ice Spice & Travis Scott",
        birthday: [{ month: "January", day: 1, year: 2000 }, { month: "April", day: 30, year: 1991 }],
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
        birthday: [{ month: "June", day: 7, year: 1990 }, { month: "April", day: 5, year: 1995 }],
        songs: [
            {
                title: "Lola",
                src: "https://embed.music.apple.com/us/music-video/lola/1487575725"
            },
        ]
    },
    {
        artist: "India.Arie & Musiq Soulchild",
        birthday: [{ month: "October", day: 3, year: 1975 }, { month: "September", day: 16, year: 1977 }],
        songs: [
            {
                title: "Chocolate High (feat. Musiq Soulchild)",
                src: "https://embed.music.apple.com/us/music-video/chocolate-high-feat-musiq-soulchild/1445868186"
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
                src: "https://embed.music.apple.com/us/music-video/more-than-friends-feat-daddy-yankee/1800221185"
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
            {
                title: "Club Rocker",
                src: "https://embed.music.apple.com/us/music-video/club-rocker/451205177"
            },
            {
                title: "Amazing",
                src: "https://embed.music.apple.com/us/music-video/amazing/399125251"
            },
            {
                title: "Sun Is Up",
                src: "https://embed.music.apple.com/us/music-video/sun-is-up/1797339660"
            },
            {
                title: "Hot",
                src: "https://embed.music.apple.com/us/music-video/hot/1797039636"
            },
            {
                title: "Love",
                src: "https://embed.music.apple.com/us/music-video/love/399125172"
            },
            {
                title: "Deja Vu",
                src: "https://embed.music.apple.com/us/music-video/deja-vu/1798536733"
            },
        ]
    },
    {
        artist: "ISYSS",
        songs: [
            {
                title: "Day & Night (feat. Jadakiss) [Video]",
                src: "https://embed.music.apple.com/us/music-video/day-night-feat-jadakiss-video/1534886049"
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
        artist: "j-hope",
        birthday: [{ month: "February", day: 18, year: 1994 }],
        songs: [
            {
                title: "MONA LISA",
                src: "https://embed.music.apple.com/us/music-video/mona-lisa/1803350701"
            },
        ]
    },
    {
        artist: "j-hope & Miguel",
        birthday: [{ month: "February", day: 18, year: 1994 }, { month: "October", day: 23, year: 1985 }],
        songs: [
            {
                title: "Sweet Dreams",
                src: "https://embed.music.apple.com/us/music-video/sweet-dreams/1800433431"
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
        artist: "J.P. & NLE Choppa",
        songs: [
            {
                title: "Bad Bitty (Remix)",
                src: "https://embed.music.apple.com/us/music-video/bad-bitty-remix/1760165199"
            },
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
        artist: "J. Stone",
        songs: [
            {
                title: "Flowers Now (feat. Mozzy)",
                src: "https://embed.music.apple.com/us/music-video/flowers-now-feat-mozzy/1648293144"
            },
            {
                title: "No Time (feat. Jadakiss & Swizz Beatz)",
                src: "https://embed.music.apple.com/us/music-video/no-time-feat-jadakiss-swizz-beatz/1655803502"
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
        birthday: [{ month: "February", day: 29, year: 1976 }, { month: "January", day: 3, year: 1986 }],
        songs: [
            {
                title: "Caught Up (Edited Version)",
                src: "https://embed.music.apple.com/us/music-video/caught-up-edited-version/1446735179"
            },
        ]
    },
    {
        artist: "Ja Rule featuring Ashanti",
        birthday: [{ month: "February", day: 29, year: 1976 }, { month: "October", day: 13, year: 1980 }],
        songs: [
            {
                title: "Mesmerize",
                src: "https://embed.music.apple.com/us/music-video/mesmerize/1445878111"
            },
        ]
    },
    {
        artist: "Ja Rule, Ashanti, Vita & Charli Baltimore",
        songs: [
            {
               title: "Down 4 U",
               src: "https://embed.music.apple.com/us/music-video/down-4-u/1445833866"
            },
        ]
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
            {
                title: "Set You Free",
                src: "https://embed.music.apple.com/us/music-video/set-you-free/1795734980"
            },
            {
                title: "Just Us (feat. Doja Cat)",
                src: "https://embed.music.apple.com/us/music-video/just-us-feat-doja-cat/1803695431"
            },
        ]
    },
    {
        artist: "Jacquees",
        birthday: [{ month: "April", day: 15, year: 1994 }],
        songs: [
            {
                title: "At the Club (feat. DeJ Loaf)",
                src: "https://embed.music.apple.com/us/music-video/at-the-club-feat-dej-loaf/1445012505"
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
            {
                title: "Can't Stop Me",
                src: "https://embed.music.apple.com/us/music-video/cant-stop-me/1445858198"
            },
            {
                title: "Put Ya Hands Up",
                src: "https://embed.music.apple.com/us/music-video/put-ya-hands-up/1445744775"
            },
        ]
    },
    {
        artist: "Jadakiss & Ne-Yo",
        birthday: [{ month: "May", day: 27, year: 1975 }, { month: "October", day: 18, year: 1979 }],
        songs: [
            {
                title: "By My Side",
                src: "https://embed.music.apple.com/us/music-video/by-my-side/1445870928"
            },
        ]
    },
    {
        artist: "Jadakiss, Swizz Beatz & OJ da Juiceman",
        songs: [
            {
                title: "Who's Real",
                src: "https://embed.music.apple.com/us/music-video/whos-real/1446006042"
            },
        ]
    },
    {
        artist: "Jada Kingdom",
        birthday: [{ month: "September", day: 5, year: 1998 }],
        songs: [
            {
                title: "What's Up (Big Buddy)",
                src: "https://embed.music.apple.com/us/music-video/whats-up-big-buddy/1725512564"
            },
            {
                title: "Flling It Back",
                src: "https://embed.music.apple.com/us/music-video/flling-it-back/1629762625"
            },
            {
                title: "Yuh Betta",
                src: "https://embed.music.apple.com/us/music-video/yuh-betta/1521182286"
            },
            {
                title: "Heavy!",
                src: "https://embed.music.apple.com/us/music-video/heavy/1498738139"
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
            {
                title: "Let's Get Married (feat. Run DMC)",
                src: "https://embed.music.apple.com/us/music-video/lets-get-married-feat-run-dmc/311562864"
            },
            {
                title: "Let's Get Married",
                src: "https://embed.music.apple.com/us/music-video/lets-get-married/695113452"
            },
            {
                title: "Stunnas",
                src: "https://embed.music.apple.com/us/music-video/stunnas/205899369"
            },
            {
                title: "Good Luck Charm",
                src: "https://embed.music.apple.com/us/music-video/good-luck-charm/400013656"
            },
            {
                title: "So Amazing",
                src: "https://embed.music.apple.com/us/music-video/so-amazing/530926891"
            },
            {
                title: "I Gotta Be",
                src: "https://embed.music.apple.com/us/music-video/i-gotta-be/580448088"
            },
            {
                title: "Keys to the Range (feat. Jermaine Dupri)",
                src: "https://embed.music.apple.com/us/music-video/keys-to-the-range-feat-jermaine-dupri/309568918"
            },
            {
                title: "What's It Like (feat. Jermaine Dupri)",
                src: "https://embed.music.apple.com/us/music-video/whats-it-like-feat-jermaine-dupri/347063311"
            },
            {
                title: "Walked Outta Heaven",
                src: "https://embed.music.apple.com/us/music-video/walked-outta-heaven/1356861075"
            },
            {
                title: "Promise",
                ssrc: "https://embed.music.apple.com/us/music-video/promise/370300717"
            },
        ]
    },
    {
        artist: "Jagged Edge & Nas",
        songs: [
            {
                title: "I Got It 2",
                src: "https://embed.music.apple.com/us/music-video/i-got-it-2/313867011"
            },
        ]
    },
    {
        artist: "Jagged Edge featuring Jermaine Dupri",
        songs: [
            {
                title: "What's It Like (ReMarqable Remix)",
                src: "https://embed.music.apple.com/us/music-video/whats-it-like-remarqable-remix/254295903"
            },
        ]
    },
    {
        artist: "Jagged Edge featuring Jermaine Dupri, Da Brat, R.O.C., Lil Bow Wow & Tigah",
        songs: [
            {
                title: "Where the Party At (11-01-01 Dupri Remix)",
                src: "https://embed.music.apple.com/us/music-video/where-the-party-at-11-01-01-dupri-remix/254367712"
            },
        ]
    },
    {
        artist: "Jaheim",
        birthday: [{ month: "May", day: 26, year: 1978 }],
        songs: [
            {
                title: "Ain't Leavin Without You (Remix) [feat. Jadakiss]",
                src: "https://embed.music.apple.com/us/music-video/aint-leavin-without-you-remix-feat-jadakiss/355302770"
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
            {
                title: "In Love By Now",
                src: "https://embed.music.apple.com/us/music-video/in-love-by-now/1538627307" 
            },
            {
                title: "Digital Girl Remix (feat. Drake, Kanye West & The-Dream)",
                src: "https://embed.music.apple.com/us/music-video/digital-girl-remix-feat-drake-kanye-west-the-dream/327572547" 
            },
            {
                title: "Extravaganza (feat. Kanye West)",
                src: "https://embed.music.apple.com/us/music-video/extravaganza-feat-kanye-west/290231690"  
            },
            {
                title: "DJ Play A Love Song (feat. Twista) [VIDEO]",
                src: "https://embed.music.apple.com/us/music-video/dj-play-a-love-song-feat-twista-video/1609612378"   
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
        artist: "Janet Jackson",
        birthday: [{ month: "May", day: 16, year: 1966 }],
        songs: [
            {
                title: "Someone To Call My Lover (feat. Jermaine Dupri) [So So Def Remix]",
                src: "https://embed.music.apple.com/us/music-video/someone-to-call-my-lover-feat-jermaine-dupri-so-so-def-remix/1646511682"
            },
        ]
    },
     {
        artist: "Japanese Breakfast",
        songs: [
            {
                title: "Winter in LA",
                src: "https://embed.music.apple.com/us/music-video/winter-in-la/1810077619"
            },
        ]
    },
    {
        artist: "JasonMartin, Freddie Gibbs & Snoop Dogg",
        songs: [
            {
                title: "Don't Be Mad At Me (Remix)",
                src: "https://embed.music.apple.com/us/music-video/dont-be-mad-at-me-remix/1673334316"
            },
        ]
    },
    {
        artist: "Jason Derulo",
        birthday: [{ month: "September", day: 21, year: 1989 }],
        songs: [
            {
                title: "Wiggle (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/wiggle-feat-snoop-dogg/882941148"
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
        birthday: [{ month: "December", day: 4, year: 1969 }, { month: "June", day: 8, year: 1977 }],
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
        artist: "Jay Rock & Anderson .Paak",
        birthday: [{ month: "March", day: 31, year: 1985 }, { month: "February", day: 8, year: 1986 }],
        songs: [
            {
                title: "Too Fast (feat. Latto) [Pull Over]",
                src: "https://embed.music.apple.com/us/music-video/too-fast-feat-latto-pull-over/1698219186"
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
        artist: "Jazzy T",
        songs: [
            {
                title: "Moneyholic (feat. Raneson & Vybz Kartel)",
                src: "https://embed.music.apple.com/us/music-video/moneyholic-feat-raneson-vybz-kartel/1471606335"
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
            {
                title: "You & Me",
                src: "https://embed.music.apple.com/us/music-video/you-me/1711280024"
            },
            {
                title: "like JENNIE",
                src: "https://embed.music.apple.com/us/music-video/like-jennie/1800377146"
            },
             {
                title: "Seoul City",
                src: "https://embed.music.apple.com/us/music-video/seoul-city/1810719121"
            },
        ]
    },
    {
        artist: "Jean Deaux",
        birthday: [{ month: "May", day: 4, year: 1995 }], 
        songs: [
            {
                title: "Anytime (feat. Kehlani & ROMderful)",
                src: "https://embed.music.apple.com/us/music-video/anytime-feat-kehlani-romderful/1476886027"
            },
        ]
    },
    {
        artist: "Jeezy & Nas",
        birthday: [{ month: "September", day: 28, year: 1977 }, { month: "September", day: 14, year: 1973 }],
        songs: [
            {
                title: "My President",
                src: "https://embed.music.apple.com/us/music-video/my-president/1446737909"
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
        birthday: [{ month: "September", day: 12, year: 1981 }, { month: "October", day: 18, year: 1979 }],
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
            {
                title: "Can't Get Enough (feat. Latto)",
                src: "https://embed.music.apple.com/us/music-video/cant-get-enough-feat-latto/1728290958"
            },
            {
                title: "Hold You Down (feat. Fat Joe)",
                src: "https://embed.music.apple.com/us/music-video/hold-you-down-feat-fat-joe/1279622703"
            },
        ]
    },
    {
        artist: "Jennifer Lopez & Ja Rule",
        birthday: [{ month: "July", day: 24, year: 1969 }, { month: "February", day: 29, year: 1976 }],
        songs: [
            {
                title: "I'm Real (Re-Mix Version)",
                src: "https://embed.music.apple.com/us/music-video/im-real-re-mix-version/327364460"
            },
        ]
    },
    {
        artist: "Jennifer Lopez & Shakira",
        birthday: [{ month: "July", day: 24, year: 1969 }, { month: "February", day: 2, year: 1977 }],
        songs: [
            {
                title: "The Pepsi Super Bowl Halftime Performance",
                src: "https://embed.music.apple.com/us/music-video/the-pepsi-super-bowl-halftime-performance/1497482857"
            },
        ]
    },
    {
        artist: "Jennifer Lopez, Fat Joe & Big Punisher",
        birthday: [{ month: "July", day: 24, year: 1969 }, { month: "August", day: 19, year: 1970 }, { month: "November", day: 10, year: 1971 }],
        songs: [
            {
                title: "Feelin' So Good",
                src: "https://embed.music.apple.com/us/music-video/feelin-so-good/547488500"
            },
        ]
    },
    {
        artist: "JEON SOMI",
        birthday: [{ month: "March", day: 9, year: 2001 }],
        songs: [
            {
                title: "Anymore",
                src: "https://embed.music.apple.com/us/music-video/anymore/1614491238"
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
            {
                title: "I Like (feat. Ludacris) [Bonus Video]",
                src: "https://embed.music.apple.com/us/music-video/i-like-feat-ludacris-bonus-video/1440770376"
            },
        ]
    },
    {
        artist: "Jermaine Dupri",
        birthday: [{ month: "September", day: 23, year: 1972 }],
        songs: [
            {
                title: "Gotta Getcha",
                src: "https://embed.music.apple.com/us/music-video/gotta-getcha/720089062"
            },
            {
                title: "Money Ain't a Thang (feat. JAY-Z)",
                src: "https://embed.music.apple.com/us/music-video/money-aint-a-thang-feat-jay-z/1674661567"
            },
        ]
    },
    {
        artist: "Jermaine Dupri, Destiny's Child, Bow Wow & Da Brat",
        songs: [
            {
                title: "Jumpin', Jumpin' (So So Def Remix)",
                src: "https://embed.music.apple.com/us/music-video/jumpin-jumpin-so-so-def-remix/602356879"
            },
        ]
    },
    {
        artist: "Jermaine Dupri, Nas & Monica",
        songs: [
            {
                title: "I've Got To Have It",
                src: "https://embed.music.apple.com/us/music-video/ive-got-to-have-it/1536518511"
            },
        ]
    },
    {
        artist: "Jermaine Dupri & Ludacris",
        birthday: [{ month: "September", day: 23, year: 1972 }, { month: "September", day: 11, year: 1977 }],
        songs: [
            {
                title: "Welcome to Atlanta",
                src: "https://embed.music.apple.com/us/music-video/welcome-to-atlanta/293110951"
            },
        ]
    },
    {
        artist: "Jermaine Dupri & Mariah Carey",
        birthday: [{ month: "September", day: 23, year: 1972 }, { month: "March", day: 27, year: 1969 }],
        songs: [
            {
                title: "Sweetheart",
                src: "https://embed.music.apple.com/us/music-video/sweetheart/291644751"
            },
        ]
    },
     {
        artist: "Jessie Murph & Sexyy Red",
        birthday: [{ month: "September", day: 22, year: 2004 }, { month: "April", day: 15, year: 1998 }],
        songs: [
            {
                title: "Blue Strips (Remix)",
                src: "https://embed.music.apple.com/us/music-video/blue-strips-remix/1817002196"
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
            {
                title: "America the Beautiful (Live)",
                src: "https://embed.music.apple.com/us/music-video/america-the-beautiful-live/1609883735"
            },
            {
                title: "A&B",
                src: "https://embed.music.apple.com/us/music-video/a-b/1558717780"
            },
            {
                title: "Happiness Over Everything (H.O.E.) [feat. Future & Miguel]",
                src: "https://embed.music.apple.com/us/music-video/happiness-over-everything-h-o-e-feat-future-miguel/1558717540"
            },
            {
                title: "P*$$Y Fairy (OTW)",
                src: "https://embed.music.apple.com/us/music-video/p-%24%24y-fairy-otw/1568639800"
            },
        ]
    },
      {
        artist: "JID",
        birthday: [{ month: "October", day: 31, year: 1990 }],
        songs: [
            {
                title: "WRK",
                src: "https://embed.music.apple.com/us/music-video/wrk/1813993387"
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
            {
                title: "Election (feat. Marc Scibilia & Juelz Santana)",
                src: "https://embed.music.apple.com/us/music-video/election-feat-marc-scibilia-juelz-santana/1548027961"
            },
            {
                title: "Wish List (feat. Tommyboyfame)",
                src: "https://embed.music.apple.com/us/music-video/wish-list-feat-tommyboyfame/1660169231"
            },
            {
                title: "Fit Lit (Betty White) [feat. Dave East, Maino & Fabolous]",
                src: "https://embed.music.apple.com/us/music-video/fit-lit-betty-white-feat-dave-east-maino-fabolous/1616930190"
            },
            {
                title: "MMTC (feat. Vado & Rain910)",
                src: "https://embed.music.apple.com/us/music-video/mmtc-feat-vado-rain910/1551371538"
            },
            {
                title: "Bad Boyz (feat. Axel Leon, Nino Man & Fred the Godson)",
                src: "https://embed.music.apple.com/us/music-video/bad-boyz-feat-axel-leon-nino-man-fred-the-godson/1550339382"
            },
            {
                title: "Love of the Hustle (feat. Trav)",
                src: "https://embed.music.apple.com/us/music-video/love-of-the-hustle-feat-trav/1502294868"
            },
            {
                title: "State of the Union (feat. Rick Ross & Marc Scibilia)",
                src: "https://embed.music.apple.com/us/music-video/state-of-the-union-feat-rick-ross-marc-scibilia/1483272237"
            },
            {
                title: "My Era (feat. Maino & Drama)",
                src: "https://embed.music.apple.com/us/music-video/my-era-feat-maino-drama/1468562914"
            },
        ]
    },
    {
        artist: "Jim Jones & Harry Fraud",
        birthday: [{ month: "July", day: 15, year: 1976 }, { month: "January", day: 26, year: 1987 }],
        songs: [
            {
                title: "Bada Bing (feat. French Montana)",
                src: "https://embed.music.apple.com/us/music-video/bada-bing-feat-french-montana/1556723846"
            },
            {
                title: "Say A Prayer (feat. Curren$y & Jay Worthy)",
                src: "https://embed.music.apple.com/us/music-video/say-a-prayer-feat-curren%24y-jay-worthy/1570650558"
            },
        ]
    },
    {
        artist: "Jim Jones & Hitmaka",
        birthday: [{ month: "July", day: 15, year: 1976 }, { month: "September", day: 9, year: 1985 }],
        songs: [
            {
                title: "Status Update (feat. Goldiie)",
                src: "https://embed.music.apple.com/us/music-video/status-update-feat-goldiie/1649399972"
            },
        ]
    },
    {
        artist: "Jim Jones & Ron Browz",
        birthday: [{ month: "July", day: 15, year: 1976 }, { month: "December", day: 6, year: 1982 }],
        songs: [
            {
                title: "Pop Champagne (feat. Juelz Santana)",
                src: "https://embed.music.apple.com/us/music-video/pop-champagne-feat-juelz-santana/297603450"
            },
        ]
    },
    {
        artist: "Jim Jones, Dilla illa & 34Zeussy",
        songs: [
            {
                title: "Really Cold",
                src: "https://embed.music.apple.com/us/music-video/really-cold/1660648274"
            },
        ]
    },
    {
        artist: "Jim Jones, Ditta, Lord Ju & OnPointLikeOP",
        songs: [
            {
                title: "Big Gifts",
                src: "https://embed.music.apple.com/us/music-video/big-gifts/1662617552"
            },
        ]
    },
    {
        artist: "Jim Jones, Dyce Payso, Mr.Chicken & Ditta",
        songs: [
            {
                title: "Everything",
                src: "https://embed.music.apple.com/us/music-video/everything/1660648326"
            },
        ]
    },
    {
        artist: "Jim Jones, The Real Ace HT & Brand HT",
        songs: [
            {
                title: "Xmas Carol",
                src: "https://embed.music.apple.com/us/music-video/xmas-carol/1661688407"
            },
        ]
    },
    {
        artist: "Jo Dee Messina",
        birthday: [{ month: "August", day: 25, year: 1970 }],
        songs: [
            {
                title: "Delicious Surprise (I Believe It)",
                src: "https://embed.music.apple.com/us/music-video/delicious-surprise-i-believe-it/1659153104"
            },
            {
                title: "Heads Carolina, Tails California",
                src: "https://embed.music.apple.com/us/music-video/heads-carolina-tails-california/1642960491"
            },
            {
                title: "My Give a Damn's Busted",
                src: "https://embed.music.apple.com/us/music-video/my-give-a-damns-busted/1659366439"
            },
        ]
    },
    {
        artist: "Jo Dee Messina & Tim McGraw",
        birthday: [{ month: "August", day: 25, year: 1970 }, { month: "May", day: 1, year: 1967 }],
        songs: [
            {
                title: "Bring On the Rain",
                src: "https://embed.music.apple.com/us/music-video/bring-on-the-rain/1636946390"
            },
        ]
    },
    {
        artist: "Jodeci",
        birthday: [{ month: "September", day: 29, year: 1969 },{ month: "July", day: 23, year: 1971 },{ month: "September", day: 2, year: 1969 },{ month: "June", day: 10, year: 1971 }],
        songs: [
            {
                title: "I'm Still Waiting",
                src: "https://embed.music.apple.com/us/music-video/im-still-waiting/1592599800"
            },
            {
                title: "Get On Up",
                src: "https://embed.music.apple.com/us/music-video/get-on-up/1445837203"
            },
            {
                title: "Freek'n You",
                src: "https://embed.music.apple.com/us/music-video/freekn-you/1445838859"
            },
            {
                title: "Gotta Love",
                src: "https://embed.music.apple.com/us/music-video/gotta-love/1445828725"
            },
            {
                title: "Every Moment",
                src: "https://embed.music.apple.com/us/music-video/every-moment/970825049"
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
            {
                title: "Good Girls",
                src: "https://embed.music.apple.com/us/music-video/good-girls/1506739993"
            },
            {
                title: "If I Was Your Man",
                src: "https://embed.music.apple.com/us/music-video/if-i-was-your-man/1506502742"
            },
            {
                title: "All or Nothing",
                src: "https://embed.music.apple.com/us/music-video/all-or-nothing/1445850569"
            },
            {
                title: "The One for Me (Edited Version)",
                src: "https://embed.music.apple.com/us/music-video/the-one-for-me-edited-version/1445828393"
            },
            {
                title: "All That I Am",
                src: "https://embed.music.apple.com/us/music-video/all-that-i-am/548919230"
            },
            {
                title: "Let's Stay Home Tonight",
                src: "https://embed.music.apple.com/us/music-video/lets-stay-home-tonight/548917560"
            },
            {
                title: "The Love Scene",
                src: "https://embed.music.apple.com/us/music-video/the-love-scene/1489699362"
            },
            {
                title: "More & More",
                src: "https://embed.music.apple.com/us/music-video/more-more/1506698631"
            },
            {
                title: "Treat Her Like a Lady",
                src: "https://embed.music.apple.com/us/music-video/treat-her-like-a-lady/251462414"
            },
            {
                title: "I Believe In You",
                src: "https://embed.music.apple.com/us/music-video/i-believe-in-you/1435830657"
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
        artist: "Joe Budden",
        birthday: [{ month: "August", day: 31, year: 1980 }],
        songs: [
            {
                title: "Follow My Lead (Explicit)",
                src: "https://embed.music.apple.com/us/music-video/follow-my-lead-explicit/408484713"
            },
            {
                title: "She Don’t Put Down (feat. Fabolous, Twista, Tank) [Remix]",
                src: "https://embed.music.apple.com/us/music-video/she-dont-put-down-feat-fabolous-twista-tank-remix/600185900"
            },
            {
                title: "NBA Feat Wiz Khalifa and French Montana",
                src: "https://embed.music.apple.com/us/music-video/nba-feat-wiz-khalifa-and-french-montana/626999432"
            },
        ]
    },
     {
        artist: "Joe Jonas",
        birthday: [{ month: "August", day: 15, year: 1989 }],
        songs: [
            {
                title: "Heart By Heart",
                src: "https://embed.music.apple.com/us/music-video/heart-by-heart/1814494385"
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
            {
                title: "Dope (feat. JID)",
                src: "https://embed.music.apple.com/us/music-video/dope-feat-jid/1628953201"
            },
            {
                title: "You Deserve It All",
                src: "https://embed.music.apple.com/us/music-video/you-deserve-it-all/1597507216"
            },
        ]
    },
    {
        artist: "John Legend & Saweetie",
        birthday: [{ month: "December", day: 28, year: 1978 }, { month: "July", day: 2, year: 1993 }],
        songs: [
            {
                title: "All She Wanna Do",
                src: "https://embed.music.apple.com/us/music-video/all-she-wanna-do/1640806897"
            },
        ]
    },
    {
        artist: "John Legend & The Roots",
        songs: [
            {
                title: "Wake Up Everybody (feat. Common & Melanie Fiona)",
                src: "https://embed.music.apple.com/us/music-video/wake-up-everybody-feat-common-melanie-fiona/386217647"
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
        artist: "Jonas Brothers",
        birthday: [{ month: "August", day: 15, year: 1989 }, { month: "September", day: 16, year: 1992 }, { month: "November", day: 5, year: 1987 }],
        songs: [
            {
                title: "Love Me To Heaven",
                src: "https://embed.music.apple.com/us/music-video/love-me-to-heaven/1805606141"
            },
        ]
    },
    {
        artist: "Jordan Adetunji",
        birthday: [{ month: "February", day: 25, year: 1999 }],
        songs: [
            {
                title: "KEHLANI (REMIX) [feat. Kehlani]",
                src: "https://embed.music.apple.com/us/music-video/kehlani-remix-feat-kehlani/1761640765"
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
                title: "Falling or flying",
                src: "https://embed.music.apple.com/us/music-video/falling-or-flying/1704023460"
            },
             {
                title: "The Way I Love You",
                src: "https://embed.music.apple.com/us/music-video/the-way-i-love-you/1810445917"
            },
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
        artist: "Joss Stone & Common",
        birthday: [{ month: "April", day: 11, year: 1987 }, { month: "March", day: 13, year: 1972 }],
        songs: [
            {
                title: "Tell Me What We're Gonna Do Now",
                src: "https://embed.music.apple.com/us/music-video/tell-me-what-were-gonna-do-now/744309982"
            },
        ]
    },
    {
        artist: "Jovan Armand",
        birthday: [{ month: "September", day: 15, year: 2000 }],
        songs: [
            {
                title: "Heavy (feat. The Game)",
                src: "https://embed.music.apple.com/us/music-video/heavy-feat-the-game/1689508984"
            },
        ]
    },
    {
        artist: "Juelz Santana",
        birthday: [{ month: "February", day: 18, year: 1982 }],
        songs: [
            {
                title: "Dipset (Santana's Town) [feat. Cam'ron]",
                src: "https://embed.music.apple.com/us/music-video/dipset-santanas-town-feat-camron/1691849685"
            },
            {
                title: "Friendly (feat. A Boogie wit da Hoodie)",
                src: "https://embed.music.apple.com/us/music-video/friendly-feat-a-boogie-wit-da-hoodie/1757646866"
            },
            {
                title: "Clockwork (Edited Version)",
                src: "https://embed.music.apple.com/us/music-video/clockwork-edited-version/1445852273"
            },
            {
                title: "Mic Check",
                src: "https://embed.music.apple.com/us/music-video/mic-check/1691867015"
            },
            {
                title: "Rain Drops",
                src: "https://embed.music.apple.com/us/music-video/rain-drops/1446731631"
            },
        ]
    },
    {
        artist: "Juelz Santana & Jadakiss",
        birthday: [{ month: "February", day: 18, year: 1982 } , { month: "May", day: 27, year: 1975 }],
        songs: [
            {
                title: "Party N B******t",
                src: "https://embed.music.apple.com/us/music-video/party-n-b-t/1753337206"
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
            {
                title: "Try Your Luck",
                src: "https://embed.music.apple.com/us/music-video/try-your-luck/1814908736"
            },
        ]
    },
    {
        artist: "Just-Ice",
        songs: [
            {
                title: "Going Way Back (feat. KRS-One)",
                src: "https://embed.music.apple.com/us/music-video/going-way-back-feat-krs-one/1797177482"
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
            {
                title: "All Around the World (feat. Ludacris)",
                src: "https://embed.music.apple.com/us/music-video/all-around-the-world-feat-ludacris/1445284409"
            },
            {
                title: "Baby (feat. Ludacris)",
                src: "https://embed.music.apple.com/us/music-video/baby-feat-ludacris/1440661565"
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
        artist: "Justine Skye & KAYTRANADA",
        birthday: [{ month: "August", day: 24, year: 1995 }, { month: "August", day: 25, year: 1992 }],
        songs: [
            {
                title: "Oh Lala",
                src: "https://embed.music.apple.com/us/music-video/oh-lala/1817498729"
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
        artist: "K-Ci & JoJo",
        birthday: [{ month: "September", day: 2, year: 1969 }, { month: "June", day: 10, year: 1971 }],
        songs: [
            {
                title: "All My Life",
                src: "https://embed.music.apple.com/us/music-video/all-my-life/1445843174"
            },
            {
                title: "Tell Me It's Real",
                src: "https://embed.music.apple.com/us/music-video/tell-me-its-real/1445872795"
            },
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
            {
                title: "Till I Die (feat. T.I.)",
                src: "https://embed.music.apple.com/us/music-video/till-i-die-feat-t-i/1445020085" 
            },
            {
                title: "Richard Milli",
                src: "https://embed.music.apple.com/us/music-video/richard-milli/1732698129"
            },
            {
                title: "Dead Wrong",
                src: "https://embed.music.apple.com/us/music-video/dead-wrong/1729369670"
            },
            {
                title: "Spin The Block",
                src: "https://embed.music.apple.com/us/music-video/spin-the-block/1717613592"
            },
            {
                title: "Buss Down",
                src: "https://embed.music.apple.com/us/music-video/buss-down/1689286717"
            },
            {
                title: "If These Walls Could Talk",
                src: "https://embed.music.apple.com/us/music-video/if-these-walls-could-talk/1666102971"
            },
            {
                title: "Milwaukee",
                src: "https://embed.music.apple.com/us/music-video/milwaukee/1642418334"
            },
            {
                title: "Birthday (feat. Yella Beezy)",
                src: "https://embed.music.apple.com/us/music-video/birthday-feat-yella-beezy/1571096914"
            },
            {
                title: "Tatted Up (feat. Fabo)",
                src: "https://embed.music.apple.com/us/music-video/tatted-up-feat-fabo/1534979886"
            },
            {
                title: "What's On Your Mind (feat. Jacquees)",
                src: "https://embed.music.apple.com/us/music-video/whats-on-your-mind-feat-jacquees/1531130332"
            },
            {
                title: "Rude Boy",
                src: "https://embed.music.apple.com/us/music-video/rude-boy/1511915107"
            },
            {
                title: "Lottery (Renegade)",
                src: "https://embed.music.apple.com/us/music-video/lottery-renegade/1472056474"
            },
            {
                title: "Racks Like This (feat. Moneybagg Yo)",
                src: "https://embed.music.apple.com/us/music-video/racks-like-this-feat-moneybagg-yo/1361821117"
            },
            {
                title: "Lyric Ave",
                src: "https://embed.music.apple.com/us/music-video/lyric-ave/1444847333"
            },
            {
                title: "Ice Cream",
                src: "https://embed.music.apple.com/us/music-video/ice-cream/1445018125"
            },
             {
                title: "Comfortable",
                src: "https://embed.music.apple.com/us/music-video/comfortable/1444877880"
            },
            {
                title: "Turn Up For a Check (feat. Yo Gotti)",
                src: "https://embed.music.apple.com/us/music-video/turn-up-for-a-check-feat-yo-gotti/1445300182"
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
            {
                title: "You",
                src: "https://embed.music.apple.com/us/music-video/you/1676483370"
            },
            {
                title: "Scooch",
                src: "https://embed.music.apple.com/us/music-video/scooch/1614847700"
            },
            {
                title: "The Rain",
                src: "https://embed.music.apple.com/us/music-video/the-rain/1791192798"
            },
            {
                title: "Mindful",
                src: "https://embed.music.apple.com/us/music-video/mindful/1097652755"
            },
            {
                title: "Something About the Night",
                src: "https://embed.music.apple.com/us/music-video/something-about-the-night/996789089"
            },
            {
                title: "Love 'Em All",
                src: "https://embed.music.apple.com/us/music-video/love-em-all/967154610"
            },
        ]
    },
    {
        artist: "KATO",
        songs: [
            {
                title: "Never Let U Go (feat. Snoop Dogg & Brandon Beal)",
                src: "https://embed.music.apple.com/us/music-video/never-let-u-go-feat-snoop-dogg-brandon-beal/1459237569"
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
        artist: "Kaci Battaglia & Ludacris",
        birthday: [{ month: "October", day: 3, year: 1987 }, { month: "September", day: 11, year: 1977 }],
        songs: [
            {
                title: "Body Shots",
                src: "https://embed.music.apple.com/us/music-video/body-shots/402219513"
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
             {
                title: "All I Can Say",
                src: "https://embed.music.apple.com/us/music-video/all-i-can-say/1813304132"
            },
        ]
    },
    {
        artist: "Kalin White",
        birthday: [{ month: "January", day: 4, year: 1995 }],
        songs: [
            {
                title: "Zai Zai",
                src: "https://embed.music.apple.com/us/music-video/zai-zai/1464075457"
            },
        ]
    },
    {
        artist: "Kane Brown & Katelyn Brown",
        birthday: [{ month: "October", day: 21, year: 1993 }, { month: "June", day: 19, year: 1992 }],
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
        birthday: [{ month: "June", day: 8, year: 1977 }, { month: "December", day: 4, year: 1969 }],
        songs: [
            {
                title: "No Church In the Wild (feat. Frank Ocean & The-Dream)",
                src: "https://embed.music.apple.com/us/music-video/no-church-in-the-wild-feat-frank-ocean-the-dream/1445740199"
            },
        ]
    },
    {
        artist: "Kardinal Offishall",
        birthday: [{ month: "May", day: 11, year: 1976 }],
        songs: [
            {
                title: "Numba 1 (Tide Is High) [feat. Keri Hilson] {Extended Mix} [Extended Mix]",
                src: "https://embed.music.apple.com/us/music-video/numba-1-tide-is-high-feat-keri-hilson-extended-mix/1446006043"
            },
        ]
    },
    {
        artist: "Kash Doll & DJ Infamous",
        songs: [
            {
                title: "Bad Azz (feat. Latto)",
                src: "https://embed.music.apple.com/us/music-video/bad-azz-feat-latto/1549074646"
            },
        ]
    },
    {
        artist: "Kasino",
        songs: [
            {
                title: "I Promise (feat. Styles P)",
                src: "https://embed.music.apple.com/us/music-video/i-promise-feat-styles-p/1537004528"
            },
            {
                title: "Atlanta Live (feat. DMX)",
                src: "https://embed.music.apple.com/us/music-video/atlanta-live-feat-dmx/1583686968"
            },
        ]
    },
    {
        artist: "Kat Deluna",
        birthday: [{ month: "November", day: 26, year: 1987 }],
        songs: [
            {
                title: "Hottie With a Body",
                src: "https://embed.music.apple.com/us/music-video/hottie-with-a-body/1703830307" 
            },
            {
                title: "Drop It Low",
                src: "https://embed.music.apple.com/us/music-video/drop-it-low/458633158" 
            },
            {
                title: "Dancing Tonight (feat. Fo Onassis)",
                src: "https://embed.music.apple.com/us/music-video/dancing-tonight-feat-fo-onassis/428283031"  
            },
            {
                title: "Run the Show (feat. Busta Rhymes)",
                src: "https://embed.music.apple.com/us/music-video/run-the-show-feat-busta-rhymes/276136076"   
            },
        ]
    },
    {
        artist: "Kat Deluna & Jeremih",
        birthday: [{ month: "November", day: 26, year: 1987 }, { month: "July", day: 17, year: 1987 }],
        songs: [
            {
                title: "What a Night",
                src: "https://embed.music.apple.com/us/music-video/what-a-night/1090230384" 
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
        birthday: [{ month: "October", day: 25, year: 1984 }, { month: "October", day: 20, year: 1971 }],
        songs: [

            {
                title: "California Gurls (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/california-gurls-feat-snoop-dogg/1445731701"
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
            {
                title: "everything",
                src: "https://embed.music.apple.com/us/music-video/everything/1622080552"
            },
            {
                title: "little story",
                src: "https://embed.music.apple.com/us/music-video/little-story/1611564363"
            },
            {
                title: "Can I (feat. Tory Lanez) [Quarantine Style]",
                src: "https://embed.music.apple.com/us/music-video/can-i-feat-tory-lanez-quarantine-style/1525873785"
            },
            {
                title: "Toxic (Quarantine Style)",
                src: "https://embed.music.apple.com/us/music-video/toxic-quarantine-style/1505987987"
            },
            {
                title: "All Me / Change Your Life",
                src: "https://embed.music.apple.com/us/music-video/all-me-change-your-life/1499899024"
            },
            {
                title: "Folded",
                src: "https://embed.music.apple.com/us/music-video/folded/1822891728"
            },
        ]
    },
    {
        artist: "Keith Sweat",
        birthday: [{ month: "July", day: 22, year: 1961 }],
        songs: [
            {
                title: "Can't Nobody (feat. Raheem DeVaughn)",
                src: "https://embed.music.apple.com/us/music-video/cant-nobody-feat-raheem-devaughn/1611190097"
            },
            {
                title: "Make You Say Ooh",
                src: "https://embed.music.apple.com/us/music-video/make-you-say-ooh/482280176"
            },
            {
                title: "Test Drive (feat. J.O.E.) [Closed-Captioned]",
                src: "https://embed.music.apple.com/us/music-video/test-drive-feat-j-o-e-closed-captioned/727326855"
            },
            {
                title: "Real Man",
                src: "https://embed.music.apple.com/us/music-video/real-man/269733086"
            },
            {
                title: "Nobody (feat. Athena Cage)",
                src: "https://embed.music.apple.com/us/music-video/nobody-feat-athena-cage/272859404"
            },
            {
                title: "Why Me Baby?",
                src: "https://embed.music.apple.com/us/music-video/why-me-baby/1513660651"
            },
            {
                title: "Why Me Baby? (Pt. 2)",
                src: "https://embed.music.apple.com/us/music-video/why-me-baby-pt-2/1513664718"
            },
            {
                title: "Keep It Comin'",
                src: "https://embed.music.apple.com/us/music-video/keep-it-comin/272859112"
            },
            {
                title: "I'll Give All My Love to You",
                src: "https://embed.music.apple.com/us/music-video/ill-give-all-my-love-to-you/272859155"
            },
            {
                title: "Merry Go Round",
                src: "https://embed.music.apple.com/us/music-video/merry-go-round/272859117"
            },
            {
                title: "Don't Stop Your Love",
                src: "https://embed.music.apple.com/us/music-video/dont-stop-your-love/272678124"
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
            {
                title: "Blindfold Me (feat. Nas)",
                src: "https://embed.music.apple.com/us/music-video/blindfold-me-feat-nas/326593346"
            },
        ]
    },
    {
        artist: "Kelly Clarkson",
        birthday: [{ month: "April", day: 24, year: 1982 }],
        songs: [
            {
                title: "Love So Soft",
                src: "https://embed.music.apple.com/us/music-video/love-so-soft/1282105737"
            },
            {
                title: "Meaning of Life",
                src: "https://embed.music.apple.com/us/music-video/meaning-of-life/1363191171"
            },
            {
                title: "Invincible",
                src: "https://embed.music.apple.com/us/music-video/invincible/1015646529"
            },
            {
                title: "Heartbeat Song",
                src: "https://embed.music.apple.com/us/music-video/heartbeat-song/965068333"
            },
            {
                title: "Wrapped in Red",
                src: "https://embed.music.apple.com/us/music-video/wrapped-in-red/944043499"
            },
            {
                title: "Silent Night (feat. Reba McEntire & Trisha Yearwood)",
                src: "https://embed.music.apple.com/us/music-video/silent-night-feat-reba-mcentire-trisha-yearwood/774656543"
            },
            {
                title: "Underneath the Tree",
                src: "https://embed.music.apple.com/us/music-video/underneath-the-tree/1282459559"
            },
            {
                title: "Tie It Up",
                src: "https://embed.music.apple.com/us/music-video/tie-it-up/688803460"
            },
            {
                title: "People Like Us",
                src: "https://embed.music.apple.com/us/music-video/people-like-us/656269509"
            },
            {
                title: "Don't Rush (CMA Awards Performance 2012)",
                src: "https://embed.music.apple.com/us/music-video/dont-rush-cma-awards-performance-2012/1538915241"
            },
            {
                title: "Catch My Breath",
                src: "https://embed.music.apple.com/us/music-video/catch-my-breath/578763845"
            },
            {
                title: "Stronger (What Doesn't Kill You)",
                src: "https://embed.music.apple.com/us/music-video/stronger-what-doesnt-kill-you/489257593"
            },
            {
                title: "Mr. Know It All",
                src: "https://embed.music.apple.com/us/music-video/mr-know-it-all/468219024"
            },
            {
                title: "Already Gone",
                src: "https://embed.music.apple.com/us/music-video/already-gone/325439418"
            },
            {
                title: "I Do Not Hook Up",
                src: "https://embed.music.apple.com/us/music-video/i-do-not-hook-up/313398520"
            },
            {
                title: "Because of You",
                src: "https://embed.music.apple.com/us/music-video/because-of-you/548917935"
            },
            {
                title: "Behind These Hazel Eyes",
                src: "https://embed.music.apple.com/us/music-video/behind-these-hazel-eyes/327233958"
            },
            {
                title: "Breakaway",
                src: "https://embed.music.apple.com/us/music-video/breakaway/277266922"
            },
            {
                title: "Before Your Love",
                src: "https://embed.music.apple.com/us/music-video/before-your-love/332798611"
            },
            {
                title: "A Moment Like This",
                src: "https://embed.music.apple.com/us/music-video/a-moment-like-this/452720145"
            },
            {
                title: "The Trouble With Love Is",
                src: "https://embed.music.apple.com/us/music-video/the-trouble-with-love-is/993665021"
            },
            {
                title: "Miss Independent",
                src: "https://embed.music.apple.com/us/music-video/miss-independent/1349410273"
            },
        ]
    },
    {
        artist: "Kelly Clarkson & Reba McEntire",
        birthday: [{ month: "April", day: 24, year: 1982 }, { month: "March", day: 28, year: 1955 }],
        songs: [
            {
                title: "Because of You",
                src: "https://embed.music.apple.com/us/music-video/because-of-you/1445826412"
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
            {
                title: "Ghetto (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/ghetto-feat-snoop-dogg/265204489"
            },
            {
                title: "Flowers",
                src: "https://embed.music.apple.com/us/music-video/flowers/1554135402"
            },
            {
                title: "Coffee",
                src: "https://embed.music.apple.com/us/music-video/coffee/1508030051"
            },
            {
                title: "Kisses Down Low",
                src: "https://embed.music.apple.com/us/music-video/kisses-down-low/1444338839"
            },
            {
                title: "Ice (feat. Lil Wayne)",
                src: "https://embed.music.apple.com/us/music-video/ice-feat-lil-wayne/1445863789"
            },
            {
                title: "Down for Whatever (feat. The WAV.s)",
                src: "https://embed.music.apple.com/us/music-video/down-for-whatever-feat-the-wav-s/1446735191"
            },
            {
                title: "Lay It On Me (feat. Big Sean)",
                src: "https://embed.music.apple.com/us/music-video/lay-it-on-me-feat-big-sean/1445730719"
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
        artist: "Kendra Black",
        songs: [
            {
                title: "Rude (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/rude-feat-snoop-dogg/1318799254"
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
            {
                title: "Super Bowl LIX Halftime Show (Live)",
                src: "https://embed.music.apple.com/us/music-video/super-bowl-lix-halftime-show-live/1794822455"
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
            {
                title: "Lose Control (feat. Nelly)",
                src: "https://embed.music.apple.com/us/music-video/lose-control-feat-nelly/1445860952"
            },
            {
                title: "One Night Stand (feat. Chris Brown)",
                src: "https://embed.music.apple.com/us/music-video/one-night-stand-feat-chris-brown/1446733747"
            },
            {
                title: "Slow Dance",
                src: "https://embed.music.apple.com/us/music-video/slow-dance/1445855593"
            },
            {
                title: "Energy",
                src: "https://embed.music.apple.com/us/music-video/energy/1445826572"
            },
        ]
    },
    {
        artist: "Keri Hilson & Chipmunk",
        songs: [
            {
                title: "In the Air",
                src: "https://embed.music.apple.com/us/music-video/in-the-air/430368533"
            },
        ]
    },
    {
        artist: "Keri Hison & Lil Wayne",
        birthday: [{ month: "December", day: 5, year: 1982 }, { month: "September", day: 27, year: 1982 }],
        songs: [
            {
                title: "Turnin Me On (feat. Lil Wayne)",
                src: "https://embed.music.apple.com/us/music-video/turnin-me-on-feat-lil-wayne/1445864946"
            },
        ]
    },
    {
        artist: "Keri Hilson & Rick Ross",
        birthday: [{ month: "December", day: 5, year: 1982 }, { month: "January", day: 28, year: 1976 }],
        songs: [
            {
                title: "The Way You Love Me (feat. Rick Ross)",
                src: "https://embed.music.apple.com/us/music-video/the-way-you-love-me-feat-rick-ross/1445846227"
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
            {
                title: "Trust (feat. Monica)",
                src: "https://embed.music.apple.com/us/music-video/trust-feat-monica/1445872955"
            },
        ]
    },
    {
        artist: "Kiana Ledé & Kehlani",
        birthday: [{ month: "April", day: 3, year: 1997 }, { month: "April", day: 24, year: 1995 }],
        songs: [
            {
                title: "Ur Best Friend",
                src: "https://embed.music.apple.com/us/music-video/ur-best-friend/1578754956"
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
            {
                title: "Make Her Say (feat. Kanye West & Common) [Super Clean Version]",
                src: "https://embed.music.apple.com/us/music-video/make-her-say-feat-kanye-west-common-super-clean-version/1446013761"
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
            {
                title: "Nasty (feat. Jeremih & Spice)",
                src: "https://embed.music.apple.com/us/music-video/nasty-feat-jeremih-spice/1144663942"
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
        artist: "Kim Kelly",
        songs: [
            {
                title: "Alive (feat. Vybz Kartel)",
                src: "https://embed.music.apple.com/us/music-video/alive-feat-vybz-kartel/1661021102"
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
        artist: "Kirko Bangz",
        birthday: [{ month: "August", day: 20, year: 1989 }],
        songs: [
            {
                title: "Way Too Soft",
                src: "https://embed.music.apple.com/us/music-video/way-too-soft/1811532002"
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
        artist: "Konshens, Spice & Rvssian",
        songs: [
            {
                title: "Pay For It",
                src: "https://embed.music.apple.com/us/music-video/pay-for-it/1562189159"
            },
        ]
    },
    {
        artist: "Kool G Rap & Nas",
        birthday: [{ month: "July", day: 20, year: 1968 }, { month: "September", day: 14, year: 1973 }],
        songs: [
            {
                title: "Fast Life (feat. Nas)",
                src: "https://embed.music.apple.com/us/music-video/fast-life-feat-nas/313872976"
            },
        ]
    },
    {
        artist: "Kool Moe Dee",
        birthday: [{ month: "August", day: 8, year: 1962 }],
        songs: [
            {
                title: "Rise 'N' Shine (feat. Chuck D & KRS-One)",
                src: "https://embed.music.apple.com/us/music-video/rise-n-shine-feat-chuck-d-krs-one/1332916072"
            },
        ]
    },
    {
        artist: "KRS-One",
        birthday: [{ month: "August", day: 20, year: 1965 }],
        songs: [
            {
                title: "MC's Act Like They Don't Know",
                src: "https://embed.music.apple.com/us/music-video/mcs-act-like-they-dont-know/301982529"
            },
            {
                title: "Step Into A World (Rapture's Delight)",
                src: "https://embed.music.apple.com/us/music-video/step-into-a-world-raptures-delight/1537198697"
            },
            {
                title: "Sound of da Police",
                src: "https://embed.music.apple.com/us/music-video/sound-of-da-police/1286458841"
            },
        ]
    },
    {
        artist: "Kreesha Turner",
        birthday: [{ month: "June", day: 10, year: 1985 }],
        songs: [
            {
                title: "Sexy Gal (feat. T.O.K.)",
                src: "https://embed.music.apple.com/us/music-video/sexy-gal-feat-t-o-k/1444883761"
            },
        ]
    },
    {
        artist: "Kygo & Whitney Houston",
        birthday: [{ month: "September", day: 11, year: 1991 }, { month: "August", day: 9, year: 1963 }],
        songs: [
            {
                title: "Higher Love",
                src: "https://embed.music.apple.com/us/music-video/higher-love/1477881142"
            },
        ]
    },
    {
        artist: "KYLE",
        birthday: [{ month: "May", day: 18, year: 1993 }],
        songs: [
            {
                title: "Just a Picture (feat. Kehlani)",
                src: "https://embed.music.apple.com/us/music-video/just-a-picture-feat-kehlani/1561193791"
            },
        ]
    },
    {
        artist: "Kyle Banks",
        songs: [
            {
                title: "4 U (feat. K CAMP) [Official Music Video]",
                src: "https://embed.music.apple.com/us/music-video/4-u-feat-k-camp-official-music-video/1610360574"
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
        artist: "kwn",
        songs: [
            {
                title: "worst behaviour (feat. Kehlani)",
                src: "https://embed.music.apple.com/us/music-video/worst-behaviour-feat-kehlani/1796020693"
            },
            {
                title: "do what i say",
                src: "https://embed.music.apple.com/us/music-video/do-what-i-say/1809817391"
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
            {
                title: "Abracadabra",
                src: "https://embed.music.apple.com/us/music-video/abracadabra/1793872676"
            },
        ]
    },
    {
        artist: "Lakeyah",
        birthday: [{ month: "February", day: 28, year: 2001 }],
        songs: [
            {
                title: "Mind Yo Business (feat. Latto)",
                src: "https://embed.music.apple.com/us/music-video/mind-yo-business-feat-latto/1626143421"
            },
        ]
    },
    {
        artist: "Larry June & Cardo Got Wings",
        birthday: [{ month: "April", day: 8, year: 1991 }, { month: "September", day: 24, year: 1984 }],
        songs: [
            {
                title: "The Good Kind",
                src: "https://embed.music.apple.com/us/music-video/the-good-kind/1703126807"
            },
            {
                title: "Black Man",
                src: "https://embed.music.apple.com/us/music-video/black-man/1815827848"
            },
        ]
    },
    { 
        artist: "LaTheGoat",
        songs: [
            {
                title: "8 Bands (feat. Rick Ross & Jermaine Dupri) [Remix / Performance Version]",
                src: "https://embed.music.apple.com/us/music-video/8-bands-feat-rick-ross-jermaine-dupri-remix-performance/1552919842"
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
            {
                title: "Blick Sum (feat. Playboi Carti)",
                src: "https://embed.music.apple.com/us/music-video/blick-sum-feat-playboi-carti/1793418411"
            },
            {
                title: "See Sum",
                src: "https://embed.music.apple.com/us/music-video/see-sum/1481639714"
            },
            {
                title: "Muwop (feat. Gucci Mane)",
                src: "https://embed.music.apple.com/us/music-video/muwop-feat-gucci-mane/1525624729"
            },
            {
                title: "The Biggest",
                src: "https://embed.music.apple.com/us/music-video/the-biggest/1568376939"
            },
            {
                title: "Big Energy",
                src: "https://embed.music.apple.com/us/music-video/big-energy/1707103685"
            },
            {
                title: "FTCU (feat. GloRilla & Gangsta Boo)",
                src: "https://embed.music.apple.com/us/music-video/ftcu-feat-glorilla-gangsta-boo/1657532811"
            },
            {
                title: "Georgia Peach",
                src: "https://embed.music.apple.com/us/music-video/georgia-peach/1762107019"
            },
        ]
    },
    {
        artist: "Layton Greene",
        birthday: [{ month: "December", day: 4, year: 1998 }], 
        songs: [
            {
                title: "I Love You",
                src: "https://embed.music.apple.com/us/music-video/i-love-you/1477956063"
            },
            {
                title: "Spin Again",
                src: "https://embed.music.apple.com/us/music-video/spin-again/1687201090"
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
                src: "https://embed.music.apple.com/us/music-video/happy/1782514589"
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
        artist: "Lexie Liu",
        birthday: [{ month: "December", day: 21, year: 1998 }],
        songs: [
            {
                title: "POP GIRL",
                src: "https://embed.music.apple.com/us/music-video/pop-girl/1801798937"
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
        birthday: [{ month: "December", day: 3, year: 1994 }, { month: "June", day: 14, year: 1993 }],
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
        artist: "Lil Baby & Nardo Wick",
        birthday: [{ month: "December", day: 3, year: 1994 } , { month: "December", day: 30, year: 2001 }],
        songs: [
            {
                title: "Pop Out",
                src: "https://embed.music.apple.com/us/music-video/pop-out/1656111472"
            },
        ]
    },
    {
        artist: "Lil Darius, Tay Keith & Nardo Wick",
        songs: [
            {
                title: "Lamborghini Boys (with Tay Keith and Nardo Wick)",
                src: "https://embed.music.apple.com/us/music-video/lamborghini-boys-with-tay-keith-and-nardo-wick/1702074523"
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
            {
                title: "3 Headed Goat (feat. Lil Baby & Polo G)",
                src: "https://embed.music.apple.com/us/music-video/3-headed-goat-feat-lil-baby-polo-g/1580218657"
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
        artist: "Lil Nas X & Nas",
        birthday: [{ month: "April", day: 9, year: 1999 }, { month: "September", day: 14, year: 1973 }],
        songs: [
            {
                title: "Rodeo (feat. Nas)",
                src: "https://embed.music.apple.com/us/music-video/rodeo-feat-nas/1497969008"
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
        artist: "Lil Scrappy & Ludacris",
        birthday: [{ month: "January", day: 19, year: 1984 }, { month: "September", day: 11, year: 1977 }],
        songs: [
            {
                title: "Addicted to Money",
                src: "https://embed.music.apple.com/us/music-video/addicted-to-money/1445829912"
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
            {
                title: "Earthquake (feat. Jazze Pha)",
                src: "https://embed.music.apple.com/us/music-video/earthquake-feat-jazze-pha/1691947956"
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
            {
                title: "Go Awff",
                src: "https://embed.music.apple.com/us/music-video/go-awff/1463466272"
            },
            {
                title: "Took Us a Break",
                src: "https://embed.music.apple.com/us/music-video/took-us-a-break/1312704553"
            },
            {
                title: "Crush On You",
                src: "https://embed.music.apple.com/us/music-video/crush-on-you/539744158"
            },
            {
                title: "Lighters Up",
                src: "https://embed.music.apple.com/us/music-video/lighters-up/269733437"
            },
            {
                title: "The Jump Off (feat. Mr. Cheeks)",
                src: "https://embed.music.apple.com/us/music-video/the-jump-off-feat-mr-cheeks/269753977"
            },
            {
                title: "How Many Licks? (feat. Sisqo)",
                src: "https://embed.music.apple.com/us/music-video/how-many-licks-feat-sisqo/281883358"
            },
            {
                title: "No Matter What They Say",
                src: "https://embed.music.apple.com/us/music-video/no-matter-what-they-say/281883326"
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
        artist: "Lila Iké",
        birthday: [{ month: "January", day: 23, year: 1994 }],
        songs: [
            {
                title: "He Loves Us Both (feat. H.E.R.)",
                src: "https://embed.music.apple.com/us/music-video/he-loves-us-both-feat-h-e-r/1745566520"
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
        artist: "Little Dragon",
        songs: [
            {
                title: "Peace of Mind (feat. Faith Evans) [Music Video]",
                src: "https://embed.music.apple.com/us/music-video/peace-of-mind-feat-faith-evans-music-video/1445024019"
            },
        ]
    },
       {
        artist: "Little Mix",
        birthday: [{ month: "July", day: 10, year: 1993 }, { month: "October", day: 4, year: 1991 }, { month: "December", day: 26, year: 1992 }, { month: "June", day: 14, year: 1991 }],
        songs: [
            {
                title: "How Ya Doin'? (feat. Missy Elliott)",
                src: "https://embed.music.apple.com/us/music-video/how-ya-doin-feat-missy-elliott/630718697"
            },
        ]
    },
    {
        artist: "Lizzo",
        birthday: [{ month: "April", day: 27, year: 1988 }],
        songs: [
            {
                title: "Love in Real Life",
                src: "https://embed.music.apple.com/us/music-video/love-in-real-life/1800353342"
            },
            {
                title: "Tempo (feat. Missy Elliott)",
                src: "https://embed.music.apple.com/us/music-video/tempo-feat-missy-elliott/1474213267"
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
            {
                title: "Born Again (feat. Doja Cat & RAYE)",
                src: "https://embed.music.apple.com/us/music-video/born-again-feat-doja-cat-raye/1794822079"
            },
            {
                title: "FXCK UP THE WORLD (Vixi Solo Version)",
                src: "https://embed.music.apple.com/us/music-video/fxck-up-the-world-vixi-solo-version/1799211206"
            },
             {
                title: "When I'm With You (feat. Tyla)",
                src: "https://embed.music.apple.com/us/music-video/when-im-with-you-feat-tyla/1814702650"
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
        artist: "LL COOL J, Ludacris & Keith Murray",
        songs: [
            {
                title: "Fatty Girl",
                src: "https://embed.music.apple.com/us/music-video/fatty-girl/1446736878"
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
        artist: "London On Da Track & G-Eazy",
        birthday: [{ month: "March", day: 27, year: 1991 }, { month: "May", day: 24, year: 1989 }],
        songs: [
            {
                title: "Throw Fits (feat. City Girls & Juvenile)",
                src: "https://embed.music.apple.com/us/music-video/throw-fits-feat-city-girls-juvenile/1463690402"
            },
        ]
    },
    {
        artist: "Loopy Ferrell",
        songs: [
            {
                title: "Bankroll (feat. Jadakiss)",
                src: "https://embed.music.apple.com/us/music-video/bankroll-feat-jadakiss/1728752022"
            },
        ]
    },
     {
        artist: "Lorde",
        birthday: [{ month: "November", day: 7, year: 1996 }],
        songs: [
            {
                title: "What Was That",
                src: "https://embed.music.apple.com/us/music-video/what-was-that/1813995942"
            },
             {
                title: "Hammer",
                src: "https://embed.music.apple.com/us/music-video/hammer/1822660878"
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
        artist: "Lourdiz",
        birthday: [{ month: "April", day: 18, year: 2001 }],
        songs: [
            {
                title: "Get Along (feat. Shenseea)",
                src: "https://embed.music.apple.com/us/music-video/get-along-feat-shenseea/1599812406"
            },
        ]
    },
    {
        artist: "LUCKI",
        birthday: [{ month: "May", day: 30, year: 1996 }],
        songs: [
            {
                title: "OverTh!nking",
                src: "https://embed.music.apple.com/us/music-video/overth-nking/1802024199"
            },
        ]
    },
    {
        artist: "Luciano",
        birthday: [{ month: "October", day: 20, year: 1964 }],
        songs: [
            {
                title: "Africa We Love You",
                src: "https://embed.music.apple.com/us/music-video/africa-we-love-you/1698414282"
            },
            {
                title: "It's Me Again Jah (2022 Version)",
                src: "https://embed.music.apple.com/us/music-video/its-me-again-jah-2022-version/1604637975"
            },
            {
                title: "Serve Jah, Rototom Sunsplash, Benicasim, 2017 (En Vivo)",
                src: "https://embed.music.apple.com/us/music-video/serve-jah-rototom-sunsplash-benicasim-2017-en-vivo/1596220280"
            },
            {
                title: "The Music (feat. Jesse Royal)",
                src: "https://embed.music.apple.com/us/music-video/the-music-feat-jesse-royal/1560696529"
            },
            {
                title: "In the Name of Love",
                src: "https://embed.music.apple.com/us/music-video/in-the-name-of-love/1091608801"
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
            {
                title: "Representin (feat. Kelly Rowland)",
                src: "https://embed.music.apple.com/us/music-video/representin-feat-kelly-rowland/1446738742"
            },
            {
                title: "Rest of My Life (feat. David Guetta)",
                src: "https://embed.music.apple.com/us/music-video/rest-of-my-life-feat-david-guetta/1446742827"
            },
            {
                title: "Two Miles An Hour (feat. Playaz Circle) [Remix]",
                src: "https://embed.music.apple.com/us/music-video/two-miles-an-hour-feat-playaz-circle-remix/1691868640"
            },
            {
                title: "What's Your Fantasy (Radio Edit)",
                src: "https://embed.music.apple.com/us/music-video/whats-your-fantasy-radio-edit/1445836039"
            },
            {
                title: "Splash Waterfalls (Alternate Uncut Version)",
                src: "https://embed.music.apple.com/us/music-video/splash-waterfalls-alternate-uncut-version/1445733236"
            },
        ]
    },
    {
        artist: "Ludacris, Chris Brown & Sean Garrett",
        birthday: [{ month: "September", day: 11, year: 1977 }, { month: "May", day: 5, year: 1989 }, { month: "March", day: 30, year: 1979 }],
        songs: [
            {
                title: "What Them Girls Like",
                src: "https://embed.music.apple.com/us/music-video/what-them-girls-like/1445837053"
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
        artist: "Ludacris, Enrique Iglesias & DJ Frank E",
        songs: [
            {
                title: "Tonight (I'm F****n' You) [feat. Ludacris & DJ Frank E]",
                src: "https://embed.music.apple.com/us/music-video/tonight-im-fuckin-you-feat-ludacris-dj-frank-e/1445834786"
            },
        ]
    },
    {
        artist: "Ludacris & Plies",
        birthday: [{ month: "September", day: 11, year: 1977 },{ month: "July", day: 1, year: 1976 }],
        songs: [
            {
                title: "Nasty Girl",
                src: "https://embed.music.apple.com/us/music-video/nasty-girl/1446736742"
            }
        ]
    },
    {
        artist: "Ludacris & Shawnna",
        birthday: [{ month: "September", day: 11, year: 1977 },{ month: "January", day: 3, year: 1978 }],
        songs: [
            {
                title: "Shake Dat Sh**",
                src: "https://embed.music.apple.com/us/music-video/shake-dat-sh/1445849523"
            }
        ]
    },
    {
        artist: "Ludacris & Trey Songz",
        birthday: [{ month: "September", day: 11, year: 1977 },{ month: "November", day: 28, year: 1984 }],
        songs: [
            {
                title: "Sex Room",
                src: "https://embed.music.apple.com/us/music-video/sex-room/1445845394"
            }
        ]
    },
    {
        artist: "Ludacris featuring Pharrell",
        birthday: [{ month: "September", day: 11, year: 1977 },{ month: "April", day: 5, year: 1973 }],
        songs: [
            {
                title: "Money Maker (feat. Pharrell)",
                src: "https://embed.music.apple.com/us/music-video/money-maker-feat-pharrell/1445704220"
            }
        ]
    },
    {
        artist: "Ludacris featuring Shawnna & Lil' Flip",
        birthday: [{ month: "September", day: 11, year: 1977 },{ month: "January", day: 3, year: 1978 },{ month: "March", day: 3, year: 1981 }],
        songs: [
            {
                title: "Pussy Poppin (Edited Uncut Version) [Edited Uncut Version]",
                src: "https://embed.music.apple.com/us/music-video/pussy-poppin-edited-uncut-version-edited-uncut-version/1445838051"
            }
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
        artist: "Lukas Graham",
        birthday: [{ month: "September", day: 18, year: 1988 }],
        songs: [
            {
                title: "You You You",
                src: "https://embed.music.apple.com/us/music-video/you-you-you/1807337206"
            },
            {
                title: "You You You",
                src: "https://embed.music.apple.com/us/music-video/you-you-you/1811344957"
            },
        ]
    },
    {
        artist: "Lumidee",
        birthday: [{ month: "October", day: 13, year: 1984 }],
        songs: [
            {
                title: "Crazy (feat. Pitbull)",
                src: "https://embed.music.apple.com/us/music-video/crazy-feat-pitbull/299409352"
            },
        ]
    },
    {
        artist: "Lumidee & Tony Sunshine",
        birthday: [{ month: "October", day: 13, year: 1984 }, { month: "April", day: 23, year: 1977 }],
        songs: [
            {
                title: "She's Like the Wind",
                src: "https://embed.music.apple.com/us/music-video/shes-like-the-wind/443465572"
            },
        ]
    },
    {
        artist: "M1llionz",
        songs: [
            {
                title: "RS11 (feat. Mozzy)",
                src: "https://embed.music.apple.com/us/music-video/rs11-feat-mozzy/1772302695"
            },
        ]
    },
     {
        artist: "MARINA",
        birthday: [{ month: "October", day: 10, year: 1985 }],
        songs: [
            {
                title: "BUTTERFLY",
                src: "https://embed.music.apple.com/us/music-video/butterfly/1797042748"
            },
             {
                title: "Ancient Dreams In A Modern Land",
                src: "https://embed.music.apple.com/us/music-video/ancient-dreams-in-a-modern-land/1568822269"
            },
              {
                title: "Purge The Poison",
                src: "https://embed.music.apple.com/us/music-video/purge-the-poison/1563070517"
            },
             {
                title: "Man's World",
                src: "https://embed.music.apple.com/us/music-video/mans-world/1539408264"
            },
              {
                title: "Orange Trees",
                src: "https://embed.music.apple.com/us/music-video/orange-trees/1457557237"
            },
             {
                title: "CUNTISSIMO",
                src: "https://embed.music.apple.com/us/music-video/cuntissimo/1807957069"
            },
             {
                title: "I <3 YOU",
                src: "https://embed.music.apple.com/us/music-video/i-3-you/1819027124"
            },
        ]
    },
       {
        artist: "Maren Morris",
        birthday: [{ month: "April", day: 10, year: 1990 }],
        songs: [
            {
                title: "bed no breakfast",
                src: "https://embed.music.apple.com/us/music-video/bed-no-breakfast/1809256016"
            },
        ]
    },
      {
        artist: "Marina and The Diamonds",
        songs: [
            {
                title: "Happy",
                src: "https://embed.music.apple.com/us/music-video/happy/969275905"
            },
             {
                title: "Froot",
                src: "https://embed.music.apple.com/us/music-video/froot/943132400"
            },
            {
                title: "Primadonna",
                src: "https://embed.music.apple.com/us/music-video/primadonna/515823529"
            },
             {
                title: "Oh No!",
                src: "https://embed.music.apple.com/us/music-video/oh-no/382691563"
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
        artist: "Mack Wilds",
        birthday: [{ month: "July", day: 15, year: 1989 }],
        songs: [
            {
                title: "Henny (Remix) [feat. French Montana, Mobb Deep & Busta Rhymes]",
                src: "https://embed.music.apple.com/us/music-video/henny-remix-feat-french-montana-mobb-deep-busta-rhymes/1283729775"
            },
        ]
    },
    {
        artist: "Macy Gray, The California Jet Club & Maino",
        songs: [
            {
                title: "Every Night",
                src: "https://embed.music.apple.com/us/music-video/every-night/1647655269"
            },
        ]
    },
    {
        artist: "Madcon",
        songs: [
            {
                title: "One Life (feat. Kelly Rowland)",
                src: "https://embed.music.apple.com/us/music-video/one-life-feat-kelly-rowland/656508760"
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
            {
                title: "Give Me All Your Luvin' (feat. Nicki Minaj & M.I.A.)",
                src: "https://embed.music.apple.com/us/music-video/give-me-all-your-luvin-feat-nicki-minaj-m-i-a/1446736306"
            },
            {
                title: "Turn Up the Radio",
                src: "https://embed.music.apple.com/us/music-video/turn-up-the-radio/1445725649"
            },
            {
                title: "Don't Tell Me",
                src: "https://embed.music.apple.com/us/music-video/dont-tell-me/1716122709"
            },
            {
                title: "Frozen",
                src: "https://embed.music.apple.com/us/music-video/frozen/1651805259"
            },
            {
                title: "Justify My Love (HD Remaster)",
                src: "https://embed.music.apple.com/us/music-video/justify-my-love-hd-remaster/1704101357"
            },
            {
                title: "Celebration",
                src: "https://embed.music.apple.com/us/music-video/celebration/328936586"
            },
            {
                title: "Give It 2 Me",
                src: "https://embed.music.apple.com/us/music-video/give-it-2-me/281969320"
            },
            {
                title: "Miles Away",
                src: "https://embed.music.apple.com/us/music-video/miles-away/1651802263"
            },
            {
                title: "American Pie (Without Film Footage)",
                src: "https://embed.music.apple.com/us/music-video/american-pie-without-film-footage/453354869"
            },
            {
                title: "Jump",
                src: "https://embed.music.apple.com/us/music-video/jump/276689381"
            },
            {
                title: "Get Together",
                src: "https://embed.music.apple.com/us/music-video/get-together/272782224"
            },
            {
                title: "Like a Virgin",
                src: "https://embed.music.apple.com/us/music-video/like-a-virgin/278120622"
            },
            {
                title: "Lucky Star",
                src: "https://embed.music.apple.com/us/music-video/lucky-star/278120050"
            },
            {
                title: "Open Your Heart",
                src: "https://embed.music.apple.com/us/music-video/open-your-heart/278129197"
            },
            {
                title: "Hung Up",
                src: "https://embed.music.apple.com/us/music-video/hung-up/278110330"
            },
            {
                title: "Like a Prayer (Live at Live 8, Hyde Park, London, 2nd July 2005)",
                src: "https://embed.music.apple.com/us/music-video/like-a-prayer-live-at-live-8-hyde-park-london-2nd-july-2005/1470889894"
            },
            {
                title: "Music (Live at Live 8, Hyde Park, London, 2nd July 2005)",
                src: "https://embed.music.apple.com/us/music-video/music-live-at-live-8-hyde-park-london-2nd-july-2005/1470906564"
            },
            {
                title: "Ray of Light (Live at Live 8, Hyde Park, London, 2nd July 2005)",
                src: "https://embed.music.apple.com/us/music-video/ray-of-light-live-at-live-8-hyde-park-london-2nd-july-2005/1470996254"
            },
            {
                title: "Love Profusion",
                src: "https://embed.music.apple.com/us/music-video/love-profusion/278119120"
            },
            {
                title: "Vogue",
                src: "https://embed.music.apple.com/us/music-video/vogue/81949409"
            },
            {
                title: "Hollywood",
                src: "https://embed.music.apple.com/us/music-video/hollywood/1495912241"
            },
            {
                title: "Music (4:44 Version)",
                src: "https://embed.music.apple.com/us/music-video/music-4-44-version/278119968"
            },
            {
                title: "Ray of Light",
                src: "https://embed.music.apple.com/us/music-video/ray-of-light/278129005"
            },
            {
                title: "I Want You",
                src: "https://embed.music.apple.com/us/music-video/i-want-you/1402550576"
            },
            {
                title: "Bedtime Story",
                src: "https://embed.music.apple.com/us/music-video/bedtime-story/278129383"
            },
            {
                title: "Human Nature",
                src: "https://embed.music.apple.com/us/music-video/human-nature/489340769"
            },
            {
                title: "Express Yourself / Deeper And Deeper (Live at the Sydney Cricket Grounds, Sydney, Australia, 11/19/1993) [HD Remaster]",
                src: "https://embed.music.apple.com/us/music-video/express-yourself-deeper-and-deeper-live-at-the/1704069586"
            },
            {
                title: "Fever",
                src: "https://embed.music.apple.com/us/music-video/fever/1495912489"
            },
            {
                title: "Erotica",
                src: "https://embed.music.apple.com/us/music-video/erotica/278117832"
            },
            {
                title: "Cherish",
                src: "https://embed.music.apple.com/us/music-video/cherish/278113110"
            },
            {
                title: "Express Yourself",
                src: "https://embed.music.apple.com/us/music-video/express-yourself/276688610"
            },
            {
                title: "True Blue",
                src: "https://embed.music.apple.com/us/music-video/true-blue/1495911505"
            },
            {
                title: "Holiday (Live at Live Aid, John F. Kennedy Stadium, 13th July 1985)",
                src: "https://embed.music.apple.com/us/music-video/holiday-live-at-live-aid-john-f-kennedy-stadium-13th/1453888568"
            },
            {
                title: "Into the Groove (Live at Live Aid, John F. Kennedy Stadium, 13th July 1985)",
                src: "https://embed.music.apple.com/us/music-video/into-the-groove-live-at-live-aid-john-f-kennedy/1453899643"
            },
            {
                title: "Burning Up",
                src: "https://embed.music.apple.com/us/music-video/burning-up/278118782"
            },
            {
                title: "Dress You Up",
                src: "https://embed.music.apple.com/us/music-video/dress-you-up/1382998693"
            },
            {
                title: "Borderline",
                src: "https://embed.music.apple.com/us/music-video/borderline/278111997"
            },
            {
                title: "Everybody",
                src: "https://embed.music.apple.com/us/music-video/everybody/278143141"
            },
        ]
    },
    {
        artist: "Madonna & Swae Lee",
        birthday: [{ month: "August", day: 16, year: 1958 },{ month: "June", day: 7, year: 1993 }],
        songs: [
            {
                title: "Crave",
                src: "https://embed.music.apple.com/us/music-video/crave/1464765380"
            },
        ]
    },
    {
        artist: "Maestro Don",
        songs: [
            {
                title: "Pioneer (feat. Bounty Killer)",
                src: "https://embed.music.apple.com/us/music-video/pioneer-feat-bounty-killer/1515512861"
            },
        ]
    },
    {
        artist: "Magdalene",
        songs: [
            {
                title: "Radio",
                src: "https://embed.music.apple.com/us/music-video/radio/1789118477"
            },
        ]
    },
    {
        artist: "Mahalia",
        birthday: [{ month: "May", day: 1, year: 1998 }],
        songs: [
            {
                title: "Pressure Points (feat. Lila Iké)",
                src: "https://embed.music.apple.com/us/music-video/pressure-points-feat-lila-ik%C3%A9/1793367176"
            },
        ]
    },
    {
        artist: "Maino",
        birthday: [{ month: "August", day: 30, year: 1973 }],
        songs: [
            {
                title: "Shade Room",
                src: "https://embed.music.apple.com/us/music-video/shade-room/1800547410"
            },
            {
                title: "Baller",
                src: "https://embed.music.apple.com/us/music-video/baller/1787932421"
            },
            {
                title: "Big Dog",
                src: "https://embed.music.apple.com/us/music-video/big-dog/1780373049"
            },
            {
                title: "Forgive Me",
                src: "https://embed.music.apple.com/us/music-video/forgive-me/1740647116"
            },
            {
                title: "All the Above (feat. T-Pain)",
                src: "https://embed.music.apple.com/us/music-video/all-the-above-feat-t-pain/312369053"
            },
        ]
    },
    {
        artist: "Maino, Fabolous & Stuy Babyz",
        songs: [
            {
                title: "Best for Me",
                src: "https://embed.music.apple.com/us/music-video/best-for-me/1671652554"
            },
        ]
    },
    {
        artist: "Maino & Giggs",
        birthday: [{ month: "August", day: 30, year: 1973 }, { month: "May", day: 11, year: 1983 }],
        songs: [
            {
                title: "We Made It",
                src: "https://embed.music.apple.com/us/music-video/we-made-it/1714528560"
            },
        ]
    },
    {
        artist: "Major Lazer",
        songs: [
            {
                title: "Powerful (feat. Ellie Goulding & Tarrus Riley)",
                src: "https://embed.music.apple.com/us/music-video/powerful-feat-ellie-goulding-tarrus-riley/1707076350"
            },
        ]
    },
      {
        artist: "Major Lazer & Major League DJz",
        songs: [
            {
                title: "Ke Shy (feat. Tyla, LuuDaDeeJay & Yumbs)",
                src: "https://embed.music.apple.com/us/music-video/ke-shy-feat-tyla-luudadeejay-yumbs/1692832851"
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
        artist: "Malie Donn",
        songs: [
            {
                title: "High Roller",
                src: "https://embed.music.apple.com/us/music-video/high-roller/1770639019"
            },
            {
                title: "Anything Yo Like",
                src: "https://embed.music.apple.com/us/music-video/anything-yo-like/1734659247"
            },
            {
                title: "Rifle Power",
                src: "https://embed.music.apple.com/us/music-video/rifle-power/1641601507"
            },
        ]
    },
    {
        artist: "Malie Donn, DJ Mac & CrashDummy",
        songs: [
            {
                title: "Nuh Regular",
                src: "https://embed.music.apple.com/us/music-video/nuh-regular/1756779766"
            },
        ]
    },
    {
        artist: "Malie Donn & Grim YG",
        songs: [
            {
                title: "Banga",
                src: "https://embed.music.apple.com/us/music-video/banga/1773751837"
            },
        ]
    },
    {
        artist: "Malie Donn, Rajev Caution & Thagging",
        songs: [
            {
                title: "Ritzy",
                src: "https://embed.music.apple.com/us/music-video/ritzy/1753775314"
            },
        ]
    },
    {
        artist: "Mann",
        songs: [
            {
                title: "The Mack (feat. Snoop Dogg & Iyaz)",
                src: "https://embed.music.apple.com/us/music-video/the-mack-feat-snoop-dogg-iyaz/1445843108"
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
            {
                title: "Triumphant (Get 'Em) [feat. Rick Ross & Meek Mill]",
                src: "https://embed.music.apple.com/us/music-video/triumphant-get-em-feat-rick-ross-meek-mill/1446004608"
            },
            {
                title: "I'll Be Lovin' U Long Time (feat. T.I.)",
                src: "https://embed.music.apple.com/us/music-video/ill-be-lovin-u-long-time-feat-t-i/1446741608" 
            },
            {
                title: "Get Your Number (feat. Jermaine Dupri)",
                src: "https://embed.music.apple.com/us/music-video/get-your-number-feat-jermaine-dupri/1640172788"
            }, 
            {
                title: "The Roof (When I Feel the Need) [feat. Brandy]",
                src: "https://embed.music.apple.com/us/music-video/the-roof-when-i-feel-the-need-feat-brandy/1646314252"
            },
            {
                title: "Thank God I Found You (feat. Joe & Nas) [Make It Last Remix]",
                src: "https://embed.music.apple.com/us/music-video/thank-god-i-found-you-feat-joe-nas-make-it-last-remix/1609933579"
            },
            {
                title: "Type Dangerous",
                src: "https://embed.music.apple.com/us/music-video/type-dangerous/1820657470"
            },
        ]
    },
     {
        artist: "Mariah Carey, Da Brat & Missy Elliott",
        birthday: [{ month: "March", day: 27, year: 1969 }, { month: "April", day: 14, year: 1974 }, { month: "July", day: 1, year: 1971 }],
        songs: [
            {
                title: "Heartbreaker (Remix)",
                src: "https://embed.music.apple.com/us/music-video/heartbreaker-remix/958968134"
            },
        ]
    },
    {
        artist: "Mariah Carey, Joe & 98°",
        songs: [
            {
                title: "Thank God I Found You",
                src: "https://embed.music.apple.com/us/music-video/thank-god-i-found-you/276557569"
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
        artist: "Mariah Carey & Snoop Dogg",
        birthday: [{ month: "March", day: 27, year: 1969 }, { month: "October", day: 20, year: 1971 }],
        songs: [
            {
                title: "Crybaby",
                src: "https://embed.music.apple.com/us/music-video/crybaby/287816453"
            },
        ]
    },
      {
        artist: "Mariah the Scientist",
        birthday: [{ month: "October", day: 27, year: 1997 }],
        songs: [
            {
                title: "Burning Blue",
                src: "https://embed.music.apple.com/us/music-video/burning-blue/1813045299"
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
        artist: "Mario & Lil Wayne",
        birthday: [{ month: "August", day: 27, year: 1986 }, { month: "September", day: 27, year: 1982 }, { month: "November", day: 19, year: 1989 }],
        songs: [
            {
                title: "Main One (feat. Tyga)",
                src: "https://embed.music.apple.com/us/music-video/main-one-feat-tyga/1700754718"
            },
        ]
    },
       {
        artist: "Mark Ronson & RAYE",
        birthday: [{ month: "September", day: 4, year: 1975 }, { month: "October", day: 24, year: 1997 }],
        songs: [
            {
                title: "Suzanne",
                src: "https://embed.music.apple.com/us/music-video/suzanne/1820190997"
            },
        ]
    },
    {
        artist: "Mark Wonder",
        songs: [
            {
                title: "Guiding Light (feat. Sizzla)",
                src: "https://embed.music.apple.com/us/music-video/guiding-light-feat-sizzla/1560703341"
            },
        ]
    },
    {
        artist: "Maroon 5",
        songs: [
            {
                title: "Moves Like Jagger (feat. Christina Aguilera)",
                src: "https://embed.music.apple.com/us/music-video/moves-like-jagger-feat-christina-aguilera/1445827480"
            },
        ]
    },
      {
        artist: "Maroon 5 & LISA",
        songs: [
            {
                title: "Priceless",
                src: "https://embed.music.apple.com/us/music-video/priceless/1811259914"
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
            {
                title: "I Can Love You (feat. Lil' Kim)",
                src: "https://embed.music.apple.com/us/music-video/i-can-love-you-feat-lil-kim/1622119973"
            },
            {
                title: "Here I Am",
                src: "https://embed.music.apple.com/us/music-video/here-i-am/1780045899"
            },
            {
                title: "Come See About Me (feat. Fabolous)",
                src: "https://embed.music.apple.com/us/music-video/come-see-about-me-feat-fabolous/1632354986"
            },
            {
                title: "Rent Money (feat. Dave East)",
                src: "https://embed.music.apple.com/us/music-video/rent-money-feat-dave-east/1609335523"
            },
            {
                title: "Amazing (feat. DJ Khaled)",
                src: "https://embed.music.apple.com/us/music-video/amazing-feat-dj-khaled/1604221989"
            },
            {
                title: "Good Morning Gorgeous",
                src: "https://embed.music.apple.com/us/music-video/good-morning-gorgeous/1597993968"
            },
            {
                title: "A Night to Remember",
                src: "https://embed.music.apple.com/us/music-video/a-night-to-remember/889122351"
            },
            {
                title: "Have Yourself a Merry Little Christmas",
                src: "https://embed.music.apple.com/us/music-video/have-yourself-a-merry-little-christmas/1444879885"
            },
            {
                title: "My Favorite Things",
                src: "https://embed.music.apple.com/us/music-video/my-favorite-things/1445276209"
            },
            {
                title: "Don't Mind",
                src: "https://embed.music.apple.com/us/music-video/dont-mind/1445826972"
            },
            {
                title: "Why? (feat. Rick Ross)",
                src: "https://embed.music.apple.com/us/music-video/why-feat-rick-ross/1445858702"
            },
            {
                title: 'The Living Proof (From the Motion Picture "The Help")',
                src: "https://embed.music.apple.com/us/music-video/the-living-proof-from-the-motion-picture-the-help/1445854547"
            },
            {
                title: "Mr. Wrong",
                src: "https://embed.music.apple.com/us/music-video/mr-wrong/1446736090"
            },
            {
                title: "Someone to Love Me (Naked) [feat. Diddy & Lil Wayne]",
                src: "https://embed.music.apple.com/us/music-video/someone-to-love-me-naked-feat-diddy-lil-wayne/1446006146"
            },
            {
                title: "I Am",
                src: "https://embed.music.apple.com/us/music-video/i-am/1445744096"
            },
            {
                title: "The One (feat. Drake)",
                src: "https://embed.music.apple.com/us/music-video/the-one-feat-drake/1445860883"
            },
            {
                title: "Just Fine",
                src: "https://embed.music.apple.com/us/music-video/just-fine/1445843529"
            },
            {
                title: "Take Me As I Am",
                src: "https://embed.music.apple.com/us/music-video/take-me-as-i-am/1445850409"
            },
            {
                title: "Be Happy (Matt X Version)",
                src: "https://embed.music.apple.com/us/music-video/be-happy-matt-x-version/1446009156"
            },
            {
                title: "Be Without You",
                src: "https://embed.music.apple.com/us/music-video/be-without-you/1445714919"
            },
            {
                title: "Everything",
                src: "https://embed.music.apple.com/us/music-video/everything/1445836373"
            },
            {
                title: "Family Affair (Edited Version)",
                src: "https://embed.music.apple.com/us/music-video/family-affair-edited-version/1445841193"
            },
            {
                title: "I'm Goin' Down",
                src: "https://embed.music.apple.com/us/music-video/im-goin-down/1446009011"
            },
            {
                title: "Seven Days (feat. George Benson)",
                src: "https://embed.music.apple.com/us/music-video/seven-days-feat-george-benson/1445725683"
            },
            {
                title: "You Bring Me Joy",
                src: "https://embed.music.apple.com/us/music-video/you-bring-me-joy/1490661753"
            },
        ]
    },
    {
        artist: "Mary J. Blige & Jay Sean",
        birthday: [{ month: "January", day: 11, year: 1971 }, { month: "March", day: 26, year: 1981 }],
        songs: [
            {
                title: "Each Tear",
                src: "https://embed.music.apple.com/us/music-video/each-tear/1445852638"
            },
        ]
    },
    {
        artist: "Mary J. Blige & Trey Songz",
        birthday: [{ month: "January", day: 11, year: 1971 }, { month: "November", day: 28, year: 1984 }],
        songs: [
            {
                title: "We Got Hood Love",
                src: "https://embed.music.apple.com/us/music-video/we-got-hood-love/1445725639"
            },
        ]
    },
    {
        artist: "Mary J. Blige & Vado",
        songs: [
            {
                title: "Still Believe In Love",
                src: "https://embed.music.apple.com/us/music-video/still-believe-in-love/1713757553"
            },
        ]
    },
    {
        artist: "Mary J. Blige featuring Brook Lynn",
        songs: [
            {
                title: "Enough Cryin (Featuring Brook Lynn)",
                src: "https://embed.music.apple.com/us/music-video/enough-cryin-featuring-brook-lynn/1446734673"
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
            {
                title: "Who Fi Stop We",
                src: "https://embed.music.apple.com/us/music-video/who-fi-stop-we/1775643828"
            },
            {
                title: "Reverse Time",
                src: "https://embed.music.apple.com/us/music-video/reverse-time/1738461736"
            },
            {
                title: "Bed a Rock!",
                src: "https://embed.music.apple.com/us/music-video/bed-a-rock/1717013840"
            },
            {
                title: "Tyrant",
                src: "https://embed.music.apple.com/us/music-video/tyrant/1691398395"
            },
            {
                title: "History",
                src: "https://embed.music.apple.com/us/music-video/history/1618094369"
            },
        ]
    },
    {
        artist: "Masicka & Dunw3ll",
        songs: [
            {
                title: "Pack a Matches",
                src: "https://embed.music.apple.com/us/music-video/pack-a-matches/1637178367"
            },
        ]
    },
    {
        artist: "Masicka & Fave",
        birthday: [{ month: "December", day: 4, year: 1993 }, { month: "March", day: 13, year: 2000 }],
        songs: [
            {
                title: "Fight For Us",
                src: "https://embed.music.apple.com/us/music-video/fight-for-us/1750762271"
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
        artist: "MC Lyte",
        birthday: [{ month: "October", day: 11, year: 1970 }],
        songs: [
            {
                title: "Woman (feat. SALT, Big Daddy Kane & Raheem DeVaughn)",
                src: "https://embed.music.apple.com/us/music-video/woman-feat-salt-big-daddy-kane-raheem-devaughn/1738116804"
            },
            {
                title: "Make A Livin'",
                src: "https://embed.music.apple.com/us/music-video/make-a-livin/1771474882"
            },
            {
                title: "Thank You (feat. Mary Mary & Muni Long)",
                src: "https://embed.music.apple.com/us/music-video/thank-you-feat-mary-mary-muni-long/1765521053"
            },
            {
                title: "Ruffneck",
                src: "https://embed.music.apple.com/us/music-video/ruffneck/1568069903"
            },
            {
                title: "Lyte As a Rock",
                src: "https://embed.music.apple.com/us/music-video/lyte-as-a-rock/281891851"
            },
            {
                title: "I Can't Make a Mistake",
                src: "https://embed.music.apple.com/us/music-video/i-cant-make-a-mistake/278192741"
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
            {
                title: "Middle of It (feat. Vory)",
                src: "https://embed.music.apple.com/us/music-video/middle-of-it-feat-vory/1544096192"
            },
            {
                title: "Pain Away (feat. Lil Durk)",
                src: "https://embed.music.apple.com/us/music-video/pain-away-feat-lil-durk/1543186692"
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
            {
                title: "Whenever",
                src: "https://embed.music.apple.com/us/music-video/whenever/1810764464"
            },
        ]
    },
    {
        artist: "Megan Thee Stallion & Dua Lipa",
        birthday: [{ month: "February", day: 15, year: 1995 }, { month: "August", day: 22, year: 1995 }],
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
        birthday: [{ month: "December", day: 22, year: 1993 }, { month: "September", day: 30, year: 1984 }],
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
             {
                title: "cliché",
                src: "https://embed.music.apple.com/us/music-video/clich%C3%A9/1816011229"
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
        ]
    },
    {
        artist: "Michael Patrick Kelly",
        birthday: [{ month: "December", day: 5, year: 1977 }],
        songs: [
            {
                title: "Wonders (feat. Rakim)",
                src: "https://embed.music.apple.com/us/music-video/wonders-feat-rakim/1653982483"
            },
        ]
    },
    {
        artist: "Michelle Larkin, Far East Movement, Alexa Dedlow & G.",
        songs: [
            {
                title: "If I Was You (OMG) [feat. Snoop Dogg] [Explicit Version]",
                src: "https://embed.music.apple.com/us/music-video/if-i-was-you-omg-feat-snoop-dogg-explicit-version/1446009016"
            },
        ]
    },
    {
        artist: "Michelle Williams",
        birthday: [{ month: "July", day: 23, year: 1979 }],
        songs: [
            {
                title: "Say Yes (feat. Beyoncé & Kelly Rowland)",
                src: "https://embed.music.apple.com/us/music-video/say-yes-feat-beyonc%C3%A9-kelly-rowland/893027894"
            },
        ]
    },
      {
        artist: "Miike Snow",
        songs: [
            {
                title: "Genghis Khan",
                src: "https://embed.music.apple.com/us/music-video/genghis-khan/1079687241"
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
        artist: "Mike Posner",
        birthday: [{ month: "February", day: 12, year: 1988 }],
        songs: [
            {
                title: "Is It Just Me?",
                src: "https://embed.music.apple.com/us/music-video/is-it-just-me/1793659734"
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
            {
                title: "Something Beautiful",
                src: "https://embed.music.apple.com/us/music-video/something-beautiful/1805456784"
            },
            {
                title: "More to Lose",
                src: "https://embed.music.apple.com/us/music-video/more-to-lose/1813018568"
            },
            {
                title: "Easy Lover",
                src: "https://embed.music.apple.com/us/music-video/easy-lover/1817272461"
            },
             {
                title: "Every Girl You've Ever Loved (feat. Naomi Campbell)",
                src: "https://embed.music.apple.com/us/music-video/every-girl-youve-ever-loved-feat-naomi-campbell/1823089040"
            },
        ]
    },
    {
        artist: "Millyz",
        birthday: [{ month: "February", day: 17, year: 1991 }],
        songs: [
            {
                title: "Sacred (feat. Styles P)",
                src: "https://embed.music.apple.com/us/music-video/sacred-feat-styles-p/1637172037"
            },
            {
                title: "Rearview Mirror (feat. Jadakiss)",
                src: "https://embed.music.apple.com/us/music-video/rearview-mirror-feat-jadakiss/1623622209"
            },
        ]
    },
    {
        artist: "Millyz & Jadakiss",
        birthday: [{ month: "February", day: 17, year: 1991 },{ month: "May", day: 27, year: 1975 } ],
        songs: [
            {
                title: "Moon Roof",
                src: "https://embed.music.apple.com/us/music-video/moon-roof/1673604155"
            },
        ]
    },
     {
        artist: "Mimi Webb & Meghan Trainor",
        birthday: [{ month: "July", day: 23, year: 2000 }, { month: "December", day: 22, year: 1993 }],
        songs: [
            {
                title: "Mind Reader",
                src: "https://embed.music.apple.com/us/music-video/mind-reader/1812819819"
            },
        ]
    },
    {
        artist: "MINNIE",
        songs: [
            {
                title: "HER",
                src: "https://embed.music.apple.com/us/music-video/her/1791710881"
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
            {
                title: "DripDemeanor (feat. Sum1)",
                src: "https://embed.music.apple.com/us/music-video/dripdemeanor-feat-sum1/1483858642"
            },
            {
                title: "Throw It Back",
                src: "https://embed.music.apple.com/us/music-video/throw-it-back/1477647795"
            }, 
              {
                title: "I'm Better (feat. Lamb)",
                src: "https://embed.music.apple.com/us/music-video/im-better-feat-lamb/1198620252"
            }, 
              {
                title: "WTF (Where They From) [feat. Pharrell Williams]",
                src: "https://embed.music.apple.com/us/music-video/wtf-where-they-from-feat-pharrell-williams/1058188789"
            }, 
            {
                title: "Ching-A-Ling",
                src: "https://embed.music.apple.com/us/music-video/ching-a-ling/273741336"
            }, 
            {
                title: "Take Away (feat. Ginuwine)",
                src: "https://embed.music.apple.com/us/music-video/take-away-feat-ginuwine/281890266"
            }, 
             {
                title: "All N My Grill",
                src: "https://embed.music.apple.com/us/music-video/all-n-my-grill/281898709"
            }, 
        ]
    },
    {
        artist: "MOUNT WESTMORE, Snoop Dogg & Ice Cube",
        songs: [
            {
                title: "Motto (feat. E-40 & Too $hort)",
                src: "https://embed.music.apple.com/us/music-video/motto-feat-e-40-too-%24hort/1672535356"
            },
        ]
    },
    {
        artist: "Mobb Deep",
        birthday: [{ month: "May", day: 21, year: 1974 }, { month: "November", day: 2, year: 1974 }],
        songs: [
            {
                title: "Put 'Em In Their Place",
                src: "https://embed.music.apple.com/us/music-video/put-em-in-their-place/1467924504"
            },
            {
                title: "Quiet Storm (feat. Lil' Kim) [Remix]",
                src: "https://embed.music.apple.com/us/music-video/quiet-storm-feat-lil-kim-remix/1431594581"
            },
            {
                title: "Got It Twisted (MTV Edit)",
                src: "https://embed.music.apple.com/us/music-video/got-it-twisted-mtv-edit/1384118009"
            },
            {
                title: "It's Mine",
                src: "https://embed.music.apple.com/us/music-video/its-mine/1281341568"
            },
            {
                title: "Quiet Storm",
                src: "https://embed.music.apple.com/us/music-video/quiet-storm/1366602014"
            },
            {
                title: "Survival of the Fittest",
                src: "https://embed.music.apple.com/us/music-video/survival-of-the-fittest/643507105"
            },
            {
                title: "Give Up the Goods (Just Step)",
                src: "https://embed.music.apple.com/us/music-video/give-up-the-goods-just-step/1405274816"
            },
        ]
    },
    {
        artist: "Mobb Deep & 112",
        songs: [
            {
                title: "Hey Luv (Anything)",
                src: "https://embed.music.apple.com/us/music-video/hey-luv-anything/602341754"
            },
        ]
    },
    {
        artist: "Mobb Deep & Young Buck",
        birthday: [{ month: "May", day: 21, year: 1974 }, { month: "November", day: 2, year: 1974 }, { month: "March", day: 15, year: 1981 }],
        songs: [
            {
                title: "Give It to Me",
                src: "https://embed.music.apple.com/us/music-video/give-it-to-me/1445706959"
            },
        ]
    },
    {
        artist: "Mobb Deep featuring 50 Cent & Nate Dogg",
        birthday: [{ month: "May", day: 21, year: 1974 }, { month: "November", day: 2, year: 1974 }, { month: "July", day: 6, year: 1975 }, { month: "August", day: 19, year: 1969 }],
        songs: [
            {
                title: "Have a Party",
                src: "https://embed.music.apple.com/us/music-video/have-a-party/1445879578"
            },
        ]
    },
    {
        artist: "Molly Brazy",
        birthday: [{ month: "February", day: 22, year: 1999 }],
        songs: [
            {
                title: "Boss Up (feat. Mozzy)",
                src: "https://embed.music.apple.com/us/music-video/boss-up-feat-mozzy/1711892068"
            },
        ]
    },
    {
        artist: "Mooga Ma$e",
        songs: [
            {
                title: "Pressure (feat. Jim jones , Shyst vader & Shineboy double)",
                src: "https://embed.music.apple.com/us/music-video/pressure-feat-jim-jones-shyst-vader-shineboy-double/1656562302"
            },
        ]
    },
     {
        artist: "Moon Boots",
        birthday: [{ month: "June", day: 27, year: 1984 }],
        songs: [
            {
                title: "Whisper In the Wind (feat. Black Gatsby)",
                src: "https://embed.music.apple.com/us/music-video/whisper-in-the-wind-feat-black-gatsby/1485177649"
            },
            {
                title: "Clear (feat. Nic Hanson)",
                src: "https://embed.music.apple.com/us/music-video/clear-feat-nic-hanson/1479998304"
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
            {
                title: "Said Sum (feat. City Girls & DaBaby) [Remix]",
                src: "https://embed.music.apple.com/us/music-video/said-sum-feat-city-girls-dababy-remix/1536589483"
            },
            {
                title: "Say Na (feat. J. Cole)",
                src: "https://embed.music.apple.com/us/music-video/say-na-feat-j-cole/1441980331"
            },
            {
                title: "One Of Dem Nights (feat. Jhené Aiko)",
                src: "https://embed.music.apple.com/us/music-video/one-of-dem-nights-feat-jhen%C3%A9-aiko/1591545955"
            },
        ]
    },
    {
        artist: "Moneybagg Yo & Megan Thee Stallion",
        birthday: [{ month: "September", day: 22, year: 1991 }, { month: "February", day: 15, year: 1995 }],
        songs: [
            {
                title: "All Dat",
                src: "https://embed.music.apple.com/us/music-video/all-dat/1523651834"
            },
        ]
    },
    {
        artist: "Monica",
        birthday: [{ month: "October", day: 24, year: 1980 }],
        songs: [
            {
                title: "Like This And Like That",
                src: "https://embed.music.apple.com/us/music-video/like-this-and-like-that/1520290474"
            },
            {
                title: "Just Right For Me (feat. Lil Wayne)",
                src: "https://embed.music.apple.com/us/music-video/just-right-for-me-feat-lil-wayne/1055769843"
            },
            {
                title: "Anything (To Find You) [feat. Rick Ross]",
                src: "https://embed.music.apple.com/us/music-video/anything-to-find-you-feat-rick-ross/464411999"
            },
            {
                title: "Anything (To Find You) [AOL Session]",
                src: "https://embed.music.apple.com/us/music-video/anything-to-find-you-aol-session/1281324858"
            },
            {
                title: "Love All Over Me",
                src: "https://embed.music.apple.com/us/music-video/love-all-over-me/383777076"
            },
            {
                title: "Everything to Me",
                src: "https://embed.music.apple.com/us/music-video/everything-to-me/357648900"
            },
            {
                title: "Everytime tha Beat Drop (feat. Dem Franchize Boyz) [Main Version]",
                src: "https://embed.music.apple.com/us/music-video/everytime-tha-beat-drop-feat-dem-franchize-boyz-main/548919302"
            },
            {
                title: "All Eyez On Me",
                src: "https://embed.music.apple.com/us/music-video/all-eyez-on-me/1321656018"
            },
            {
                title: "The First Night",
                src: "https://embed.music.apple.com/us/music-video/the-first-night/453287885"
            },
            {
                title: "U Should've Known Better",
                src: "https://embed.music.apple.com/us/music-video/u-shouldve-known-better/548917479"
            },
            {
                title: "So Gone",
                src: "https://embed.music.apple.com/us/music-video/so-gone/980764007"
            },
            {
                title: "Street Symphony",
                src: "https://embed.music.apple.com/us/music-video/street-symphony/1296197257"
            },
            {
                title: "Angel Of Mine",
                src: "https://embed.music.apple.com/us/music-video/angel-of-mine/1366599894"
            },
            {
                title: "Before You Walk Out of My Life",
                src: "https://embed.music.apple.com/us/music-video/before-you-walk-out-of-my-life/1366599787"
            },
        ]
    },
    {
        artist: "Montell Jordan",
        birthday: [{ month: "December", day: 3, year: 1968 }],
        songs: [
            {
                title: "Get It On Tonite",
                src: "https://embed.music.apple.com/us/music-video/get-it-on-tonite/1680264534"
            },
            {
                title: "This Is How We Do It (Edited Version)",
                src: "https://embed.music.apple.com/us/music-video/this-is-how-we-do-it-edited-version/1445860722"
            },
        ]
    },
    {
        artist: "Morgan Heritage",
        songs: [
            {
                title: "Who Deh Like U (feat. Bounty Killer, Stonebwoy & Cham)",
                src: "https://embed.music.apple.com/us/music-video/who-deh-like-u-feat-bounty-killer-stonebwoy-cham/1678400878"
            },
        ]
    },
    {
        artist: "Morray",
        birthday: [{ month: "November", day: 10, year: 1992 }],
        songs: [
            {
                title: "Trenches (feat. Polo G) [Remix]",
                src: "https://embed.music.apple.com/us/music-video/trenches-feat-polo-g-remix/1578960959"
            },
        ]
    },
    {
        artist: "Mozzy & Baby Money",
        songs: [
            {
                title: "Every Night",
                src: "https://embed.music.apple.com/us/music-video/every-night/1668003897"
            },
        ]
    },
    {
        artist: "Mozzy, 2 Chainz & Saweetie",
        songs: [
            {
                title: "In My Face (feat. YG)",
                src: "https://embed.music.apple.com/us/music-video/in-my-face-feat-yg/1635199327"
            },
        ]
    },
    {
        artist: "Mozzy, Dcmbr & Yhung T.O.",
        songs: [
            {
                title: "Excuse Me (feat. Too $hort)",
                src: "https://embed.music.apple.com/us/music-video/excuse-me-feat-too-%24hort/1439252027"
            },
        ]
    },
    {
        artist: "Mr. Vegas",
        birthday: [{ month: "December", day: 29, year: 1974 }],
        songs: [
            {
                title: "Alive (Year 2025)",
                src: "https://embed.music.apple.com/us/music-video/alive-year-2025/1792432304"
            },
            {
                title: "Happy Day",
                src: "https://embed.music.apple.com/us/music-video/happy-day/1772148759"
            },
            {
                title: "Dugu Dugu 2",
                src: "https://embed.music.apple.com/us/music-video/dugu-dugu-2/1724449754"
            },
            {
                title: "Money Mike Walk",
                src: "https://embed.music.apple.com/us/music-video/money-mike-walk/1719652928"
            },
            {
                title: "Love Has No Color",
                src: "https://embed.music.apple.com/us/music-video/love-has-no-color/1714518598"
            },
            {
                title: "Zodiac Whine",
                src: "https://embed.music.apple.com/us/music-video/zodiac-whine/1717075986"
            },
            {
                title: "God out (Enuh)",
                src: "https://embed.music.apple.com/us/music-video/god-out-enuh/1704887661"
            },
            {
                title: "Slippers and Socks",
                src: "https://embed.music.apple.com/us/music-video/slippers-and-socks/1634071545"
            },
            {
                title: "Driva",
                src: "https://embed.music.apple.com/us/music-video/driva/1631645088"
            },
            {
                title: "Beautiful Life (Clean)",
                src: "https://embed.music.apple.com/us/music-video/beautiful-life-clean/674694334"
            },
            {
                title: "Sweet Jamaica (feat. Shaggy, Josey Wales) [Clean]",
                src: "https://embed.music.apple.com/us/music-video/sweet-jamaica-feat-shaggy-josey-wales-clean/550360902"
            },
            {
                title: "Bruk It Down / Party Tun Up (feat. Alison Hinds)",
                src: "https://embed.music.apple.com/us/music-video/bruk-it-down-party-tun-up-feat-alison-hinds/543635923"
            },
        ]
    },
    {
        artist: "Mr. Vegas, DJ Rony & Topo La Maskara",
        songs: [
            {
                title: "Let's Dance",
                src: "https://embed.music.apple.com/us/music-video/lets-dance/1659225335"
            },
        ]
    },
    {
        artist: "Mr. Vegas, Kaka Highflames & Laa Lee",
        songs: [
            {
                title: "Money Mike Ii",
                src: "https://embed.music.apple.com/us/music-video/money-mike-ii/1727177195"
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
        artist: "Muni Long & Saweetie",
        birthday: [{ month: "September", day: 14, year: 1988 }, { month: "July", day: 2, year: 1993 }],
        songs: [
            {
                title: "Baby Boo",
                src: "https://embed.music.apple.com/us/music-video/baby-boo/1634022058"
            },
        ]
    },
      {
        artist: "Mura Masa & Clairo",
        birthday: [{ month: "April", day: 5, year: 1996 }, { month: "August", day: 18, year: 1998 }],
        songs: [
            {
                title: "I Don’t Think I Can Do This Again",
                src: "https://embed.music.apple.com/us/music-video/i-dont-think-i-can-do-this-again/1477046401"
            },
        ]
    },
    {
        artist: "Murda Beatz",
        birthday: [{ month: "February", day: 11, year: 1994 }],
        songs: [
            {
                title: "DOORS UNLOCKED (feat. Ty Dolla $ign & Polo G)",
                src: "https://embed.music.apple.com/us/music-video/doors-unlocked-feat-ty-dolla-%24ign-polo-g/1529224928"
            },
        ]
    },
    {
        artist: "Musiq Soulchild",
        birthday: [{ month: "September", day: 16, year: 1977 }],
        songs: [
            {
                title: "Humble Pie",
                src: "https://embed.music.apple.com/us/music-video/humble-pie/1287734905"
            },
            {
                title: "Simple Things",
                src: "https://embed.music.apple.com/us/music-video/simple-things/1265349871"
            },
            {
                title: "Start Over",
                src: "https://embed.music.apple.com/us/music-video/start-over/1268925658"
            },
            {
                title: "I Do",
                src: "https://embed.music.apple.com/us/music-video/i-do/1094141085"
            },
            {
                title: "Anything (feat. Swizz Beatz)",
                src: "https://embed.music.apple.com/us/music-video/anything-feat-swizz-beatz/432804649"
            },
            {
                title: "So Beautiful",
                src: "https://embed.music.apple.com/us/music-video/so-beautiful/307577404"
            },
            {
                title: "Radio",
                src: "https://embed.music.apple.com/us/music-video/radio/289782557"
            },
            {
                title: "teachme",
                src: "https://embed.music.apple.com/us/music-video/teachme/539793628"
            },
            {
                title: "Buddy",
                src: "https://embed.music.apple.com/us/music-video/buddy/281903253"
            },
            {
                title: "Dontchange",
                src: "https://embed.music.apple.com/us/music-video/dontchange/1446731231"
            },
            {
                title: "Halfcrazy",
                src: "https://embed.music.apple.com/us/music-video/halfcrazy/1446740484"
            },
        ]
    },
    {
        artist: "Musiq Soulchild & Hit-Boy",
        birthday: [{ month: "September", day: 16, year: 1977 }, { month: "May", day: 21, year: 1987 }],
        songs: [
            {
                title: "victims & villains",
                src: "https://embed.music.apple.com/us/music-video/victims-villains/1680270773"
            },
            {
                title: "beat of a slow dance",
                src: "https://embed.music.apple.com/us/music-video/beat-of-a-slow-dance/1680595634"
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
              {
                title: "Ballin' (feat. Roddy Ricch)",
                src: "https://embed.music.apple.com/us/music-video/ballin-feat-roddy-ricch/1481908677"
            },
             {
                title: "Want Her (feat. Quavo & YG)",
                src: "https://embed.music.apple.com/us/music-video/want-her-feat-quavo-yg/1445014409"
            },
        ]
    },
     {
        artist: "Mustard & Migos",
        birthday: [{ month: "June", day: 5, year: 1990 }, { month: "April", day: 2, year: 1991 }, { month: "December", day: 14, year: 1991 }, { month: "June", day: 18, year: 1994 }],
        songs: [
            {
                title: "Pure Water",
                src: "https://embed.music.apple.com/us/music-video/pure-water/1455273953"
            },
        ]
    },
     {
        artist: "Mustard & RJmrLA",
        birthday: [{ month: "June", day: 5, year: 1990 }, { month: "September", day: 24, year: 1984 }],
        songs: [
            {
                title: "Hard Way (feat. Rae Sremmurd)",
                src: "https://embed.music.apple.com/us/music-video/hard-way-feat-rae-sremmurd/1387703728"
            },
        ]
    },
    {
        artist: "Mustard & Yellow Claw",
        songs: [
            {
                title: "In My Room (feat. Ty Dolla $ign & Tyga)",
                src: "https://embed.music.apple.com/us/music-video/in-my-room-feat-ty-dolla-%24ign-tyga/1080856706"
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
            {
                title: "Whine (feat. Bounty Killer)",
                src: "https://embed.music.apple.com/us/music-video/whine-feat-bounty-killer/1698790710"
            },
            {
                title: "It's All About Me (25th Anniversary Remix)",
                src: "https://embed.music.apple.com/us/music-video/its-all-about-me-25th-anniversary-remix/1690564573"
            },
            {
                title: "Space and Time",
                src: "https://embed.music.apple.com/us/music-video/space-and-time/1524064269"
            },
            {
                title: "Simple Things (In Studio)",
                src: "https://embed.music.apple.com/us/music-video/simple-things-in-studio/1510777077"
            },
            {
                title: "The Truth (Official Music Video)",
                src: "https://embed.music.apple.com/us/music-video/the-truth-official-music-video/1496830877"
            },
            {
                title: "Down (Official Music Video)",
                src: "https://embed.music.apple.com/us/music-video/down-official-music-video/1459320100"
            },
            {
                title: "With You (feat. MyGuyMars)",
                src: "https://embed.music.apple.com/us/music-video/with-you-feat-myguymars/1451095078"
            },
            {
                title: "G.M.O. (Got My Own) [feat. Tink]",
                src: "https://embed.music.apple.com/us/music-video/g-m-o-got-my-own-feat-tink/1424645343"
            },
            {
                title: "Damage",
                src: "https://embed.music.apple.com/us/music-video/damage/1410324789"
            },
            {
                title: "You Got Me",
                src: "https://embed.music.apple.com/us/music-video/you-got-me/1396787799"
            },
            {
                title: "Ready For Whatever",
                src: "https://embed.music.apple.com/us/music-video/ready-for-whatever/1293936509"
            },
            {
                title: "Coolin'",
                src: "https://embed.music.apple.com/us/music-video/coolin/1204094032"
            },
            {
                title: "Fallen",
                src: "https://embed.music.apple.com/us/music-video/fallen/1446009144"
            },
            {
                title: "Lock U Down",
                src: "https://embed.music.apple.com/us/music-video/lock-u-down/1467926481"
            },
            {
                title: "Ridin",
                src: "https://embed.music.apple.com/us/music-video/ridin/1445733343"
            },
            {
                title: "My First Night With You",
                src: "https://embed.music.apple.com/us/music-video/my-first-night-with-you/1445848066"
            },
            {
                title: "My Love Is Like...Wo (Unedited Version)",
                src: "https://embed.music.apple.com/us/music-video/my-love-is-like-wo-unedited-version/1445745669"
            },
        ]
    },
    {
        artist: "Mýa & Dru Hill",
        songs: [
            {
                title: "It's All About Me",
                src: "https://embed.music.apple.com/us/music-video/its-all-about-me/1445841481"
            },
        ]
    },
    {
        artist: "My Darkest Days",
        songs: [
            {
                title: "Porn Star Dancing (The Allstar Version) [feat. Ludacris & Zakk Wylde] [Exclusive Bonus Video]",
                src: "https://embed.music.apple.com/us/music-video/porn-star-dancing-the-allstar-version-feat-ludacris/1440754514"
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
        artist: "Nardo Wick",
        birthday: [{ month: "December", day: 30, year: 2001 }],
        songs: [
            {
                title: "G Nikes (feat. Polo G)",
                src: "https://embed.music.apple.com/us/music-video/g-nikes-feat-polo-g/1649841557"
            },
            {
                title: "I Wonder",
                src: "https://embed.music.apple.com/us/music-video/i-wonder/1793858590"
            },
            {
                title: "Wickstyle (Official Video)",
                src: "https://embed.music.apple.com/us/music-video/wickstyle-official-video/1735060578"
            },
            {
                title: "Somethin' (feat. Sexyy Red)",
                src: "https://embed.music.apple.com/us/music-video/somethin-feat-sexyy-red/1729889283"
            },
            {
                title: "Hot Boy (feat. Lil Baby)",
                src: "https://embed.music.apple.com/us/music-video/hot-boy-feat-lil-baby/1679875174"
            },
            {
                title: "Burning Up (feat. The Kid LAROI)",
                src: "https://embed.music.apple.com/us/music-video/burning-up-feat-the-kid-laroi/1637948175"
            },
            {
                title: "Me or Sum (feat. Future & Lil Baby)",
                src: "https://embed.music.apple.com/us/music-video/me-or-sum-feat-future-lil-baby/1608110747"
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
            {
                title: "Black Magic",
                src: "https://embed.music.apple.com/us/music-video/black-magic/1704725754"
            },
            {
                title: "30",
                src: "https://embed.music.apple.com/us/music-video/30/1675321112"
            },
            {
                title: "EPMD",
                src: "https://embed.music.apple.com/us/music-video/epmd/1561053286"
            },
            {
                title: "27 Summers",
                src: "https://embed.music.apple.com/us/music-video/27-summers/1550364461"
            },
            {
                title: "Replace Me (feat. Big Sean & Don Toliver)",
                src: "https://embed.music.apple.com/us/music-video/replace-me-feat-big-sean-don-toliver/1536972060"
            },
            {
                title: "Life's a Bitch / Street Dreams (from Made You Look: God's Son Live)",
                src: "https://embed.music.apple.com/us/music-video/lifes-a-bitch-street-dreams-from-made-you-look-gods-son-live/1438595034"
            },
            {
                title: "Made You Look / Made You Look (Remix) [from Made You Look: God's Son Live]",
                src: "https://embed.music.apple.com/us/music-video/made-you-look-made-you-look-remix-from-made-you-look/1438656871"
            },
            {
                title: "Rewind / Last Real N***** Alive (from Made You Look: God's Son Live)",
                src: "https://embed.music.apple.com/us/music-video/rewind-last-real-n-alive-from-made-you-look-gods-son-live/1438593481"
            },
            {
                title: "The World Is Yours / It Ain't Hard to Tell (from Made You Look: God's Son Live)",
                src: "https://embed.music.apple.com/us/music-video/the-world-is-yours-it-aint-hard-to-tell-from-made-you/1438593250"
            },
            {
                title: "The Cross (from Made You Look: God's Son Live)",
                src: "https://embed.music.apple.com/us/music-video/the-cross-from-made-you-look-gods-son-live/1437862181"
            },
            {
                title: "Got Ur Self A... (from Made You Look: God's Son Live)",
                src: "https://embed.music.apple.com/us/music-video/got-ur-self-a-from-made-you-look-gods-son-live/1437862082"
            },
            {
                title: "If I Ruled the World (Imagine That) [from Made You Look: God's Son Live]",
                src: "https://embed.music.apple.com/us/music-video/if-i-ruled-the-world-imagine-that-from-made-you-look/1437861860"
            },
            {
                title: "Mastermind (from Made You Look: God's Son Live)",
                src: "https://embed.music.apple.com/us/music-video/mastermind-from-made-you-look-gods-son-live/1437862376"
            },
            {
                title: "N.Y. State of Mind (from Made You Look: God's Son Live)",
                src: "https://embed.music.apple.com/us/music-video/n-y-state-of-mind-from-made-you-look-gods-son-live/1437862455"
            },
            {
                title: "Nas Is Like (from Made You Look: God's Son Live)",
                src: "https://embed.music.apple.com/us/music-video/nas-is-like-from-made-you-look-gods-son-live/1437861162"
            },
            {
                title: "You're da Man (from Made You Look: God's Son Live)",
                src: "https://embed.music.apple.com/us/music-video/youre-da-man-from-made-you-look-gods-son-live/1437863414"
            },
            {
                title: "Zone Out (from Made You Look: God's Son Live)",
                src: "https://embed.music.apple.com/us/music-video/zone-out-from-made-you-look-gods-son-live/1437861668"
            },
            {
                title: "Halftime",
                src: "https://embed.music.apple.com/us/music-video/halftime/853110110"
            },
            {
                title: "It Ain't Hard To Tell",
                src: "https://embed.music.apple.com/us/music-video/it-aint-hard-to-tell/853108213"
            },
            {
                title: "Daughters",
                src: "https://embed.music.apple.com/us/music-video/daughters/1445863785"
            },
            {
                title: "The Don",
                src: "https://embed.music.apple.com/us/music-video/the-don/1445854219"
            },
            {
                title: "Nasty",
                src: "https://embed.music.apple.com/us/music-video/nasty/1445879696"
            },
            {
                title: "Make the World Go Round (feat. Chris Brown & The Game)",
                src: "https://embed.music.apple.com/us/music-video/make-the-world-go-round-feat-chris-brown-the-game/1445746536"
            },
            {
                title: "Surviving the Times",
                src: "https://embed.music.apple.com/us/music-video/surviving-the-times/269473916"
            },
            {
                title: "U.B.R. (Unauthorized Biography Of Rakim) [Album Version]",
                src: "https://embed.music.apple.com/us/music-video/u-b-r-unauthorized-biography-of-rakim-album-version/1538251803"
            },
            {
                title: "Got Ur Self A...",
                src: "https://embed.music.apple.com/us/music-video/got-ur-self-a/1279501121"
            },
            {
                title: "You Owe Me (feat. Ginuwine)",
                src: "https://embed.music.apple.com/us/music-video/you-owe-me-feat-ginuwine/1461921731"
            },
            {
                title: "Bridging the Gap (feat. Olu Dara)",
                src: "https://embed.music.apple.com/us/music-video/bridging-the-gap-feat-olu-dara/1280138373"
            },
            {
                title: "Thief's Theme",
                src: "https://embed.music.apple.com/us/music-video/thiefs-theme/1380457324"
            },
            {
                title: "One Mic",
                src: "https://embed.music.apple.com/us/music-video/one-mic/304242459"
            },
            {
                title: "Made You Look",
                src: "https://embed.music.apple.com/us/music-video/made-you-look/1279498201"
            },
            {
                title: "Nastradamus",
                src: "https://embed.music.apple.com/us/music-video/nastradamus/304238037"
            },
            {
                title: "Hate Me Now (feat. Puff Daddy)",
                src: "https://embed.music.apple.com/us/music-video/hate-me-now-feat-puff-daddy/327114693"
            },
            {
                title: "If I Ruled the World (Imagine That)",
                src: "https://embed.music.apple.com/us/music-video/if-i-ruled-the-world-imagine-that/1366604122"
            },
        ]
    },
    {
        artist: "Nas & Keri Hilson",
        birthday: [{ month: "September", day: 14, year: 1973 }, { month: "December", day: 5, year: 1982 }],
        songs: [
            {
                title: "Hero",
                src: "https://embed.music.apple.com/us/music-video/hero/1445728137"
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
        artist: "Ncredible Gang",
        songs: [
            {
                title: "Only You (feat. Nick Cannon, Fat Joe & DJ Luke Nasty)",
                src: "https://embed.music.apple.com/us/music-video/only-you-feat-nick-cannon-fat-joe-dj-luke-nasty/1356116351"
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
        birthday: [{ month: "October", day: 18, year: 1979 }, { month: "August", day: 30, year: 1989 }, { month: "December", day: 14, year: 1991 }],
        songs: [
            {
                title: "Push Back",
                src: "https://embed.music.apple.com/us/music-video/push-back/1368093791"
            },
        ]
    },
    {
        artist: "NEEDTOBREATHE",
        songs: [
            {
                title: "I Wanna Remember (feat. Carrie Underwood)",
                src: "https://embed.music.apple.com/us/music-video/i-wanna-remember-feat-carrie-underwood/1571667921"
            },
        ]
    },
    {
        artist: "NEIKED, Mae Muller & Polo G",
        songs: [
            {
                title: "Better Days",
                src: "https://embed.music.apple.com/us/music-video/better-days/1588951362"
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
        artist: "Nelly, Ashanti & Akon",
        birthday: [{ month: "November", day: 2, year: 1974 }, { month: "October", day: 13, year: 1980 }, { month: "April", day: 16, year: 1973 }],
        songs: [
            {
                title: "Body On Me",
                src: "https://embed.music.apple.com/us/music-video/body-on-me/1445726544"
            },
        ]
    },
    {
        artist: "Nelly & Kelly Rowland",
        birthday: [{ month: "November", day: 2, year: 1974 }, { month: "February", day: 11, year: 1981 }],
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
        artist: "Nelly featuring Christina Aguilera",
        birthday: [{ month: "November", day: 2, year: 1974 }, { month: "December", day: 18, year: 1980 }],
        songs: [
            {
                title: "Tilt Ya Head Back",
                src: "https://embed.music.apple.com/us/music-video/tilt-ya-head-back/1445838024"
            },
        ]
    },
    {
        artist: "Nelly featuring Jaheim",
        birthday: [{ month: "November", day: 2, year: 1974 }, { month: "May", day: 26, year: 1978 }],
        songs: [
            {
                title: "My Place (Edited Version) [Edited Version]",
                src: "https://embed.music.apple.com/us/music-video/my-place-edited-version-edited-version/1445840134"
            },
        ]
    },
    {
        artist: "Nelly Furtado featuring Timbaland",
        birthday: [{ month: "December", day: 2, year: 1978 }, { month: "March", day: 10, year: 1972 }],
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
        artist: "NewFlo Brody",
        songs: [
            {
                title: "Up Right Now (feat. Nari Millz & Fat Joe)",
                src: "https://embed.music.apple.com/us/music-video/up-right-now-feat-nari-millz-fat-joe/1588185549"
            },
        ]
    },
    {
        artist: "NewJeans",
        birthday: [{ month: "May", day: 7, year: 2004 }, { month: "October", day: 6, year: 2004 }, { month: "April", day: 11, year: 2005 }, { month: "May", day: 15, year: 2006 }, { month: "April", day: 21, year: 2008 }],
        songs: [
            {
                title: "Right Now",
                src: "https://embed.music.apple.com/us/music-video/right-now/1752511792"
            },
        ]
    },
    {
        artist: "Nickelback",
        birthday: [{ month: "November", day: 15, year: 1974 }, { month: "March", day: 1, year: 1973 }, { month: "June", day: 25, year: 1972 }, { month: "February", day: 19, year: 1975 }],
        songs: [
            {
                title: "She Keeps Me Up",
                src: "https://embed.music.apple.com/us/music-video/she-keeps-me-up/1790261841"
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
        birthday: [{ month: "December", day: 8, year: 1982 }, { month: "January", day: 1, year: 2000 }],
        songs: [
            {
                title: "Barbie World (with Aqua) [From Barbie The Album]",
                src: "https://embed.music.apple.com/us/music-video/barbie-world-with-aqua-from-barbie-the-album/1694068784"
            },
        ]
    },
    {
        artist: "Nicki Minaj & Lil Baby",
        birthday: [{ month: "December", day: 8, year: 1982 }, { month: "December", day: 3, year: 1994 }],
        songs: [
            {
                title: "Do We Have A Problem? (Short Version)",
                src: "https://embed.music.apple.com/us/music-video/do-we-have-a-problem-short-version/1609100371"
            },
        ]
    },
    {
        artist: "Nicki Minaj, Drake & Lil Wayne",
        birthday: [{ month: "December", day: 8, year: 1982 }, { month: "October", day: 24, year: 1986 }, { month: "September", day: 27, year: 1982 }],
        songs: [
            {
                title: "No Frauds",
                src: "https://embed.music.apple.com/us/music-video/no-frauds/1444843884"
            },
        ]
    },
    {
        artist: "Nina Sky",
        birthday: [{ month: "March", day: 13, year: 1984 }, { month: "March", day: 13, year: 1984 }],
        songs: [
            {
                title: "Move Ya Body (Edited) [feat. Jabba]",
                src: "https://embed.music.apple.com/us/music-video/move-ya-body-edited-feat-jabba/1445826368"
            },
        ]
    },
    {
        artist: "NLE Choppa",
        birthday: [{ month: "November", day: 1, year: 2002 }],
        songs: [
            {
                title: "Jumpin (feat. Polo G)",
                src: "https://embed.music.apple.com/us/music-video/jumpin-feat-polo-g/1593856429"
            },
            {
                title: "Stickin And Movin",
                src: "https://embed.music.apple.com/us/music-video/stickin-and-movin/1746201475"
            },
            {
                title: "SLUT ME OUT 2",
                src: "https://embed.music.apple.com/us/music-video/slut-me-out-2/1740828976"
            },
            {
                title: "MO UP FRONT",
                src: "https://embed.music.apple.com/us/music-video/mo-up-front/1677516786"
            },
            {
                title: "CHAMPIONS",
                src: "https://embed.music.apple.com/us/music-video/champions/1690301910"
            },
            {
                title: "I Like",
                src: "https://embed.music.apple.com/us/music-video/i-like/1658667482"
            },
            {
                title: "Ice Spice",
                src: "https://embed.music.apple.com/us/music-video/ice-spice/1653686280"
            },
            {
                title: "Yak Flow",
                src: "https://embed.music.apple.com/us/music-video/yak-flow/1617872801"
            },
        ]
    },
    {
        artist: "NLE Choppa, 41 & Kyle Richh",
        songs: [
            {
                title: "Or What",
                src: "https://embed.music.apple.com/us/music-video/or-what/1767583226"
            },
        ]
    },
    {
        artist: "NLE Choppa & Rick Ross",
        songs: [
            {
                title: "COLD GAME",
                src: "https://embed.music.apple.com/us/music-video/cold-game/1692864449"
            },
        ]
    },
    {
        artist: "Noah Cyrus & Fleet Foxes",
        songs: [
            {
                title: "Don't Put It All On Me",
                src: "https://embed.music.apple.com/us/music-video/dont-put-it-all-on-me/1802926704"
            },
        ]
    },
    {
        artist: "Noise Cans & Lady Bee",
        songs: [
            {
                title: "Bucka (feat. Mr. Vegas)",
                src: "https://embed.music.apple.com/us/music-video/bucka-feat-mr-vegas/1522895209"
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
        artist: "Nostalgic Krooks",
        songs: [
            {
                title: "Pile It Up (feat. Sheek Louch)",
                src: "https://embed.music.apple.com/us/music-video/pile-it-up-feat-sheek-louch/1532975434"
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
        artist: "no na",
        songs: [
            {
                title: "shoot",
                src: "https://embed.music.apple.com/us/music-video/shoot/1811405808"
            },
        ]
    },
    {
        artist: "NxWorries, Anderson .Paak, Knxwledge & H.E.R.",
        songs: [
            {
                title: "Where I Go",
                src: "https://embed.music.apple.com/us/music-video/where-i-go/1650339100"
            },
        ]
    },
    {
        artist: "NxWorries, Anderson .Paak & Knxwledge",
        songs: [
            {
                title: "FromHere (feat. Snoop Dogg & October London)",
                src: "https://embed.music.apple.com/us/music-video/fromhere-feat-snoop-dogg-october-london/1747822987"
            },
        ]
    },
    {
        artist: "*NSYNC",
        birthday: [{ month: "August", day: 8, year: 1976 }, { month: "January", day: 31, year: 1981 }, { month: "January", day: 28, year: 1977 }, { month: "October", day: 17, year: 1971 }, { month: "May", day: 4, year: 1979 }],
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
        artist: "O.T. Genasis",
        birthday: [{ month: "June", day: 18, year: 1987 }],
        songs: [
            {
                title: "Big Shot (feat. Mustard)",
                src: "https://embed.music.apple.com/us/music-video/big-shot-feat-mustard/1486180468"
            },
        ]
    },
    {
        artist: "October London",
        birthday: [{ month: "October", day: 17, year: 1986 }],
        songs: [
            {
                title: "Mulholland Drive (feat. Snoop Dogg & Latoiya Williams)",
                src: "https://embed.music.apple.com/us/music-video/mulholland-drive-feat-snoop-dogg-latoiya-williams/1740540696"
            },
        ]
    },
    {
        artist: "October London & Snoop Dogg",
        birthday: [{ month: "October", day: 17, year: 1986 }, { month: "October", day: 20, year: 1971 }],
        songs: [
            {
                title: "Put You On",
                src: "https://embed.music.apple.com/us/music-video/put-you-on/1778771291"
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
        birthday: [{ month: "December", day: 14, year: 1991 }, { month: "October", day: 11, year: 1992 }],
        songs: [
            {
                title: "JEALOUSY",
                src: "https://embed.music.apple.com/us/music-video/jealousy/1699656644"
            },
        ]
    },
    {
        artist: "Offset & Travis Scott",
        birthday: [{ month: "December", day: 14, year: 1991 }, { month: "April", day: 30, year: 1991 }],
        songs: [
            {
                title: "SAY MY GRACE",
                src: "https://embed.music.apple.com/us/music-video/say-my-grace/1711657878"
            },
        ]
    },
    {
        artist: "OG Louie the Xiii",
        songs: [
            {
                title: "Picc Up the Bandz (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/picc-up-the-bandz-feat-snoop-dogg/1483699637"
            },
        ]
    },
    {
        artist: "Ol' Skool, Xscape & Keith Sweat",
        songs: [
            {
                title: "Am I Dreaming",
                src: "https://embed.music.apple.com/us/music-video/am-i-dreaming/1445827839"
            },
        ]
    },
     {
        artist: "Olamide & Wizkid",
        birthday: [{ month: "March", day: 15, year: 1989 }, { month: "July", day: 16, year: 1990 }],
        songs: [
            {
                title: "Kai!",
                src: "https://embed.music.apple.com/us/music-video/kai/1811379396"
            },
        ]
    },
      {
        artist: "Olivia Dean",
        birthday: [{ month: "March", day: 14, year: 1999 }],
        songs: [
            {
                title: "Lady Lady",
                src: "https://embed.music.apple.com/us/music-video/lady-lady/1825603823"
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
        artist: "Olly Murs",
        birthday: [{ month: "May", day: 14, year: 1984 }],
        songs: [
            {
                title: "Moves (feat. Snoop Dogg) [Official Video]",
                src: "https://embed.music.apple.com/us/music-video/moves-feat-snoop-dogg-official-video/1439219483"
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
        birthday: [{ month: "September", day: 13, year: 1993 }, { month: "January", day: 12, year: 1993 }, { month: "August", day: 29, year: 1993 }, { month: "February", day: 1, year: 1994 }, { month: "December", day: 24, year: 1991 }],




        songs: [
            {
                title: "What Makes You Beautiful",
                src: "https://embed.music.apple.com/us/music-video/what-makes-you-beautiful/459227180"
            },
        ]
    },
    {
        artist: "OT The Real", 
        songs: [
            {
                title: "Connected (feat. Jim Jones)",
                src: "https://embed.music.apple.com/us/music-video/connected-feat-jim-jones/1596196499"
            },
        ]
    },
    {
        artist: "OTH", 
        songs: [
            {
                title: "Diamonds (feat. Maino & Jayo)",
                src: "https://embed.music.apple.com/us/music-video/diamonds-feat-maino-jayo/1525400366"
            },
        ]
    },
    {
        artist: "Owl City & Carly Rae Jepsen",
        birthday: [{ month: "July", day: 5, year: 1986 }, { month: "November", day: 21, year: 1985 }],
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
        artist: "P$C", 
        songs: [
            {
                title: "I'm a King (Remix) [feat. T.I. & Lil' Scrappy]",
                src: "https://embed.music.apple.com/us/music-video/im-a-king-remix-feat-t-i-lil-scrappy/281899394" 
            },
        ]
    },
    {
        artist: "P-LO, E-40 & Too $hort",
        songs: [
            {
                title: "Had To",
                src: "https://embed.music.apple.com/us/music-video/had-to/1794436931"
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
        artist: "Parcels",
        songs: [
            {
                title: "Somethinggreater",
                src: "https://embed.music.apple.com/us/music-video/somethinggreater/1585641392"
            },
            {
                title: "Comingback",
                src: "https://embed.music.apple.com/us/music-video/comingback/1579733870"
            },
             {
                title: "Leaveyourlove",
                src: "https://embed.music.apple.com/us/music-video/leaveyourlove/1775622814"
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
        artist: "Patoranking, Konshens & Elephant Man",
        songs: [
            {
                title: "Daniella Whine (feat. Konshens & Elephant Man) [Remix]",
                src: "https://embed.music.apple.com/us/music-video/daniella-whine-feat-konshens-elephant-man-remix/1236642492" 
            },
        ]
    },
    {
        artist: "Paul Russell",
        birthday: [{ month: "November", day: 28, year: 1997 }],
        songs: [
            {
                title: "That Girl (feat. Saweetie)",
                src: "https://embed.music.apple.com/us/music-video/that-girl-feat-saweetie/1813052867"
            },
        ]
    },
      {
        artist: "Peggy Gou",
        birthday: [{ month: "July", day: 3, year: 1991 }],
        songs: [
            {
                title: "D.A.N.C.E (From F1® The Movie)",
                src: "https://embed.music.apple.com/us/music-video/d-a-n-c-e-from-f1-the-movie/1825942675"
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
        artist: "Pete Tong, Jules Buckley & The Heritage Orchestra",
        songs: [
            {
                title: "Promised Land (feat. Disciples)",
                src: "https://embed.music.apple.com/us/music-video/promised-land-feat-disciples/1444880303"
            },
        ]
    },
       {
        artist: "Pete Tong, The Heritage Orchestra & Jules Buckley",
        songs: [
            {
                title: "Waiting All Night (feat. Ella Eyre)",
                src: "https://embed.music.apple.com/us/music-video/waiting-all-night-feat-ella-eyre/1444634361"
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
        birthday: [{ month: "April", day: 5, year: 1973 }, { month: "November", day: 23, year: 1992 }],
        songs: [
            {
                title: "Doctor (Work It Out)",
                src: "https://embed.music.apple.com/us/music-video/doctor-work-it-out/1733760746"
            },
        ]
    },
    {
        artist: "Pharrell Williams & Snoop Dogg",
        birthday: [{ month: "April", day: 5, year: 1973 }, { month: "October", day: 20, year: 1971 }],
        songs: [
            {
                title: "That Girl",
                src: "https://embed.music.apple.com/us/music-video/that-girl/719699374"
            },
            {
                title: "Let's Get Blown",
                src: "https://embed.music.apple.com/us/music-video/lets-get-blown/1445850452"
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
        artist: "Pink Siifu, Turich Benjy & HiTech",
        songs: [

            {
                title: "Wywd..'!? (feat. Milfie)",
                src: "https://embed.music.apple.com/us/music-video/wywd-feat-milfie/1714988559"
            },
        ]
    },
    {
        artist: "PinkPantheress",
        birthday: [{ month: "April", day: 19, year: 2001 }],
        songs: [
            {
                title: 'Capable of Love',
                src: 'https://embed.music.apple.com/us/music-video/capable-of-love/1712105501'
            },
             {
                title: "Tonight",
                src: "https://embed.music.apple.com/us/music-video/tonight/1807046771"
            },
            {
                title: "Illegal",
                src: "https://embed.music.apple.com/us/music-video/illegal/1813842234"
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
        artist: "Playboi Carti",
        birthday: [{ month: "September", day: 13, year: 1995 }],
        songs: [
            {
                title: "EVIL J0RDAN",
                src: "https://embed.music.apple.com/us/music-video/evil-j0rdan/1802763389"
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
            {
                title: 'Want It, Need It (feat. Ashanti)',
                src: "https://embed.music.apple.com/us/music-video/want-it-need-it-feat-ashanti/306014590"
            },
        ]
    },
    {
        artist: "Plies, Jamie Foxx & The-Dream",
        birthday: [{ month: "July", day: 1, year: 1976 }, { month: "December", day: 13, year: 1967 }, { month: "September", day: 20, year: 1977 }],
        songs: [
            {
                title: "Please Excuse My Hands (feat. Jamie Foxx & The-Dream)",
                src: "https://embed.music.apple.com/us/music-video/please-excuse-my-hands-feat-jamie-foxx-the-dream/355595562" 
            },
        ]
    },
    {
        artist: "Polo G",
        birthday: [{ month: "January", day: 6, year: 1999 }],
        songs: [
            {
                title: "Thorns",
                src: "https://embed.music.apple.com/us/music-video/thorns/1781089029"
            },
            {
                title: "Don't Play (feat. Lil Baby)",
                src: "https://embed.music.apple.com/us/music-video/dont-play-feat-lil-baby/1611454555"
            },
            {
                title: "Start Up Again (feat. Moneybagg Yo)",
                src: "https://embed.music.apple.com/us/music-video/start-up-again-feat-moneybagg-yo/1607406901"
            },
            {
                title: "GNF (OKOKOK)",
                src: "https://embed.music.apple.com/us/music-video/gnf-okokok/1553061710"
            },
        ]
    },
    {
        artist: "Polo G & Lil Wayne",
        birthday: [{ month: "January", day: 6, year: 1999 }, { month: "September", day: 27, year: 1982 }],
        songs: [
            {
                title: "GANG GANG",
                src: "https://embed.music.apple.com/us/music-video/gang-gang/1568562119"
            },
        ]
    },
    {
        artist: "Popcaan & Drake",
        birthday: [{ month: "July", day: 19, year: 1988 }, { month: "October", day: 24, year: 1986 }],
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
        artist: "PRAYAH & Spice",
        songs: [
            {
                title: "No Long Talking",
                src: "https://embed.music.apple.com/us/music-video/no-long-talking/1626341136"
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
            {
                title: "Stuck On a Feeling (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/stuck-on-a-feeling-feat-snoop-dogg/950104986"
            },
        ]
    },
    {
        artist: "Princess Nokia",
        birthday: [{ month: "June", day: 14, year: 1992 }],
        songs: [
            {
                title: "Diva",
                src: "https://embed.music.apple.com/us/music-video/diva/1628678499"
            },
            {
                title: "No Effort",
                src: "https://embed.music.apple.com/us/music-video/no-effort/1614318397"
            },
            {
                title: "It's Not My Fault",
                src: "https://embed.music.apple.com/us/music-video/its-not-my-fault/1560363922"
            },
            {
                title: "I Like Him",
                src: "https://embed.music.apple.com/us/music-video/i-like-him/1529320211"
            },
            {
                title: "Green Eggs & Ham",
                src: "https://embed.music.apple.com/us/music-video/green-eggs-ham/1500785171"
            },
            {
                title: "For the Night",
                src: "https://embed.music.apple.com/us/music-video/for-the-night/1378495040"
            },
             {
                title: "Drop Dead Gorgeous",
                src: "https://embed.music.apple.com/us/music-video/drop-dead-gorgeous/1822512947"
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
        artist: "Prodigy",
        birthday: [{ month: "November", day: 2, year: 1974 }],
        songs: [
            {
                title: "Great Spitters (feat. Corey Gunz)",
                src: "https://embed.music.apple.com/us/music-video/great-spitters-feat-corey-gunz/525877544"
            },
            {
                title: "The Life (Dirty Version)",
                src: "https://embed.music.apple.com/us/music-video/the-life-dirty-version/279184862"
            },
             {
                title: "Keep It Thoro",
                src: "https://embed.music.apple.com/us/music-video/keep-it-thoro/1380497259"
            },
        ]
    },
    {
        artist: "Public Enemy",
        songs: [
            {
                title: "What Kind Of Power We Got?",
                src: "https://embed.music.apple.com/us/music-video/what-kind-of-power-we-got/1645612927"
            },
            {
                title: "Don't Believe the Hype (Edited Master)",
                src: "https://embed.music.apple.com/us/music-video/dont-believe-the-hype-edited-master/1472280782"
            },
            {
                title: "Louder Than A Bomb",
                src: "https://embed.music.apple.com/us/music-video/louder-than-a-bomb/1644800017"
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
            {
                title: 'Trappa Rappa',
                src: "https://embed.music.apple.com/us/music-video/trappa-rappa/1797678730" 
            },
        ]
    },
    {
        artist: "Quality Control, Layton Greene & Lil Baby",
        songs: [
            {
                title: "Leave Em Alone (feat. City Girls & PnB Rock)",
                src: "https://embed.music.apple.com/us/music-video/leave-em-alone-feat-city-girls-pnb-rock/1472789245"
            },
        ]
    },
    {
        artist: "Queen Latifah",
        birthday: [{ month: "March", day: 18, year: 1970 }],
        songs: [
            {
                title: "U.N.I.T.Y.",
                src: "https://embed.music.apple.com/us/music-video/u-n-i-t-y/1445755062"
            },
            {
                title: "Go Head",
                src: "https://embed.music.apple.com/us/music-video/go-head/1445852847"
            },
            {
                title: "Just Another Day...",
                src: "https://embed.music.apple.com/us/music-video/just-another-day/1683203503"
            },
        ]
    },
    {
        artist: "Queen Naija & YoungBoy Never Broke Again",
        birthday: [{ month: "October", day: 17, year: 1995 }, { month: "October", day: 20, year: 1999 }],
        songs: [
            {
                title: "No Fake Love",
                src: "https://embed.music.apple.com/us/music-video/no-fake-love/1705333034"
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
            {
                title: "I'm a Flirt Remix (Without Number)",
                src: "https://embed.music.apple.com/us/music-video/im-a-flirt-remix-without-number/262583303" 
            },
            {
                title: "Number One (feat. Keri Hilson)",
                src: "https://embed.music.apple.com/us/music-video/number-one-feat-keri-hilson/328215857" 
            },
            {
                title: "I Like",
                src: "https://embed.music.apple.com/us/music-video/i-like/1445833788"
            },
        ]
    },
    {
        artist: "R. Kelly & Usher",
        birthday: [{ month: "January", day: 8, year: 1967 }, { month: "October", day: 14, year: 1978 }],
        songs: [
            {
                title: "Same Girl (Duet With Usher)",
                src: "https://embed.music.apple.com/us/music-video/same-girl-duet-with-usher/262804772"
            },
        ]
    },
    {
        artist: "R Plus & Dido",
        songs: [
            {
                title: "My Boy",
                src: "https://embed.music.apple.com/us/music-video/my-boy/1712275384"
            },
            {
                title: "Summer Dress",
                src: "https://embed.music.apple.com/us/music-video/summer-dress/1713552004"
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
        birthday: [{ month: "December", day: 29, year: 1991 }, { month: "June", day: 7, year: 1993 }],
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
        artist: "Raekwon",
        birthday: [{ month: "January", day: 12, year: 1970 }],
        songs: [
            {
                title: "1,2 1,2 (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/1-2-1-2-feat-snoop-dogg/1445019715"
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
        artist: "Rakim",
        birthday: [{ month: "January", day: 28, year: 1968 }],
        songs: [
            {
                title: "Walk These Streets (feat. Maino)",
                src: "https://embed.music.apple.com/us/music-video/walk-these-streets-feat-maino/730756896"
            },
            {
                title: "When I B On Tha Mic",
                src: "https://embed.music.apple.com/us/music-video/when-i-b-on-tha-mic/1445862886"
            },
        ]
    },
    {
        artist: "Rakim, Kurupt & Masta Killa",
        birthday: [{ month: "January", day: 28, year: 1968 }, { month: "November", day: 23, year: 1972 }, { month: "August", day: 18, year: 1969 }],
        songs: [
            {
                title: "BE ILL",
                src: "https://embed.music.apple.com/us/music-video/be-ill/1752973372"
            },
        ]
    },
    {
        artist: "Rakim, Nipsey Hussle & Planet Asia",
        birthday: [{ month: "January", day: 28, year: 1968 }, { month: "August", day: 15, year: 1985 }, { month: "October", day: 24, year: 1976 }],
        songs: [
            {
                title: "LOVE IS THE MESSAGE (feat. Louis King, Snoop Dogg, Sally Green, Kobe Honeycutt & The LA Grand Choir)",
                src: "https://embed.music.apple.com/us/music-video/love-is-the-message-feat-louis-king-snoop-dogg-sally/1760003705"
            },
        ]
    },
     {
        artist: "Ravyn Lenae",
        birthday: [{ month: "January", day: 22, year: 1999 }],
        songs: [
            {
                title: "Love Me Not",
                src: "https://embed.music.apple.com/us/music-video/love-me-not/1743852435"
            },
             {
                title: "Sticky",
                src: "https://embed.music.apple.com/us/music-video/sticky/1340501829"
            },
        ]
    },
    {
        artist: "Ray J",
        birthday: [{ month: "January", day: 17, year: 1981 }],
        songs: [
            {
                title: "Be with You",
                src: "https://embed.music.apple.com/us/music-video/be-with-you/1150737309"
            },
            {
                title: "For the Love of Ray J",
                src: "https://embed.music.apple.com/us/music-video/for-the-love-of-ray-j/317902279"
            },
            {
                title: "Gifts",
                src: "https://embed.music.apple.com/us/music-video/gifts/282914656"
            },
            {
                title: "Sexy Can I (feat. Yung Berg)",
                src: "https://embed.music.apple.com/us/music-video/sexy-can-i-feat-yung-berg/273191681"
            },
        ]
    },
    {
        artist: "Ray J & Lil Wayne",
        birthday: [{ month: "January", day: 17, year: 1981 }, { month: "September", day: 27, year: 1982 }],
        songs: [
            {
                title: "Brown Sugar",
                src: "https://embed.music.apple.com/us/music-video/brown-sugar/1019043811"
            },
        ]
    },
    {
        artist: "Ray Vaughn",
        songs: [
            {
                title: "FNBM (feat. NLE Choppa)",
                src: "https://embed.music.apple.com/us/music-video/fnbm-feat-nle-choppa/1769267810"
            },
             {
                title: "LOOK @ GOD",
                src: "https://embed.music.apple.com/us/music-video/look-god/1822866719"
            },
        ]
    },
    {
        artist: "Raz B",
        birthday: [{ month: "June", day: 13, year: 1985 }],
        songs: [
            {
                title: "NDA Remix (feat. Cassidy) [Radio]",
                src: "https://embed.music.apple.com/us/music-video/nda-remix-feat-cassidy-radio/1550793876"
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
        artist: "Real Boston Richey",
        birthday: [{ month: "February", day: 4, year: 1997 }],
        songs: [
            {
                title: "Get In There (feat. GloRilla)",
                src: "https://embed.music.apple.com/us/music-video/get-in-there-feat-glorilla/1761910152"
            },
        ]
    },
    {
        artist: "Reba McEntire",
        birthday: [{ month: "March", day: 28, year: 1955 }],
        songs: [
            {
                title: "Softly And Tenderly (feat. Kelly Clarkson & Trisha Yearwood) [Live At Ryman Auditorium, Nashville, TN / 2017]",
                src: "https://embed.music.apple.com/us/music-video/softly-and-tenderly-feat-kelly-clarkson-trisha/1613754053"
            },
            {
                title: "The Star Spangled Banner (Live from Super Bowl LVIII)",
                src: "https://embed.music.apple.com/us/music-video/the-star-spangled-banner-live-from-super-bowl-lviii/1730397116"
            },
            {
                title: "Seven Minutes In Heaven",
                src: "https://embed.music.apple.com/us/music-video/seven-minutes-in-heaven/1710606363"
            },
            {
                title: "I Needed Christmas (2022 Version)",
                src: "https://embed.music.apple.com/us/music-video/i-needed-christmas-2022-version/1659955559"
            },
            {
                title: "Jesus Loves Me (Live At Ryman Auditorium, Nashville, TN / 2017)",
                src: "https://embed.music.apple.com/us/music-video/jesus-loves-me-live-at-ryman-auditorium-nashville-tn-2017/1654809979"
            },
            {
                title: "It Is Well (Live At Ryman Auditorium, Nashville, TN / 2017)",
                src: "https://embed.music.apple.com/us/music-video/it-is-well-live-at-ryman-auditorium-nashville-tn-2017/1651686822"
            },
            {
                title: "God And My Girlfriends (Live At Ryman Auditorium, Nashville, TN / 2017)",
                src: "https://embed.music.apple.com/us/music-video/god-and-my-girlfriends-live-at-ryman-auditorium/1645364591"
            },
            {
                title: "Just Like Them Horses (Live At Ryman Auditorium, Nashville, TN, 2017)",
                src: "https://embed.music.apple.com/us/music-video/just-like-them-horses-live-at-ryman-auditorium-nashville/1632334228"
            },
            {
                title: "Swing Low, Sweet Chariot (Live At Ryman Auditorium, Nashville, TN, 2017)",
                src: "https://embed.music.apple.com/us/music-video/swing-low-sweet-chariot-live-at-ryman-auditorium-nashville/1629140581"
            },
            {
                title: "The Lord's Prayer (Live In Nashville, TN / 2021)",
                src: "https://embed.music.apple.com/us/music-video/the-lords-prayer-live-in-nashville-tn-2021/1621339168"
            },
            {
                title: "Because He Lives (Live In Nashville, TN / 2021)",
                src: "https://embed.music.apple.com/us/music-video/because-he-lives-live-in-nashville-tn-2021/1619017005"
            },
            {
                title: "Back To God (Live At Ryman Auditorium, Nashville, TN / 2017)",
                src: "https://embed.music.apple.com/us/music-video/back-to-god-live-at-ryman-auditorium-nashville-tn-2017/1616918777"
            },
            {
                title: "How Great Thou Art (Live In Nashville, TN, 2021)",
                src: "https://embed.music.apple.com/us/music-video/how-great-thou-art-live-in-nashville-tn-2021/1615855090"
            },
            {
                title: "Does He Love You (feat. Dolly Parton) [Revisited]",
                src: "https://embed.music.apple.com/us/music-video/does-he-love-you-feat-dolly-parton-revisited/1588759764"
            },
            {
                title: "I'm A Survivor (Revisited)",
                src: "https://embed.music.apple.com/us/music-video/im-a-survivor-revisited/1588147330"
            },
            {
                title: "Rumor Has It (Live From Reba...In Concert, 1990)",
                src: "https://embed.music.apple.com/us/music-video/rumor-has-it-live-from-reba-in-concert-1990/1528643581"
            },
            {
                title: "Is There Life Out There (Live From The Omaha Civic Center, 1994)",
                src: "https://embed.music.apple.com/us/music-video/is-there-life-out-there-live-from-the-omaha-civic-center-1994/1528276714"
            },
            {
                title: "Why Haven't I Heard From You (Live From The Omaha Civic Center, 1994)",
                src: "https://embed.music.apple.com/us/music-video/why-havent-i-heard-from-you-live-from-the-omaha-civic/1523907396"
            },
            {
                title: "What if",
                src: "https://embed.music.apple.com/us/music-video/what-if/1512028662"
            },
            {
                title: "I'll Fly Away (Live At Ryman Auditorium, Nashville, TN / 2017)",
                src: "https://embed.music.apple.com/us/music-video/ill-fly-away-live-at-ryman-auditorium-nashville-tn-2017/1625012812"
            },
            {
                title: "Strange (Close Captioned)",
                src: "https://embed.music.apple.com/us/music-video/strange-close-captioned/1610584589"
            },
            {
                title: "She Thinks His Name Was John",
                src: "https://embed.music.apple.com/us/music-video/she-thinks-his-name-was-john/1446735021"
            },
            {
                title: "What Do You Say",
                src: "https://embed.music.apple.com/us/music-video/what-do-you-say/1446732279"
            },
            {
                title: "What If It's You",
                src: "https://embed.music.apple.com/us/music-video/what-if-its-you/1446739208"
            },
            {
                title: "Forever Love",
                src: "https://embed.music.apple.com/us/music-video/forever-love/1445856364"
            },
            {
                title: "Take It Back",
                src: "https://embed.music.apple.com/us/music-video/take-it-back/1445829936"
            },
            {
                title: "I Know How He Feels",
                src: "https://embed.music.apple.com/us/music-video/i-know-how-he-feels/1445728640"
            },
            {
                title: "The Last One to Know",
                src: "https://embed.music.apple.com/us/music-video/the-last-one-to-know/1445743835"
            },
            {
                title: "Rumor Has It",
                src: "https://embed.music.apple.com/us/music-video/rumor-has-it/1445827679"
            },
            {
                title: "Sunday Kind of Love",
                src: "https://embed.music.apple.com/us/music-video/sunday-kind-of-love/1445827358"
            },
            {
                title: "Till You Love Me",
                src: "https://embed.music.apple.com/us/music-video/till-you-love-me/1709597632"
            },
            {
                title: "Why Haven't I Heard from You",
                src: "https://embed.music.apple.com/us/music-video/why-havent-i-heard-from-you/1445848837"
            },
            {
                title: "I'm Gonna Take That Mountain",
                src: "https://embed.music.apple.com/us/music-video/im-gonna-take-that-mountain/1445849321"
            },
            {
                title: "Is There Life Out There",
                src: "https://embed.music.apple.com/us/music-video/is-there-life-out-there/1445846430"
            },
        ]
    },
    {
        artist: "Reba McEntire & Vince Gill",
        birthday: [{ month: "March", day: 28, year: 1955 }, { month: "April", day: 12, year: 1957 }],
        songs: [
            {
                title: "The Heart Won't Lie",
                src: "https://embed.music.apple.com/us/music-video/the-heart-wont-lie/1446858171"
            },
        ]
    },
    {
        artist: "Reba McEntire, Trisha Yearwood, Martina McBride & Linda Davis",
        birthday: [{ month: "March", day: 28, year: 1955 }, { month: "September", day: 19, year: 1964 }, { month: "July", day: 29, year: 1966 }, { month: "November", day: 26, year: 1962 }],
        songs: [
            {
                title: "On My Own",
                src: "https://embed.music.apple.com/us/music-video/on-my-own/1445727457"
            },
        ]
    },
    {
        artist: "Rema & Selena Gomez",
        birthday: [{ month: "May", day: 1, year: 2000 }, { month: "July", day: 22, year: 1992 }],
        songs: [
            {
                title: "Calm Down",
                src: "https://embed.music.apple.com/us/music-video/calm-down/1643167420"
            },
        ]
    },
    {
        artist: "Remy Ma",
        birthday: [{ month: "May", day: 30, year: 1980 }],
        songs: [
            {
                title: "Wake Me Up (feat. Lil' Kim)",
                src: "https://embed.music.apple.com/us/music-video/wake-me-up-feat-lil-kim/1310941577"
            },
        ]
    },
       {
        artist: "Reneé Rapp",
        birthday: [{ month: "January", day: 10, year: 2000 }],
        songs: [
            {
                title: "Leave Me Alone",
                src: "https://embed.music.apple.com/us/music-video/leave-me-alone/1817735516"
            },
             {
                title: "Mad",
                src: "https://embed.music.apple.com/us/music-video/mad/1822894726"
            },
        ]
    },
    {
        artist: "Reneé Rapp & Megan Thee Stallion",
        birthday: [{ month: "January", day: 10, year: 2000 }, { month: "February", day: 15, year: 1995 }],
        songs: [
            {
                title: "Not My Fault",
                src: "https://embed.music.apple.com/us/music-video/not-my-fault/1724860687"
            },
        ]
    },
    {
        artist: "Red Mcfly",
        songs: [
            {
                title: "No Exceptions (feat. Juelz Santana)",
                src: "https://embed.music.apple.com/us/music-video/no-exceptions-feat-juelz-santana/1737608317"
            },
        ]
    },
    {
        artist: "Rich Boy",
        songs: [
            {
                title: "Good Things (feat. Keri Hilson & Polow Da Don)",
                src: "https://embed.music.apple.com/us/music-video/good-things-feat-keri-hilson-polow-da-don/1445844101"
            },
        ]
    },
    {
        artist: "Rich Boy featuring Polow Da Don",
        songs: [
            {
                title: "Throw Some D's",
                src: "https://embed.music.apple.com/us/music-video/throw-some-ds/1446734036"
            },
        ]
    },
    {
        artist: "Rich The Kid",
        birthday: [{ month: "July", day: 13, year: 1992 }],
        songs: [
            {
                title: "Prada (feat. Polo G) [Remix]",
                src: "https://embed.music.apple.com/us/music-video/prada-feat-polo-g-remix/1711446641"
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
            {
                title: "Lamborghini Doors (feat. Meek Mill & Anthony Hamilton)",
                src: "https://embed.music.apple.com/us/music-video/lamborghini-doors-feat-meek-mill-anthony-hamilton/1277945867"
            },
             {
                title: "Florida Boy (feat. T-Pain & Kodak Black)",
                src: "https://embed.music.apple.com/us/music-video/florida-boy-feat-t-pain-kodak-black/1348116711"
            },
        ]
    },
    {
        artist: "Rick Ross & Meek Mill",
        birthday: [{ month: "January", day: 28, year: 1976 }, { month: "May", day: 6, year: 1987 }],
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
        artist: "Rick Ross & Pharrell Williams",
        birthday: [{ month: "January", day: 28, year: 1976 }, { month: "April", day: 5, year: 1973 }],
        songs: [
            {
                title: "For The Money",
                src: "https://embed.music.apple.com/us/music-video/for-the-money/1820949509"
            },
        ]
    },
    {
        artist: "Rick Ross & Styles P",
        birthday: [{ month: "January", day: 28, year: 1976 }, { month: "November", day: 28, year: 1974 }],
        songs: [
            {
                title: "B.M.F.",
                src: "https://embed.music.apple.com/us/music-video/b-m-f/1445834231"
            },
        ]
    },
    {
        artist: "Ricky Martin",
        birthday: [{ month: "December", day: 24, year: 1971 }],
        songs: [
            {
                title: "Nobody Wants to Be Lonely (with Christina Aguilera)",
                src: "https://embed.music.apple.com/us/music-video/nobody-wants-to-be-lonely-with-christina-aguilera/905442858"
            },
        ]
    },
    {
        artist: "Rico Love",
        birthday: [{ month: "December", day: 3, year: 1982 }],
        songs: [
            {
                title: "They Don't Know (feat. Ludacris, Trey Songz, Tiara Thomas, T.I. & Emjay) [Remix]",
                src: "https://embed.music.apple.com/us/music-video/they-dont-know-feat-ludacris-trey-songz-tiara-thomas/1445013977" 
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
        birthday: [{ month: "February", day: 20, year: 1988 }, { month: "January", day: 17, year: 1984 }],
        songs: [
            {
                title: "We Found Love",
                src: "https://embed.music.apple.com/us/music-video/we-found-love/1445858733"
            },
        ]
    },
    {
        artist: "Rihanna & Eminem",
        birthday: [{ month: "February", day: 20, year: 1988 }, { month: "October", day: 17, year: 1972 }],
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
        artist: "Rita Ora, Kylie Cantrall, Brandy & Malia Baker",
        songs: [
            {
                title: `Love Ain't It (From "Descendants: The Rise of Red")`,
                src: "https://embed.music.apple.com/us/music-video/love-aint-it-from-descendants-the-rise-of-red/1778208275"
            },
        ]
    },
    {
        artist: "Rob49 & Lil Wayne",
        birthday: [{ month: "March", day: 6, year: 1999 }, { month: "September", day: 27, year: 1982 }],
        songs: [
            {
                title: "Wassam Baby",
                src: "https://embed.music.apple.com/us/music-video/wassam-baby/1726256963"
            },
        ]
    },
     {
        artist: "Rob49, Sexyy Red & YTB Fatt",
        birthday: [{ month: "March", day: 6, year: 1999 }, { month: "April", day: 15, year: 1998 }, { month: "May", day: 28, year: 2001 }], 
        songs: [
            {
                title: "So Sexyy",
                src: "https://embed.music.apple.com/us/music-video/so-sexyy/1817297507"
            },
        ]
    },
     {
        artist: "Robin Schulz",
        birthday: [{ month: "April", day: 28, year: 1987 }],
        songs: [
            {
                title: "Old Friend (feat. CLOVES)",
                src: "https://embed.music.apple.com/us/music-video/old-friend-feat-cloves/1822967238"
            },
        ]
    },
    {
        artist: "Robin Thicke",
        birthday: [{ month: "March", day: 10, year: 1977 }],
        songs: [
            {
                title: "Blurred Lines (feat. T.I. & Pharrell)",
                src: "https://embed.music.apple.com/us/music-video/blurred-lines-feat-t-i-pharrell/1444344257" 
            },
        ]
    },
    {
        artist: "Robin Thicke & Snoop Dogg",
        birthday: [{ month: "March", day: 10, year: 1977 }, { month: "October", day: 20, year: 1971 }],
        songs: [
            {
                title: "It's In the Mornin",
                src: "https://embed.music.apple.com/us/music-video/its-in-the-mornin/1445707248"
            },
        ]
    },
    {
        artist: "Roscoe Dash & Soulja Boy Tell 'Em",
        birthday: [{ month: "April", day: 2, year: 1990 }, { month: "July", day: 28, year: 1990 }],
        songs: [
            {
                title: "All the Way Turnt Up",
                src: "https://embed.music.apple.com/us/music-video/all-the-way-turnt-up/1445838607"
            },
        ]
    },
    {
        artist: 'Roi "Chip" Anthony & Keith Sweat',
        songs: [
            {
                title: "Forever & Ever",
                src: "https://embed.music.apple.com/us/music-video/forever-ever/1746826853"
            },
        ]
    },
    {
        artist: "ROE",
        songs: [
            {
                title: "Stay",
                src: "https://embed.music.apple.com/us/music-video/stay/1810312854"
            },
        ]
    },
    {
        artist: "ROLE MODEL",
        birthday: [{ month: "May", day: 15, year: 1997 }], 
        songs: [
            {
                title: "Sally, When The Wine Runs Out",
                src: "https://embed.music.apple.com/us/music-video/sally-when-the-wine-runs-out/1797669438" 
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
        birthday: [{ month: "February", day: 11, year: 1997 }, { month: "October", day: 8, year: 1985 }],
        songs: [
            {
                title: "APT.",
                src: "https://embed.music.apple.com/us/music-video/apt/1774570775"
            },
        ]
    },
    {
        artist: "Rowdy Rebel",
        birthday: [{ month: "November", day: 24, year: 1991 }],
        songs: [
            {
                title: "New York (feat. A Boogie wit da Hoodie & Jadakiss)",
                src: "https://embed.music.apple.com/us/music-video/new-york-feat-a-boogie-wit-da-hoodie-jadakiss/1634692775"
            },
        ]
    },
    {
        artist: `Royce Da 5'9"`,
        birthday: [{ month: "July", day: 5, year: 1977 }],
        songs: [
            {
                title: "Summer On Lock (feat. Pusha T, Fabolous, Jadakiss, Agent Sasco)",
                src: "https://embed.music.apple.com/us/music-video/summer-on-lock-feat-pusha-t-fabolous-jadakiss-agent-sasco/1434630503"
            },
            {
                title: "Black Savage (feat. T.I., Cyhi The Prynce, White Gold & Sy Ari Da Kid)",
                src: "https://embed.music.apple.com/us/music-video/black-savage-feat-t-i-cyhi-the-prynce-white-gold-sy-ari-da-kid/1493455665" 
            },
        ]
    },
    {
        artist: "Rubi Rose",
        birthday: [{ month: "October", day: 2, year: 1997 }],
        songs: [
            {
                title: "I Like",
                src: "https://embed.music.apple.com/us/music-video/i-like/1809421842"
            },
        ]
    },
    {
        artist: "Ruff Ryders",
        songs: [
            {
                title: "What Ya Want (feat. Eve & Nokio)",
                src: "https://embed.music.apple.com/us/music-video/what-ya-want-feat-eve-nokio/1462212957"
            },
            {
                title: "Down Bottom (feat. Drag-On & Juvenile) [Edited Version]",
                src: "https://embed.music.apple.com/us/music-video/down-bottom-feat-drag-on-juvenile-edited-version/1445826381"
            },
        ]
    },
    {
        artist: "Ruff Ryders, Jadakiss & Bubba Sparxxx",
        songs: [
            {
                title: "They Ain't Ready",
                src: "https://embed.music.apple.com/us/music-video/they-aint-ready/1446728821"
            },
        ]
    },
    {
        artist: "Rufus Blaq & Faith Evans",
        birthday: [{ month: "August", day: 26, year: 1972 }, { month: "June", day: 10, year: 1973 }],
        songs: [
            {
                title: "Show Me",
                src: "https://embed.music.apple.com/us/music-video/show-me/1400270593"
            },
        ]
    },
    {
        artist: "Run-DMC",
        songs: [
            {
                title: "Let's Stay Together (Together Forever) [feat. Jagged Edge]",
                src: "https://embed.music.apple.com/us/music-video/lets-stay-together-together-forever-feat-jagged-edge/1279188980"
            },
            {
                title: "Walk This Way",
                src: "https://embed.music.apple.com/us/music-video/walk-this-way/275081369"
            },
            {
                title: "Faces",
                src: "https://embed.music.apple.com/us/music-video/faces/287822546"
            },
            {
                title: "Sucker MC's",
                src: "https://embed.music.apple.com/us/music-video/sucker-mcs/291813307"
            },
            {
                title: "Beats to the Rhyme",
                src: "https://embed.music.apple.com/us/music-video/beats-to-the-rhyme/548915339"
            },
            {
                title: "King of Rock",
                src: "https://embed.music.apple.com/us/music-video/king-of-rock/327359752"
            },
            {
                title: "Run's House",
                src: "https://embed.music.apple.com/us/music-video/runs-house/327358762"
            },
            {
                title: "Rock Show (feat. Stephan Jenkins of Third Eye Blind)",
                src: "https://embed.music.apple.com/us/music-video/rock-show-feat-stephan-jenkins-of-third-eye-blind/288610052"
            },
            {
                title: "Christmas In Hollis",
                src: "https://embed.music.apple.com/us/music-video/christmas-in-hollis/291644804"
            },
            {
                title: "It's Tricky",
                src: "https://embed.music.apple.com/us/music-video/its-tricky/277641256"
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
        artist: "Saint Messiah",
        songs: [
            {
                title: "The KA-BA (feat. STYLES P)",
                src: "https://embed.music.apple.com/us/music-video/the-ka-ba-feat-styles-p/1694782593"
            },
        ]
    },
    {
        artist: "Sam Smith",
        birthday: [{ month: "May", day: 19, year: 1992 }],
        songs: [
            {
                title: "Stay with Me (feat. Mary J. Blige)",
                src: "https://embed.music.apple.com/us/music-video/stay-with-me-feat-mary-j-blige/1536994975"
            },
        ]
    },
    {
        artist: "Sammie & Soulja Boy Tell 'Em",
        birthday: [{ month: "March", day: 1, year: 1987 }, { month: "July", day: 28, year: 1990 }],
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
            {
                title: "Closer (feat. H.E.R.)",
                src: "https://embed.music.apple.com/us/music-video/closer-feat-h-e-r/1610107893"
            },
            {
                title: "ICY GRL (feat. Kehlani) [Bae Mix]",
                src: "https://embed.music.apple.com/us/music-video/icy-grl-feat-kehlani-bae-mix/1396223946"
            },
            {
                title: "Back to the Streets (feat. Jhené Aiko)",
                src: "https://embed.music.apple.com/us/music-video/back-to-the-streets-feat-jhen%C3%A9-aiko/1541269104"
            },
        ]
    },
    {
        artist: "Saweetie & P-LO",
        birthday: [{ month: "July", day: 2, year: 1993 }, { month: "May", day: 7, year: 1991 }],
        songs: [
            {
                title: "Do It For The Bay",
                src: "https://embed.music.apple.com/us/music-video/do-it-for-the-bay/1727624201"
            },
        ]
    },
    {
        artist: "Saweetie, YG & Tyga",
        birthday: [{ month: "July", day: 2, year: 1993 }, { month: "March", day: 9, year: 1990 }, { month: "November", day: 19, year: 1989 }],
        songs: [
            {
                title: "BIRTHDAY",
                src: "https://embed.music.apple.com/us/music-video/birthday/1699671441"
            },
        ]
    },
     {
        artist: "SAILORR",
        birthday: [{ month: "December", day: 7, year: 1998 }],
        songs: [
            {
                title: "DOWN BAD",
                src: "https://embed.music.apple.com/us/music-video/down-bad/1807475212"
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
        artist: "ScarLip",
        songs: [
            {
                title: "Blick (Remix) [feat. NLE Choppa]",
                src: "https://embed.music.apple.com/us/music-video/blick-remix-feat-nle-choppa/1724233184"
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
        artist: "SE7EN",
        birthday: [{ month: "November", day: 9, year: 1984 }],
        songs: [
            {
                title: "Girls (feat. Lil Kim)",
                src: "https://embed.music.apple.com/us/music-video/girls-feat-lil-kim/309027842"
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
            {
                title: "Give It to You (feat. Eve) [Edited Version]",
                src: "https://embed.music.apple.com/us/music-video/give-it-to-you-feat-eve-edited-version/1445848683"
            },
            {
                title: "Light My Fire (feat. Gwen Stefani & Shenseea)",
                src: "https://embed.music.apple.com/us/music-video/light-my-fire-feat-gwen-stefani-shenseea/1634031261"
            },
            {
                title: "Naked Truth (feat. Jhené Aiko)",
                src: "https://embed.music.apple.com/us/music-video/naked-truth-feat-jhen%C3%A9-aiko/1447112764"
            },
            {
                title: "Sativa (feat. Rae Sremmurd)",
                src: "https://embed.music.apple.com/us/music-video/sativa-feat-rae-sremmurd/1444346466"
            },
        ]
    },
    {
        artist: "Sean Paul & Inna",
        birthday: [{ month: "January", day: 9, year: 1973 }, { month: "October", day: 16, year: 1986 }],
        songs: [
            {
                title: "Let It Talk to Me",
                src: "https://embed.music.apple.com/us/music-video/let-it-talk-to-me/1802208534"
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
        artist: "Shabba Ranks",
        birthday: [{ month: "January", day: 17, year: 1966 }],
        songs: [
            {
                title: "The Jam (feat. KRS-One)",
                src: "https://embed.music.apple.com/us/music-video/the-jam-feat-krs-one/1535281477"
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
        artist: "Sheck Wes",
        birthday: [{ month: "September", day: 10, year: 1998 }],
        songs: [
            {
                title: "ILMB (feat. Travis Scott)",
                src: "https://embed.music.apple.com/us/music-video/ilmb-feat-travis-scott/1807658504"
            },
        ]
    },
    {
        artist: "Sheek Louch",
        birthday: [{ month: "November", day: 9, year: 1976 }],
        songs: [
            {
                title: "Consecutively (feat. Cory Gunz)",
                src: "https://embed.music.apple.com/us/music-video/consecutively-feat-cory-gunz/1689476815"
            },
            {
                title: "Loyal Or Stupid (feat. Whispers)",
                src: "https://embed.music.apple.com/us/music-video/loyal-or-stupid-feat-whispers/1654776866"
            },
            {
                title: "Spirit of Griselda (feat. Ragz Da Artist & Benny the Butcher)",
                src: "https://embed.music.apple.com/us/music-video/spirit-of-griselda-feat-ragz-da-artist-benny-the-butcher/1554513811"
            },
            {
                title: "Onyx (feat. Lil Fame)",
                src: "https://embed.music.apple.com/us/music-video/onyx-feat-lil-fame/1548538746"
            },
            {
                title: "Paranoid",
                src: "https://embed.music.apple.com/us/music-video/paranoid/1536796614"
            },
            {
                title: "Making Plays (feat. Whispers)",
                src: "https://embed.music.apple.com/us/music-video/making-plays-feat-whispers/1531498342"
            },
            {
                title: "Alone",
                src: "https://embed.music.apple.com/us/music-video/alone/1568710056"
            },
            {
                title: "Good Love",
                src: "https://embed.music.apple.com/us/music-video/good-love/275310912"
            },
        ]
    },
    {
        artist: "Sheek Louch & Jeremih",
        birthday: [{ month: "November", day: 9, year: 1976 }, { month: "July", day: 17, year: 1987 }],
        songs: [
            {
                title: "Party After 2 (feat. Jeremih)",
                src: "https://embed.music.apple.com/us/music-video/party-after-2-feat-jeremih/1445827705"
            },
        ]
    },
    {
        artist: "Sheek Louch featuring Styles P",
        birthday: [{ month: "November", day: 9, year: 1976 }, { month: "November", day: 28, year: 1974 }],
        songs: [
            {
                title: "Kiss Your Ass Goodbye",
                src: "https://embed.music.apple.com/us/music-video/kiss-your-ass-goodbye/118706877"
            },
        ]
    },
    {
        artist: "Sheek Louch, J-Hood & Jadakiss",
        songs: [
            {
                title: "Mighty D-Block (2 Guns Up) [Edited Version] [Edited Version]",
                src: "https://embed.music.apple.com/us/music-video/mighty-d-block-2-guns-up-edited-version-edited-version/1445851121"
            },
        ]
    },
    {
        artist: "Sheila E. & Snoop Dogg",
        birthday: [{ month: "December", day: 12, year: 1957 }, { month: "October", day: 20, year: 1971 }],
        songs: [
            {
                title: "No Line",
                src: "https://embed.music.apple.com/us/music-video/no-line/1484427947"
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
            {
                title: "Puni Police",
                src: "https://embed.music.apple.com/us/music-video/puni-police/1793368275"
            },
            {
                title: "Dating Szn (Options)",
                src: "https://embed.music.apple.com/us/music-video/dating-szn-options/1780391190"
            },
            {
                title: "Flava (feat. Coi Leray)",
                src: "https://embed.music.apple.com/us/music-video/flava-feat-coi-leray/1747617754"
            },
            {
                title: "Sold Out",
                src: "https://embed.music.apple.com/us/music-video/sold-out/1690719929"
            },
            {
                title: "R U That (feat. 21 Savage)",
                src: "https://embed.music.apple.com/us/music-video/r-u-that-feat-21-savage/1619521084"
            },
        ]
    },
    {
        artist: "Shenseea & Rvssian",
        songs: [
            {
                title: "You're The One I Love",
                src: "https://embed.music.apple.com/us/music-video/youre-the-one-i-love/1599610505"
            },
        ]
    },
    {
        artist: "Shenseea & Skillibeng",
        birthday: [{ month: "October", day: 1, year: 1996 }, { month: "December", day: 23, year: 1996 }],
        songs: [
            {
                title: "Rain",
                src: "https://embed.music.apple.com/us/music-video/rain/1640803241"
            },
        ]
    },
    {
        artist: "Shenseea & Tyga",
        birthday: [{ month: "October", day: 1, year: 1996 }, { month: "November", day: 19, year: 1989 }],
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
        artist: "Shoreline Mafia, OhGeesy & Fenix Flexin",
        songs: [
            {
                title: "Back In Bidness",
                src: "https://embed.music.apple.com/us/music-video/back-in-bidness/1803408766"
            },
            {
                title: "Work",
                src: "https://embed.music.apple.com/us/music-video/work/1753325641"
            },
            {
                title: "HEAT STICK",
                src: "https://embed.music.apple.com/us/music-video/heat-stick/1745597760"
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
        artist: "Sigdatrig",
        songs: [
            {
                title: "Habits (feat. Jim Jones & T'Juan TMK)",
                src: "https://embed.music.apple.com/us/music-video/habits-feat-jim-jones-tjuan-tmk/1688045118"
            },
        ]
    },
    {
        artist: "Silk",
        songs: [
            {
                title: "Happy Days (feat. Keith Sweat)",
                src: "https://embed.music.apple.com/us/music-video/happy-days-feat-keith-sweat/281899022"
            },
        ]
    },
    {
        artist: "Silk City, Dua Lipa & Ellie Goulding",
        birthday: [ { month: "September", day: 4, year: 1975 },{ month: "November", day: 10, year: 1978 }, { month: "August", day: 22, year: 1995 }, { month: "December", day: 30, year: 1986 }],
        songs: [
            {
                title: "New Love (feat. Diplo & Mark Ronson)",
                src: "https://embed.music.apple.com/us/music-video/new-love-feat-diplo-mark-ronson/1550006881"
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
        artist: "Sizzla",
        birthday: [{ month: "April", day: 17, year: 1976 }],
        songs: [
            {
                title: "Glory & Honor",
                src: "https://embed.music.apple.com/us/music-video/glory-honor/1727740821"
            },
            {
                title: "Crown on Your Head",
                src: "https://embed.music.apple.com/us/music-video/crown-on-your-head/1607656913"
            },
        ]
    },
    {
        artist: "Sizzla, Chino Mcgregor, Tarrus Riley & Dre Island",
        songs: [
            {
                title: "Every Nation (XTM.Nation)",
                src: "https://embed.music.apple.com/us/music-video/every-nation-xtm-nation/1718292390"
            },
        ]
    },
    {
        artist: "Skilla Baby",
        birthday: [{ month: "October", day: 2, year: 1998 }],
        songs: [
            {
                title: "Misfit (feat. Polo G)",
                src: "https://embed.music.apple.com/us/music-video/misfit-feat-polo-g/1758460247"
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
            {
                title: "16CHOPPA (feat. Nardo Wick)",
                src: "https://embed.music.apple.com/us/music-video/16choppa-feat-nardo-wick/1667686375"
            },
        ]
    },
    {
        artist: "Skip Marley & H.E.R.",
        birthday: [{ month: "June", day: 4, year: 1996 }, { month: "June", day: 27, year: 1997 }],
        songs: [
            {
                title: "Slow Down",
                src: "https://embed.music.apple.com/us/music-video/slow-down/1492343416"
            },
        ]
    },
    {
        artist: "Skye Newman",
        songs: [
            {
                title: "Family Matters",
                src: "https://embed.music.apple.com/us/music-video/family-matters/1815747683"
            },
        ]
    },
    {
        artist: "Slayyyter",
        birthday: [{ month: "September", day: 17, year: 1996 }],
        songs: [
            {
                title: "Daddy AF",
                src: "https://embed.music.apple.com/us/music-video/daddy-af/1463238106"
            },
            {
                title: "Erotic Electronic",
                src: "https://embed.music.apple.com/us/music-video/erotic-electronic/1702783420"
            },
        ]
    },
    {
        artist: "Slick Rick",
        birthday: [{ month: "January", day: 14, year: 1965 }],
        songs: [
            {
                title: "Cuz It's Wrong",
                src: "https://embed.music.apple.com/us/music-video/cuz-its-wrong/1446013288"
            },
            {
                title: "I Shouldn't Have Done It (Edited Version)",
                src: "https://embed.music.apple.com/us/music-video/i-shouldnt-have-done-it-edited-version/1445859353"
            },
            {
                title: "Children's Story",
                src: "https://embed.music.apple.com/us/music-video/childrens-story/1445838620"
            },
            {
                title: "Teenage Love",
                src: "https://embed.music.apple.com/us/music-video/teenage-love/1445713865"
            },
        ]
    },
    {
        artist: "Slick Rick & Outkast",
        songs: [
            {
                title: "Street Talkin' (Glow Version)",
                src: "https://embed.music.apple.com/us/music-video/street-talkin-glow-version/1446009596"
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
        artist: "Sly & Robbie",
        songs: [
            {
                title: "Make a Change (feat. Luciano)",
                src: "https://embed.music.apple.com/us/music-video/make-a-change-feat-luciano/1718300074"
            },
        ]
    },
    {
        artist: "Smiley & Drake",
        songs: [
            {
                title: "2 Mazza",
                src: "https://embed.music.apple.com/us/music-video/2-mazza/1820354071"
            },
        ]
    },
    {
        artist: "Smoke DZA, Flipp Dinero & Jadakiss",
        birthday: [{ month: "February", day: 8, year: 1984 }, { month: "November", day: 16, year: 1995 }, { month: "May", day: 27, year: 1975 }],
        songs: [
            {
                title: "Hibachi",
                src: "https://embed.music.apple.com/us/music-video/hibachi/1531405898"
            },
        ]
    },
    {
        artist: "SNS", 
        songs: [
            {
                title: "Dougie (feat. Jim Jones)",
                src: "https://embed.music.apple.com/us/music-video/dougie-feat-jim-jones/1538013661"
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
            {
                title: "Gang Signs (feat. Mozzy)",
                src: "https://embed.music.apple.com/us/music-video/gang-signs-feat-mozzy/1566179348"
            },
            {
                title: "Bitch Please (feat. Xzibit)",
                src: "https://embed.music.apple.com/us/music-video/bitch-please-feat-xzibit/1691944826"
            },
            {
                title: "Just A Baby Boy (feat. Tyrese & Mr. Tan)",
                src: "https://embed.music.apple.com/us/music-video/just-a-baby-boy-feat-tyrese-mr-tan/1691946377"
            },
            {
                title: "CEO",
                src: "https://embed.music.apple.com/us/music-video/ceo/1559023304"
            },
            {
                title: "Countdown (feat. Swizz Beatz)",
                src: "https://embed.music.apple.com/us/music-video/countdown-feat-swizz-beatz/1474650891"
            },
            {
                title: "Words Are Few (feat. B Slade) [2018 Stellar Awards Performance]",
                src: "https://embed.music.apple.com/us/music-video/words-are-few-feat-b-slade-2018-stellar-awards-performance/1368161407"
            },
            {
                title: "California Roll (feat. Stevie Wonder)",
                src: "https://embed.music.apple.com/us/music-video/california-roll-feat-stevie-wonder/1015525282"
            },
            {
                title: "Sweat",
                src: "https://embed.music.apple.com/us/music-video/sweat/719607712"
            },
            {
                title: "Drop It Like It's Hot (Edited Version) [feat. Pharrell Williams]",
                src: "https://embed.music.apple.com/us/music-video/drop-it-like-its-hot-edited-version-feat-pharrell-williams/1445829376"
            },
            {
                title: "Ups & Downs / Bang Out (Edited Version) [Edited Version]",
                src: "https://embed.music.apple.com/us/music-video/ups-downs-bang-out-edited-version-edited-version/1445834267"
            },

            {
                title: "B Please (feat. Xzibit)",
                src: "https://embed.music.apple.com/us/music-video/b-please-feat-xzibit/1691950622"
            },
            {
                title: "Doggfather (feat. Charlie Wilson)",
                src: "https://embed.music.apple.com/us/music-video/doggfather-feat-charlie-wilson/1676529719"
            },
        ]
    },
    {
        artist: "Snoop Dogg & October London",
        birthday: [{ month: "October", day: 20, year: 1971 }, { month: "October", day: 17, year: 1986 }],
        songs: [
            {
                title: "Touch Away",
                src: "https://embed.music.apple.com/us/music-video/touch-away/1634330674"
            },
        ]
    },
    {
        artist: "Snoop Dogg & Pharrell Williams",
        birthday: [{ month: "October", day: 20, year: 1971 }, { month: "April", day: 5, year: 1973 }],
        songs: [
            {
                title: "Beautiful",
                src: "https://embed.music.apple.com/us/music-video/beautiful/719776505"
            },
        ]
    },
    {
        artist: "Snoop Dogg & T-Pain",
        birthday: [{ month: "October", day: 20, year: 1971 }, { month: "September", day: 30, year: 1984 }],
        songs: [
            {
                title: "Boom (feat. T-Pain)",
                src: "https://embed.music.apple.com/us/music-video/boom-feat-t-pain/745129777"
            },
        ]
    },
    {
        artist: "Snoop Dogg & Wiz Khalifa",
        birthday: [{ month: "October", day: 20, year: 1971 }, { month: "September", day: 8, year: 1987 }],
        songs: [
            {
                title: "Young, Wild & Free (feat. Bruno Mars)",
                src: "https://embed.music.apple.com/us/music-video/young-wild-free-feat-bruno-mars/480436641"
            },
        ]
    },
    {
        artist: "Snoop Dogg & Willie Nelson",
        birthday: [{ month: "October", day: 20, year: 1971 }, { month: "April", day: 29, year: 1933 }],
        songs: [
            {
                title: "My Medicine (Edited Version)",
                src: "https://embed.music.apple.com/us/music-video/my-medicine-edited-version/1445726284"
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
            {
                title: "First Rapper To Do It",
                src: "https://embed.music.apple.com/us/music-video/first-rapper-to-do-it/1785207445"
            },
            {
                title: "Left Right",
                src: "https://embed.music.apple.com/us/music-video/left-right/1730098138"
            },
            {
                title: "150 Bricks",
                src: "https://embed.music.apple.com/us/music-video/150-bricks/1707318006"
            },
            {
                title: "She Make It Clap",
                src: "https://embed.music.apple.com/us/music-video/she-make-it-clap/1568579733"
            },
            {
                title: "Bird Walk",
                src: "https://embed.music.apple.com/us/music-video/bird-walk/1445863853"
            },
            {
                title: "Donk",
                src: "https://embed.music.apple.com/us/music-video/donk/1446733295"
            },
            {
                title: "Crank That (Soulja Boy)",
                src: "https://embed.music.apple.com/us/music-video/crank-that-soulja-boy/1445753559"
            },
        ]
    },
    {
        artist: "Soulja Boy Tell 'Em & 50 Cent",
        birthday: [{ month: "July", day: 28, year: 1990 }, { month: "July", day: 6, year: 1975 }],
        songs: [
            {
                title: "Mean Mug (feat. 50 Cent)",
                src: "https://embed.music.apple.com/us/music-video/mean-mug-feat-50-cent/1445828592"
            },
        ]
    },
    {
        artist: "Soulja Boy Tell 'Em, Gucci Mane & Shawty Lo",
        birthday: [{ month: "July", day: 28, year: 1990 }, { month: "February", day: 12, year: 1980 }, { month: "March", day: 22, year: 1976 }],
        songs: [
            {
                title: "Gucci Bandanna",
                src: "https://embed.music.apple.com/us/music-video/gucci-bandanna/1445869414"
            },
        ]
    },
    {
        artist: "Spice",
        birthday: [{ month: "August", day: 6, year: 1982 }],
        songs: [
            {
                title: "Sittn Fi Chat",
                src: "https://embed.music.apple.com/us/music-video/sittn-fi-chat/1761711080"
            },
            {
                title: "Queen of the Dancehall",
                src: "https://embed.music.apple.com/us/music-video/queen-of-the-dancehall/1681964862"
            },
            {
                title: "Spice Marley",
                src: "https://embed.music.apple.com/us/music-video/spice-marley/1679696731"
            },
            {
                title: "Go Down Deh (feat. Sean Paul & Shaggy)",
                src: "https://embed.music.apple.com/us/music-video/go-down-deh-feat-sean-paul-shaggy/1565533036"
            },
            {
                title: "Inches",
                src: "https://embed.music.apple.com/us/music-video/inches/1707086307"
            },
            {
                title: "Cool It (Radio Edit)",
                src: "https://embed.music.apple.com/us/music-video/cool-it-radio-edit/1459531069"
            },
            {
                title: "Romantic Mood",
                src: "https://embed.music.apple.com/us/music-video/romantic-mood/1459423635"
            },
        ]
    },
    {
        artist: "Spice, Demarco & Meeka",
        songs: [
            {
                title: "Jiggle",
                src: "https://embed.music.apple.com/us/music-video/jiggle/1622165028"
            },
        ]
    },
    {
        artist: "Spice & Busta Rhymes",
        birthday: [{ month: "August", day: 6, year: 1982 }, { month: "May", day: 20, year: 1972 }],
        songs: [
            {
                title: "Round Round",
                src: "https://embed.music.apple.com/us/music-video/round-round/1754395445"
            },
        ]
    },
    {
        artist: "Spice & Cham",
        songs: [
            {
                title: "Condensed Milk",
                src: "https://embed.music.apple.com/us/music-video/condensed-milk/1718305246"
            },
        ]
    },
    {
        artist: "Spice & Romieikon",
        songs: [
            {
                title: "Rolling",
                src: "https://embed.music.apple.com/us/music-video/rolling/1523360718"
            },
        ]
    },
      {
        artist: "SprngBrk",
        songs: [
            {
                title: "Secret (feat. T-Pain)",
                src: "https://embed.music.apple.com/us/music-video/secret-feat-t-pain/1450684843"
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
        artist: "Stafford Brothers",
        songs: [
            {
                title: "This Girl (feat. Eva Simons & T.I.)",
                src: "https://embed.music.apple.com/us/music-video/this-girl-feat-eva-simons-t-i/1713573929" 
            },
        ]
    },
    {
        artist: "Static & Ben El, Snoop Dogg & Lil Baby",
        songs: [
            {
                title: "Ziki Ziki",
                src: "https://embed.music.apple.com/us/music-video/ziki-ziki/1613514742"
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
            {
                title: "Clockwork (feat. Spice)",
                src: "https://embed.music.apple.com/us/music-video/clockwork-feat-spice/1641198433"
            },
        ]
    },
    {
        artist: "Steven Malcolm, Snoop Dogg & Jay-Way",
        songs: [
            {
                title: "Summertime",
                src: "https://embed.music.apple.com/us/music-video/summertime/1627815753"
            },
        ]
    },
    {
        artist: "Stonebwoy",
        birthday: [{ month: "March", day: 5, year: 1988 }],
        songs: [
            {
                title: "JIGGLE & WHINE (feat. Spice)",
                src: "https://embed.music.apple.com/us/music-video/jiggle-whine-feat-spice/1786263917"
            },
        ]
    },
    {
        artist: "Stonebwoy & Keri Hilson",
        birthday: [{ month: "March", day: 5, year: 1988 }, { month: "December", day: 5, year: 1982 }],
        songs: [
            {
                title: "Nominate",
                src: "https://embed.music.apple.com/us/music-video/nominate/1507434280"
            },
        ]
    },
    {
        artist: "Stunna Girl",
        songs: [
            {
                title: "Wake Dis Shit Up (feat. Mozzy)",
                src: "https://embed.music.apple.com/us/music-video/wake-dis-shit-up-feat-mozzy/1706414643"
            },
        ]
    },
    {
        artist: "Styles P",
        birthday: [{ month: "November", day: 28, year: 1974 }],
        songs: [
            {
                title: "Brand New",
                src: "https://embed.music.apple.com/us/music-video/brand-new/1487760034"
            },
            {
                title: "Lean (Official Music Video)",
                src: "https://embed.music.apple.com/us/music-video/lean-official-music-video/640722139"
            },
            {
                title: "I Know",
                src: "https://embed.music.apple.com/us/music-video/i-know/579158698"
            },
            {
                title: "Blow Your Mind - Director's Cut",
                src: "https://embed.music.apple.com/us/music-video/blow-your-mind-directors-cut/268250090"
            },
            {
                title: "Can You Believe It",
                src: "https://embed.music.apple.com/us/music-video/can-you-believe-it/1445720970"
            },
        ]
    },
    {
        artist: "Styles P & Havoc",
        birthday: [{ month: "November", day: 28, year: 1974 },{ month: "May", day: 21, year: 1974 }],
        songs: [
            {
                title: "Nightmares 2 Dreams",
                src: "https://embed.music.apple.com/us/music-video/nightmares-2-dreams/1597986419"
            },
        ]
    },
    {
        artist: "Styles P & Pharoahe Monch",
        birthday: [{ month: "November", day: 28, year: 1974 }, { month: "October", day: 31, year: 1972 }],
        songs: [
            {
                title: "The Life",
                src: "https://embed.music.apple.com/us/music-video/the-life/1446011711"
            },
        ]
    },
    {
        artist: "Suki Waterhouse",
        birthday: [{ month: "January", day: 5, year: 1992 }],
        songs: [
            {
                title: "On This Love",
                src: "https://embed.music.apple.com/us/music-video/on-this-love/1810303621"
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
            {
                title: "Spend It",
                src: "https://embed.music.apple.com/us/music-video/spend-it/1812213119"
            },
        ]
    },
    {
        artist: "Swae Lee & Jhené Aiko",
        birthday: [{ month: "June", day: 7, year: 1993 }, { month: "March", day: 16, year: 1988 }],
        songs: [
            {
                title: "In The Dark",
                src: "https://embed.music.apple.com/us/music-video/in-the-dark/1587204470"
            },
        ]
    },
    {
        artist: "Swissivory",
        songs: [
            {
                title: "Dog in Me (feat. DMX, C-Tru & Tariah)",
                src: "https://embed.music.apple.com/us/music-video/dog-in-me-feat-dmx-c-tru-tariah/1224585166"
            },
        ]
    },
    {
        artist: "Swizz Beatz",
        birthday: [{ month: "September", day: 13, year: 1978 }], 
        songs: [
            {
                title: "Preach (feat. Jim Jones)",
                src: "https://embed.music.apple.com/us/music-video/preach-feat-jim-jones/1438790622"
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
            {
                title: "That's Just Tips",
                src: "https://embed.music.apple.com/us/music-video/thats-just-tips/1636978008"
            },
             {
                title: "I'm Cool With That",
                src: "https://embed.music.apple.com/us/music-video/im-cool-with-that/1597864805"
            },
            {
                title: "F.B.G.M. (feat. Young M.A.)",
                src: "https://embed.music.apple.com/us/music-video/f-b-g-m-feat-young-m-a/1245779566"
            },
             {
                title: "Make That Sh*t Work (feat. Juicy J)",
                src: "https://embed.music.apple.com/us/music-video/make-that-sh-t-work-feat-juicy-j/1031993947"
            },
        ]
    },
    {
        artist: "T-Pain & Kehlani",
        birthday: [{ month: "September", day: 30, year: 1984 }, { month: "April", day: 24, year: 1995 }],
        songs: [
            {
                title: "I Like Dat",
                src: "https://embed.music.apple.com/us/music-video/i-like-dat/1573816746"
            },
        ]
    },
    {
        artist: "T-Pain & Lil Wayne",
        birthday: [{ month: "September", day: 30, year: 1984 }, { month: "September", day: 27, year: 1982 }],
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
            {
                title: "Writer (feat. Translee & B.o.B)",
                src: "https://embed.music.apple.com/us/music-video/writer-feat-translee-b-o-b/1444867542" 
            },
            {
                title: "Black Man (feat. Quavo, Meek Mill & Rara)",
                src: "https://embed.music.apple.com/us/music-video/black-man-feat-quavo-meek-mill-rara/1444605474" 
            },
            {
                title: "Money Talk",
                src: "https://embed.music.apple.com/us/music-video/money-talk/1445009734" 
            },
            {
                title: "G' Shit (feat. Jeezy & WatchTheDuck)",
                src: "https://embed.music.apple.com/us/music-video/g-shit-feat-jeezy-watchtheduck/964634671"
            },
            {
                title: "Ball (feat. Lil Wayne)",
                src: "https://embed.music.apple.com/us/music-video/ball-feat-lil-wayne/1437479775" 
            },
            {
                title: "Go Get It",
                src: "https://embed.music.apple.com/us/music-video/go-get-it/1437479776"
            },
            {
                title: "Big Things Poppin' (Do It)",
                src: "https://embed.music.apple.com/us/music-video/big-things-poppin-do-it/1260873366" 
            },
            {
                title: "You Know What It Is (feat. Wyclef Jean)",
                src: "https://embed.music.apple.com/us/music-video/you-know-what-it-is-feat-wyclef-jean/1260870365"  
            },
            {
                title: "Asap",
                src: "https://embed.music.apple.com/us/music-video/asap/1260866392"   
            },
            {
                title: "I'm Serious (feat. Beenie Man)",
                src: "https://embed.music.apple.com/us/music-video/im-serious-feat-beenie-man/1279364891"   
            },
            {
                title: "Let's Get Away",
                src: "https://embed.music.apple.com/us/music-video/lets-get-away/1260863968"   
            },
            {
                title: "Rubber Band Man",
                src: "https://embed.music.apple.com/us/music-video/rubber-band-man/1260772267"    
            },
            {
                title: "24'S",
                src: "https://embed.music.apple.com/us/music-video/24s/1260772269"    
            },
        ]
    },
    {
        artist: "T.I. & Domani",
        birthday: [{ month: "September", day: 25, year: 1980 }, { month: "March", day: 16, year: 2001 }],
        songs: [
            {
                title: "Family Connect",
                src: "https://embed.music.apple.com/us/music-video/family-connect/1615132403" 
            },
        ]
    },
    {
        artist: "Taio Cruz & Ludacris",
        birthday: [{ month: "April", day: 23, year: 1980 }, { month: "September", day: 11, year: 1977 }],
        songs: [
            {
                title: "Break Your Heart",
                src: "https://embed.music.apple.com/us/music-video/break-your-heart/1446006448"
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
            {
                title: "Sports car",
                src: "https://embed.music.apple.com/us/music-video/sports-car/1792291322"
            },
            {
                title: "Revolving door",
                src: "https://embed.music.apple.com/us/music-video/revolving-door/1797539454" 
            },
            {
                title: "greedy",
                src: "https://embed.music.apple.com/us/music-video/greedy/1707092755"
            },
            {
                title: "she's all i wanna be",
                src: "https://embed.music.apple.com/us/music-video/shes-all-i-wanna-be/1609138754"
            },
            {
                title: "bad ones",
                src: "https://embed.music.apple.com/us/music-video/bad-ones/1560011411"
            },
             {
                title: "Just Keep Watching (From F1® The Movie)",
                src: "https://embed.music.apple.com/us/music-video/just-keep-watching-from-f1-the-movie/1817530418"
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
        artist: "Tay Money",
        birthday: [{ month: "April", day: 6, year: 1993 }],
        songs: [
            {
                title: "Brat (feat. Latto)",
                src: "https://embed.music.apple.com/us/music-video/brat-feat-latto/1709029630"
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
        artist: "Teejay",
        songs: [
            {
                title: "Never Complain (feat. Masicka)",
                src: "https://embed.music.apple.com/us/music-video/never-complain-feat-masicka/1776914657"
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
        artist: "Teyana Taylor & Kehlani",
        birthday: [{ month: "December", day: 10, year: 1990 }, { month: "April", day: 24, year: 1995 }],
        songs: [
            {
                title: "Morning",
                src: "https://embed.music.apple.com/us/music-video/morning/1519111325"
            },
        ]
    },
    {
        artist: "Tha Dogg Pound & Snoop Dogg",
        songs: [
            {
                title: "Who Da Hardest? (feat. The Lady of Rage & RBX)",
                src: "https://embed.music.apple.com/us/music-video/who-da-hardest-feat-the-lady-of-rage-rbx/1750531837"
            },
            {
                title: "Smoke Up",
                src: "https://embed.music.apple.com/us/music-video/smoke-up/1741751989"
            },
        ]
    },
    {
        artist: "The 9ine & Jada Kingdom",
        songs: [
            {
                title: "Turn Me On (with Jada Kingdom)",
                src: "https://embed.music.apple.com/us/music-video/turn-me-on-with-jada-kingdom/1690857202"
            },
        ]
    },
    {
        artist: "The Black Keys",
        birthday: [{ month: "May", day: 14, year: 1979 }, { month: "April", day: 15, year: 1980 }],
        songs: [
            {
                title: "The Night Before",
                src: "https://embed.music.apple.com/us/music-video/the-night-before/1794898200"
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
        artist: "The Diplomats",
        songs: [
            {
                title: "Dipset Anthem (feat. Cam'ron & Juelz Santana)",
                src: "https://embed.music.apple.com/us/music-video/dipset-anthem-feat-camron-juelz-santana/1698618940"
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
            {
                title: "How We Do (Main Version, Closed Captioned)",
                src: "https://embed.music.apple.com/us/music-video/how-we-do-main-version-closed-captioned/1513229647"
            },
        ]
    },
     {
        artist: "The Go-Go's",
        songs: [
            {
                title: "Head Over Heels",
                src: "https://embed.music.apple.com/us/music-video/head-over-heels/719728805"
            },
            {
                title: "Turn To You",
                src: "https://embed.music.apple.com/us/music-video/turn-to-you/719727802"
            },
             {
                title: "Our Lips Are Sealed",
                src: "https://embed.music.apple.com/us/music-video/our-lips-are-sealed/719883917"
            },
             {
                title: "Vacation",
                src: "https://embed.music.apple.com/us/music-video/vacation/720034956"
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
        artist: "The Isley Brothers",
        songs: [
            {
                title: "Shout (Live)",
                src: "https://embed.music.apple.com/us/music-video/shout-live/342536251"
            },
            {
                title: "Summer Breeze (Live)",
                src: "https://embed.music.apple.com/us/music-video/summer-breeze-live/342516768"
            },
            {
                title: "Contagious",
                src: "https://embed.music.apple.com/us/music-video/contagious/1446734040"
            },
            {
                title: "What Would You Do?",
                src: "https://embed.music.apple.com/us/music-video/what-would-you-do/1445835579"
            },
        ]
    },
    {
        artist: "The Isley Brothers & Jill Scott",
        songs: [
            {
                title: "Said Enough",
                src: "https://embed.music.apple.com/us/music-video/said-enough/1446730729"
            },
        ]
    },
    {
        artist: "The Isley Brothers & JS ZNM",
        songs: [
            {
                title: "Busted",
                src: "https://embed.music.apple.com/us/music-video/busted/1446739165"
            },
        ]
    },
    {
        artist: "The Isley Brothers & Studio Rio",
        songs: [
            {
                title: "It's Your Thing (Studio Rio Performance)",
                src: "https://embed.music.apple.com/us/music-video/its-your-thing-studio-rio-performance/1284464435"
            },
        ]
    },
    {
        artist: "The Kid LAROI",
        birthday: [{ month: "August", day: 17, year: 2003 }],
        songs: [
            {
                title: "STILL CHOSE YOU (feat. Mustard)",
                src: "https://embed.music.apple.com/us/music-video/still-chose-you-feat-mustard/1595235118"
            },
            {
                title: "HOW DOES IT FEEL?",
                src: "https://embed.music.apple.com/us/music-video/how-does-it-feel/1821315858"
            },
        ]
    },
    {
        artist: "The LOX, Drag-On & Eve",
        songs: [
            {
                title: "Ryde or Die, Chick (Edited Version)",
                src: "https://embed.music.apple.com/us/music-video/ryde-or-die-chick-edited-version/1445738269"
            },
        ]
    },
       {
        artist: "The Marías",
        songs: [
            {
                title: "If Only",
                src: "https://embed.music.apple.com/us/music-video/if-only/1750796863"
            },
            {
                title: "Run Your Mouth",
                src: "https://embed.music.apple.com/us/music-video/run-your-mouth/1734512392"
            },
             {
                title: "All I Really Want Is You",
                src: "https://embed.music.apple.com/us/music-video/all-i-really-want-is-you/1610223294"
            },
             {
                title: "Hush",
                src: "https://embed.music.apple.com/us/music-video/hush/1567549546"
            },
             {
                title: "Back To Me",
                src: "https://embed.music.apple.com/us/music-video/back-to-me/1806175786"
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
            {
                title: "Nasty Girl (feat. Nelly, P. Diddy, Jagged Edge, Avery Storm)",
                src: "https://embed.music.apple.com/us/music-video/nasty-girl-feat-nelly-p-diddy-jagged-edge-avery-storm/1481505651"
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
        artist: "The Pussycat Dolls",
        birthday: [{ month: "September", day: 4, year: 1974 }, { month: "June", day: 29, year: 1978 }, { month: "September", day: 14, year: 1981 }, { month: "February", day: 4, year: 1982 }, { month: "May", day: 15, year: 1982 },{ month: "September", day: 28, year: 1984 }],
        songs: [
            {
                title: "React",
                src: "https://embed.music.apple.com/us/music-video/react/1497901368"
            },
        ]
    },
    {
        artist: "The Pussycat Dolls & Busta Rhymes",
        birthday: [{ month: "September", day: 4, year: 1974 }, { month: "June", day: 29, year: 1978 }, { month: "September", day: 14, year: 1981 }, { month: "February", day: 4, year: 1982 }, { month: "May", day: 15, year: 1982 },{ month: "September", day: 28, year: 1984 },{ month: "May", day: 20, year: 1972 }],
        songs: [
            {
                title: "Don't Cha (Busta Version) [Busta Version]",
                src: "https://embed.music.apple.com/us/music-video/dont-cha-busta-version-busta-version/1445832685"
            },
        ]
    },
    {
        artist: "The Pussycat Dolls featuring Snoop Dogg",
        birthday: [{ month: "September", day: 4, year: 1974 }, { month: "June", day: 29, year: 1978 }, { month: "September", day: 14, year: 1981 }, { month: "February", day: 4, year: 1982 }, { month: "May", day: 15, year: 1982 },{ month: "September", day: 28, year: 1984 },{ month: "October", day: 20, year: 1971 }],
        songs: [
            {
                title: "Buttons (feat. Snoop Dogg) [Snoop Version]",
                src: "https://embed.music.apple.com/us/music-video/buttons-feat-snoop-dogg-snoop-version/1445857926"
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
        birthday: [{ month: "February", day: 16, year: 1990 }, { month: "January", day: 16, year: 1996 }, { month: "May", day: 27, year: 1999 }],
        songs: [
            {
                title: "One of the Girls",
                src: "https://embed.music.apple.com/us/music-video/one-of-the-girls/1695965304"
            },
        ]
    },
    {
        artist: "The Weeknd, Playboi Carti & Madonna",
        birthday: [{ month: "February", day: 16, year: 1990 }, { month: "September", day: 13, year: 1995 }, { month: "August", day: 16, year: 1958 }],
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
        artist: "The-Dream, Fabolous, Juelz Santana, Rick Ross & Ludacris ",
        birthday: [{ month: "September", day: 20, year: 1977 } , { month: "November", day: 18, year: 1977 }, { month: "February", day: 18, year: 1982 }, { month: "January", day: 28, year: 1976 }, { month: "September", day: 11, year: 1977 }],
        songs: [
            {
                title: "Rockin' That Thang (Rap Remix)",
                src: "https://embed.music.apple.com/us/music-video/rockin-that-thang-rap-remix/1446735613"
            },
        ]
    },
    {
        artist: "The-Dream & Ludacris",
        birthday: [{ month: "September", day: 20, year: 1977 }, { month: "September", day: 11, year: 1977 }],
        songs: [
            {
                title: "Love King (Remix)",
                src: "https://embed.music.apple.com/us/music-video/love-king-remix/1445843836"
            },
        ]
    },
      {
        artist: "Thee Sacred Souls",
        songs: [
            {
                title: "Lucid Girl",
                src: "https://embed.music.apple.com/us/music-video/lucid-girl/1796497268"
            },
             {
                title: "Easier Said Than Done",
                src: "https://embed.music.apple.com/us/music-video/easier-said-than-done/1628463253"
            },
        ]
    },
     {
        artist: "Three 6 Mafia",
        songs: [
            {
                title: "Doe Boy Fresh (feat. Chamillionaire)",
                src: "https://embed.music.apple.com/us/music-video/doe-boy-fresh-feat-chamillionaire/1489676039"
            },
            {
                title: "Shake My (feat. Kalenna)",
                src: "https://embed.music.apple.com/us/music-video/shake-my-feat-kalenna/333724426"
            },
             {
                title: "Lil' Freak (Ugh Ugh Ugh)",
                src: "https://embed.music.apple.com/us/music-video/lil-freak-ugh-ugh-ugh/331179225"
            },
            {
                title: "I'd Rather (feat. Unk)",
                src: "https://embed.music.apple.com/us/music-video/id-rather-feat-unk/280390295"
            },
            {
                title: "That's Right (feat. Akon & Jim Jones)",
                src: "https://embed.music.apple.com/us/music-video/thats-right-feat-akon-jim-jones/291644330"
            },
            {
                title: "Side 2 Side",
                src: "https://embed.music.apple.com/us/music-video/side-2-side/329099418"
            },
             {
                title: "Sippin On Some Syrup (feat. UGK & Project Pat)",
                src: "https://embed.music.apple.com/us/music-video/sippin-on-some-syrup-feat-ugk-project-pat/311604807"
            },
             {
                title: "Late Nite Tip",
                src: "https://embed.music.apple.com/us/music-video/late-nite-tip/1536502843"
            },
        ]
    },
    {
        artist: "Tiësto & Charli XCX",
        birthday: [{ month: "January", day: 17, year: 1969 }, { month: "August", day: 2, year: 1992 }],
        songs: [
            {
                title: "Hot In It",
                src: "https://embed.music.apple.com/us/music-video/hot-in-it/1640234301"
            },
        ]
    },
    {
        artist: "Tiësto & Mabel",
        birthday: [{ month: "January", day: 17, year: 1969 }, { month: "February", day: 19, year: 1996 }],
        songs: [
            {
                title: "God Is a Dancer",
                src: "https://embed.music.apple.com/us/music-video/god-is-a-dancer/1479700210"
            },
        ]
    },
    {
        artist: "Tim McGraw",
        birthday: [{ month: "May", day: 1, year: 1967 }],
        songs: [
            {
                title: "Meanwhile Back At Mama's (Director's Cut) [feat. Faith Hill]",
                src: "https://embed.music.apple.com/us/music-video/meanwhile-back-at-mamas-directors-cut-feat-faith-hill/1467930770"
            },
        ]
    },
    {
        artist: "Tim McGraw & Faith Hill",
        birthday: [{ month: "May", day: 1, year: 1967 }, { month: "September", day: 21, year: 1967 }],
        songs: [
            {
                title: "The Rest of Our Life",
                src: "https://embed.music.apple.com/us/music-video/the-rest-of-our-life/1293453120"
            },
            {
                title: "Speak to a Girl",
                src: "https://embed.music.apple.com/us/music-video/speak-to-a-girl/1243861524"
            },
        ]
    },
    {
        artist: "Tina (Hoodcelebrityy)",
        birthday: [{ month: "July", day: 5, year: 1991 }],
        songs: [
            {
                title: "Hurt Inside",
                src: "https://embed.music.apple.com/us/music-video/hurt-inside/1780626235"
            },
            {
                title: "Roses",
                src: "https://embed.music.apple.com/us/music-video/roses/1765563175"
            },
            {
                title: "Lover Man",
                src: "https://embed.music.apple.com/us/music-video/lover-man/1763724569"
            },
            {
                title: "Pressure",
                src: "https://embed.music.apple.com/us/music-video/pressure/1755468341"
            },
            {
                title: "Funny Funny Funny (Intro)",
                src: "https://embed.music.apple.com/us/music-video/funny-funny-funny-intro/1753137310"
            },
            {
                title: "Been Pretty",
                src: "https://embed.music.apple.com/us/music-video/been-pretty/1749150442"
            },
            {
                title: "Pon Mi Sneakers",
                src: "https://embed.music.apple.com/us/music-video/pon-mi-sneakers/1708612632"
            },
            {
                title: "Hype Me Up",
                src: "https://embed.music.apple.com/us/music-video/hype-me-up/1643001083"
            },
            {
                title: "Champagne",
                src: "https://embed.music.apple.com/us/music-video/champagne/1566605495"
            },
            {
                title: "Inside",
                src: "https://embed.music.apple.com/us/music-video/inside/1454583327"
            },
            {
                title: "Walking Trophy",
                src: "https://embed.music.apple.com/us/music-video/walking-trophy/1383556508"
            },
        ]
    },
    {
        artist: "Tina (Hoodcelebrityy) & Shatta Wale",
        songs: [
            {
                title: "YKTV (You Know the Vibes)",
                src: "https://embed.music.apple.com/us/music-video/yktv-you-know-the-vibes/1716552670"
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
        birthday: [{ month: "February", day: 6, year: 1993 }, { month: "May", day: 26, year: 1991 }],
        songs: [
            {
                title: "HMU For a Good Time",
                src: "https://embed.music.apple.com/us/music-video/hmu-for-a-good-time/1631444348"
            },
        ]
    },
    {
        artist: "Tink",
        birthday: [{ month: "March", day: 18, year: 1995 }], 
        songs: [
            {
                title: "Save Your Soul",
                src: "https://embed.music.apple.com/us/music-video/save-your-soul/1674655655"
            },
             {
                title: "Might Let You (feat. Davido)",
                src: "https://embed.music.apple.com/us/music-video/might-let-you-feat-davido/1598399243"
            },
            {
                title: "Heat of the Moment",
                src: "https://embed.music.apple.com/us/music-video/heat-of-the-moment/1579116030"
            },
              {
                title: "Wet Dollars (feat. Tazer)",
                src: "https://embed.music.apple.com/us/music-video/wet-dollars-feat-tazer/1039135493"
            },
             {
                title: "Million",
                src: "https://embed.music.apple.com/us/music-video/million/1012628514"
            },
        ]
    },
       {
        artist: "Tink & Bryson Tiller",
        birthday: [{ month: "March", day: 18, year: 1995 }, { month: "January", day: 2, year: 1993 }], 
        songs: [
            {
                title: "Can We Talk?",
                src: "https://embed.music.apple.com/us/music-video/can-we-talk/1823153130"
            },
        ]
    },
      {
        artist: "Tink & 2 Chainz",
        birthday: [{ month: "March", day: 18, year: 1995 }, { month: "September", day: 12, year: 1977 }], 
        songs: [
            {
                title: "Cater",
                src: "https://embed.music.apple.com/us/music-video/cater/1620979107"
            },
        ]
    },
      {
        artist: "Tinlicker",
        songs: [
            {
                title: "Nothing To Lose (feat. Circa Waves)",
                src: "https://embed.music.apple.com/us/music-video/nothing-to-lose-feat-circa-waves/1725984265"
            },
             {
                title: "Rebirth (feat. Hero Baldwin)",
                src: "https://embed.music.apple.com/us/music-video/rebirth-feat-hero-baldwin/1611739827"
            },
        ]
    },
        {
        artist: "Tinlicker & Helsloot",
        songs: [
            {
                title: "Because You Move Me",
                src: "https://embed.music.apple.com/us/music-video/because-you-move-me/1555045680"
            },
        ]
    },
      {
        artist: "Tiwa Savage",
        birthday: [{ month: "February", day: 5, year: 1980 }],
        songs: [
            {
                title: "You4Me",
                src: "https://embed.music.apple.com/us/music-video/you4me/1818391556"
            },
        ]
    },
    {
        artist: "TLC",
        birthday: [{ month: "April", day: 26, year: 1970 }, { month: "February", day: 27, year: 1971 }, { month: "May", day: 27, year: 1971 }],
        songs: [
            {
                title: "Way Back (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/way-back-feat-snoop-dogg/1244863174"
            },
        ]
    },
    {
        artist: "Tommy Richman",
        birthday: [{ month: "March", day: 21, year: 2000 }],
        songs: [
            {
                title: "ACTIN UP",
                src: "https://embed.music.apple.com/us/music-video/actin-up/1795669278"
            },
        ]
    },
    {
        artist: "Tony Bennett & Faith Hill",
        birthday: [{ month: "August", day: 3, year: 1926 }, { month: "September", day: 21, year: 1967 }],
        songs: [
            {
                title: "The Way You Look Tonight (from Duets II: The Great Performances)",
                src: "https://embed.music.apple.com/us/music-video/the-way-you-look-tonight-from-duets-ii-the/1280870538"
            },
        ]
    },
    {
        artist: "Tony Bennett & Queen Latifah",
        birthday: [{ month: "August", day: 3, year: 1926 }, { month: "March", day: 18, year: 1970 }],
        songs: [
            {
                title: "Who Can I Turn To (When Nobody Needs Me) [from Duets II: The Great Performances]",
                src: "https://embed.music.apple.com/us/music-video/who-can-i-turn-to-when-nobody-needs-me-from-duets-ii/1281204035"
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
        birthday: [{ month: "January", day: 9, year: 2000 }, { month: "June", day: 14, year: 1993 }],
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
            {
                title: "cut",
                src: "https://embed.music.apple.com/us/music-video/cut/1701701631"
            },
            {
                title: "25th",
                src: "https://embed.music.apple.com/us/music-video/25th/1540689081"
            },
            {
                title: "Unbothered",
                src: "https://embed.music.apple.com/us/music-video/unbothered/1529214396"
            },
            {
                title: "Language (Live From Capitol Studios)",
                src: "https://embed.music.apple.com/us/music-video/language-live-from-capitol-studios/1477170720"
            },
            {
                title: "Coffee (Live From Capitol Studios)",
                src: "https://embed.music.apple.com/us/music-video/coffee-live-from-capitol-studios/1475696575"
            },
            {
                title: "Sorry Would Go a Long Way",
                src: "https://embed.music.apple.com/us/music-video/sorry-would-go-a-long-way/1469625664"
            },
            {
                title: "Change Your Mind",
                src: "https://embed.music.apple.com/us/music-video/change-your-mind/1466678193"
            },
            {
                title: "Masterpiece (feat. Lecrae) [Live From Warner Theatre, Washington, DC, 10/28/18]",
                src: "https://embed.music.apple.com/us/music-video/masterpiece-feat-lecrae-live-from-warner-theatre-washington/1446961330"
            },
            {
                title: "Soul's Anthem (It Is Well)",
                src: "https://embed.music.apple.com/us/music-video/souls-anthem-it-is-well/1436769090"
            },
            {
                title: "Sunday (Live)",
                src: "https://embed.music.apple.com/us/music-video/sunday-live/1435778803"
            },
            {
                title: "Just As Sure (feat. Jonathan McReynolds) [Live]",
                src: "https://embed.music.apple.com/us/music-video/just-as-sure-feat-jonathan-mcreynolds-live/1435780484"
            },
            {
                title: "Psalm 42 (Live)",
                src: "https://embed.music.apple.com/us/music-video/psalm-42-live/1435420458"
            },
            {
                title: "Help Us To Love (feat. The HamilTones) [Live]",
                src: "https://embed.music.apple.com/us/music-video/help-us-to-love-feat-the-hamiltones-live/1435226838"
            },
            {
                title: "Never Alone (feat. Kirk Franklin) [Live]",
                src: "https://embed.music.apple.com/us/music-video/never-alone-feat-kirk-franklin-live/1433289970"
            },
            {
                title: "Don't You Worry 'Bout a Thing",
                src: "https://embed.music.apple.com/us/music-video/dont-you-worry-bout-a-thing/1444865254"
            },
        ]
    },
    {
        artist: "Tory Lanez",
        birthday: [{ month: "July", day: 27, year: 1992 }],
        songs: [
            {
                title: "DrIP DrIp Drip (feat. Meek Mill)",
                src: "https://embed.music.apple.com/us/music-video/drip-drip-drip-feat-meek-mill/1439489747"
            },
        ]
    },
     {
        artist: "Tory Lanez & T-Pain",
        birthday: [{ month: "July", day: 27, year: 1992 }, { month: "September", day: 30, year: 1984 }],
        songs: [
            {
                title: "Jerry Sprunger",
                src: "https://embed.music.apple.com/us/music-video/jerry-sprunger/1487029106"
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
        birthday: [{ month: "October", day: 29, year: 1987 }, { month: "July", day: 9, year: 1994 }],
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
            {
                title: "DUMBO",
                src: "https://embed.music.apple.com/us/music-video/dumbo/1826467304"
            },
        ]
    },
      {
        artist: "Trap Beckham",
        birthday: [{ month: "July", day: 14, year: 1991 }],
        songs: [
            {
                title: "Get off Yo Ass (feat. T-Pain)",
                src: "https://embed.music.apple.com/us/music-video/get-off-yo-ass-feat-t-pain/1578955253"
            },
        ]
    },
    {
        artist: "Trensettahs Sound System",
        songs: [
            {
                title: "La Fiebre (feat. Sizzla & Zalama Crew)",
                src: "https://embed.music.apple.com/us/music-video/la-fiebre-feat-sizzla-zalama-crew/1670314650"
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
        artist: "Tweet",
        birthday: [{ month: "January", day: 21, year: 1971 }],
        songs: [
            {
                title: "Oops (Oh My) [feat. Missy Elliot]",
                src: "https://embed.music.apple.com/us/music-video/oops-oh-my-feat-missy-elliot/1537186857"
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
        artist: "Ty Bri",
        songs: [
            {
                title: "Wake Up (feat. Latto)",
                src: "https://embed.music.apple.com/us/music-video/wake-up-feat-latto/1529501403"
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
        artist: "Ty Dolla $ign & Mustard",
        birthday: [{ month: "April", day: 13, year: 1982 }, { month: "June", day: 5, year: 1990 }],
        songs: [
            {
                title: "My Friends (feat. Lil Durk)",
                src: "https://embed.music.apple.com/us/music-video/my-friends-feat-lil-durk/1651038261"
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
        birthday: [{ month: "November", day: 19, year: 1989 }, { month: "October", day: 21, year: 1995 }],
        songs: [
            {
                title: "Freaky Deaky",
                src: "https://embed.music.apple.com/us/music-video/freaky-deaky/1611437946"
            },
        ]
    },
    {
        artist: "Tyga & Megan Thee Stallion",
        birthday: [{ month: "November", day: 19, year: 1989 }, { month: "February", day: 15, year: 1995 }],
        songs: [
            {
                title: "FREAK",
                src: "https://embed.music.apple.com/us/music-video/freak/1502628195"
            },
        ]
    },
    {
        artist: "Tyga, YG & Lil Wayne",
        birthday: [{ month: "November", day: 19, year: 1989 }, { month: "March", day: 9, year: 1990 }, { month: "September", day: 27, year: 1982 }],
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
             {
                title: "Been Thinking (Official Music Video)",
                src: "https://embed.music.apple.com/us/music-video/been-thinking-official-music-video/1667049518"
            },
            {
                title: "Overdue (feat. DJ Lag & Kooldrink)",
                src: "https://embed.music.apple.com/us/music-video/overdue-feat-dj-lag-kooldrink/1587221495"
            },
            {
                title: "Bliss",
                src: "https://embed.music.apple.com/us/music-video/bliss/1817679955"
            },
             {
                title: "IS IT",
                src: "https://embed.music.apple.com/us/music-video/is-it/1825967295"
            },
        ]
    },
    {
        artist: "Tyla & Sean Paul",
        birthday: [{ month: "January", day: 30, year: 2002 }, { month: "January", day: 9, year: 1973 }],
        songs: [
            {
                title: "PUSH 2 START (REMIX)",
                src: "https://embed.music.apple.com/us/music-video/push-2-start-remix/1799755267"
            },
        ]
    },
    {
        artist: "Tyla & Travis Scott",
        birthday: [{ month: "January", day: 30, year: 2002 }, { month: "April", day: 30, year: 1991 }],
        songs: [
            {
                title: "Water (Remix)",
                src: "https://embed.music.apple.com/us/music-video/water-remix/1736814625"
            },
        ]
    },
    {
        artist: "Tyla, Gunna & Skillibeng",
        birthday: [{ month: "January", day: 30, year: 2002 }, { month: "June", day: 14, year: 1993 }, { month: "December", day: 23, year: 1996 }],
        songs: [
            {
                title: "Jump",
                src: "https://embed.music.apple.com/us/music-video/jump/1747256670"
            },
        ]
    },
    {
        artist: "Tyler James Williams & Coco Jones",
        birthday: [{ month: "October", day: 9, year: 1992 }, { month: "January", day: 4, year: 1998 }],
        songs: [
            {
                title: "Guardian Angel",
                src: "https://embed.music.apple.com/us/music-video/guardian-angel/1445725270"
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
        artist: "UMI",
        birthday: [{ month: "February", day: 9, year: 1999 }],
        songs: [
            {
                title: "10AM",
                src: "https://embed.music.apple.com/us/music-video/10am/1822864537"
            },
        ]
    },
    {
        artist: "UMI & 6LACK",
        birthday: [{ month: "February", day: 9, year: 1999 }, { month: "June", day: 22, year: 1992 }],
        songs: [
            {
                title: "HARD TRUTHS",
                src: "https://embed.music.apple.com/us/music-video/hard-truths/1812996073"
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
        artist: "USHER, Summer Walker & 21 Savage",
        birthday: [{ month: "October", day: 14, year: 1978 }, { month: "April", day: 11, year: 1996 }, { month: "October", day: 22, year: 1992 }],
        songs: [
            {
                title: "Good Good",
                src: "https://embed.music.apple.com/us/music-video/good-good/1703418803"
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
        artist: "Verse Simmonds",
        birthday: [{ month: "September", day: 4, year: 1980 }],
        songs: [
            {
                title: "Bedroom Bully (feat. Jada Kingdom)",
                src: "https://embed.music.apple.com/us/music-video/bedroom-bully-feat-jada-kingdom/1539138280"
            },
            {
                title: "Boo Thang (feat. Kelly Rowland)",
                src: "https://embed.music.apple.com/us/music-video/boo-thang-feat-kelly-rowland/1445706025"
            },
        ]
    },
    {
        artist: "Victoria Monét",
        birthday: [{ month: "May", day: 1, year: 1989 }],
        songs: [
            {
                title: "On My Mama",
                src: "https://embed.music.apple.com/us/music-video/on-my-mama/1702228381"
            },
            {
                title: "Party Girls (feat. Buju Banton)",
                src: "https://embed.music.apple.com/us/music-video/party-girls-feat-buju-banton/1687202662"
            },
        ]
    },
    {
        artist: "Victoria Monét & USHER",
        birthday: [{ month: "May", day: 1, year: 1989 }, { month: "October", day: 14, year: 1978 }],
        songs: [
            {
                title: "SOS (Sex on Sight) [Visualizer]",
                src: "https://embed.music.apple.com/us/music-video/sos-sex-on-sight-visualizer/1766595932"
            },
        ]
    },
    {
        artist: "Vybz Kartel",
        birthday: [{ month: "January", day: 7, year: 1976 }],
        songs: [
            {
                title: "Str8 Vybz",
                src: "https://embed.music.apple.com/us/music-video/str8-vybz/1789719410"
            },
            {
                title: "Ramp Ruff",
                src: "https://embed.music.apple.com/us/music-video/ramp-ruff/1631360377"
            },
            {
                title: "Thickiana",
                src: "https://embed.music.apple.com/us/music-video/thickiana/1514194705"
            },
            {
                title: "Up Top Gaza",
                src: "https://embed.music.apple.com/us/music-video/up-top-gaza/1507855633"
            },
            {
                title: "Go Go Wine",
                src: "https://embed.music.apple.com/us/music-video/go-go-wine/1529858643"
            },
        ]
    },
    {
        artist: "Wale",
        birthday: [{ month: "September", day: 21, year: 1984 }],
        songs: [
            {
                title: "Poke It Out (feat. J. Cole)",
                src: "https://embed.music.apple.com/us/music-video/poke-it-out-feat-j-cole/1588942746"
            },
        ]
    },
    {
        artist: "Walk Off the Earth",
        songs: [
            {
                title: "Lighters Up (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/lighters-up-feat-snoop-dogg/1492824543"
            },
        ]
    },
    {
        artist: "Wayne Wonder",
        birthday: [{ month: "July", day: 26, year: 1972 }],
        songs: [
            {
                title: "Jah Lift Me Up",
                src: "https://embed.music.apple.com/us/music-video/jah-lift-me-up/1754194150"
            },
            {
                title: "Jah Will Protect Me",
                src: "https://embed.music.apple.com/us/music-video/jah-will-protect-me/1720832181"
            },
        ]
    },
    {
        artist: "Wayne Wonder & DJ Kamar",
        songs: [
            {
                title: "Tun Up",
                src: "https://embed.music.apple.com/us/music-video/tun-up/1758109546"
            },
        ]
    },
    {
        artist: "WC, Snoop Dogg & Nate Dogg",
        songs: [
            {
                title: "The Streets",
                src: "https://embed.music.apple.com/us/music-video/the-streets/1446731722"
            },
        ]
    },
    {
        artist: "WeddingCake, Snoop Dogg & Heidi Klum",
        songs: [
            {
                title: "Chai Tea with Heidi",
                src: "https://embed.music.apple.com/us/music-video/chai-tea-with-heidi/1612862115"
            },
        ]
    },
    {
        artist: "Wet Leg",
        songs: [
            {
                title: "CPR",
                src: "https://embed.music.apple.com/us/music-video/cpr/1816888687"
            },
        ]
    },
    {
        artist: "Vybz Kartel & Likkle Vybz",
        birthday: [{ month: "January", day: 7, year: 1976 } , { month: "April", day: 18, year: 2003 }],
        songs: [
            {
                title: "Lemonade",
                src: "https://embed.music.apple.com/us/music-video/lemonade/1786393858"
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
            {
                title: "Love Is (The Concert for a New South Africa [Durban] - LIVE)",
                src: "https://embed.music.apple.com/us/music-video/love-is-the-concert-for-a-new-south-africa-durban-live/1778122021"
            },
            {
                title: "I Have Nothing (The Concert for a New South Africa [Durban] - LIVE)",
                src: "https://embed.music.apple.com/us/music-video/i-have-nothing-the-concert-for-a-new-south-africa-durban-live/1772732639"
            },
            {
                title: "Love Will Save the Day (The Concert for a New South Africa [Durban] - LIVE)",
                src: "https://embed.music.apple.com/us/music-video/love-will-save-the-day-the-concert-for-a-new/1768174553"
            },
            {
                title: "All at Once (Live on Wogan 1986)",
                src: "https://embed.music.apple.com/us/music-video/all-at-once-live-on-wogan-1986/1738296052"
            },
            {
                title: "It's Not Right But It's Okay (Live on Top Of The Pops 1999)",
                src: "https://embed.music.apple.com/us/music-video/its-not-right-but-its-okay-live-on-top-of-the-pops-1999/1714325834"
            },
            {
                title: "I Wanna Dance with Somebody (Who Loves Me) [Live on Top Of The Pops, 1987]",
                src: "https://embed.music.apple.com/us/music-video/i-wanna-dance-with-somebody-who-loves-me-live-on-top/1665270921"
            },
            {
                title: "My Love Is Your Love (Live on Top Of The Pops 1999)",
                src: "https://embed.music.apple.com/us/music-video/my-love-is-your-love-live-on-top-of-the-pops-1999/1642806824"
            },
            {
                title: "Saving All My Love for You (Live on Wogan 1985)",
                src: "https://embed.music.apple.com/us/music-video/saving-all-my-love-for-you-live-on-wogan-1985/1640353911"
            },
            {
                title: "Where Do Broken Hearts Go (Live on Wogan 1988)",
                src: "https://embed.music.apple.com/us/music-video/where-do-broken-hearts-go-live-on-wogan-1988/1629762597"
            },
            {
                title: "I'm Your Baby Tonight (Live from Welcome Home Heroes)",
                src: "https://embed.music.apple.com/us/music-video/im-your-baby-tonight-live-from-welcome-home-heroes/1538901736"
            },
            {
                title: "I Wanna Dance with Somebody (Live from the Arista Records 15th Anniversary Concert)",
                src: "https://embed.music.apple.com/us/music-video/i-wanna-dance-with-somebody-live-from-the-arista/1538609577"
            },
            {
                title: "All the Man That I Need (Live from Welcome Home Heroes with Whitney Houston)",
                src: "https://embed.music.apple.com/us/music-video/all-the-man-that-i-need-live-from-welcome-home-heroes/1285775045"
            },
            {
                title: "You Give Good Love (Live from The Tonight Show Starring Johnny Carson)",
                src: "https://embed.music.apple.com/us/music-video/you-give-good-love-live-from-the-tonight-show/1538603291"
            },
            {
                title: "You Give Good Love (Remastered)",
                src: "https://embed.music.apple.com/us/music-video/you-give-good-love-remastered/577178766"
            },
            {
                title: "Million Dollar Bill",
                src: "https://embed.music.apple.com/us/music-video/million-dollar-bill/332564018"
            },
            {
                title: "Could I Have This Kiss Forever (with Enrique Iglesias)",
                src: "https://embed.music.apple.com/us/music-video/could-i-have-this-kiss-forever-with-enrique-iglesias/1279672463"
            },
            {
                title: "I Belong To You",
                src: "https://embed.music.apple.com/us/music-video/i-belong-to-you/1279702684"
            },
            {
                title: "I'm Every Woman",
                src: "https://embed.music.apple.com/us/music-video/im-every-woman/328071947"
            },
            {
                title: "One Moment In Time",
                src: "https://embed.music.apple.com/us/music-video/one-moment-in-time/1437689848"
            },
            {
                title: "One of Those Days",
                src: "https://embed.music.apple.com/us/music-video/one-of-those-days/684843714"
            },
            {
                title: "I'm Your Baby Tonight",
                src: "https://embed.music.apple.com/us/music-video/im-your-baby-tonight/281281698"
            },
            {
                title: "My Love Is Your Love",
                src: "https://embed.music.apple.com/us/music-video/my-love-is-your-love/277641466"
            },
            {
                title: "It's Not Right But It's Okay",
                src: "https://embed.music.apple.com/us/music-video/its-not-right-but-its-okay/327361994"
            },
            {
                title: "Heartbreak Hotel (feat. Faith Evans & Kelly Price)",
                src: "https://embed.music.apple.com/us/music-video/heartbreak-hotel-feat-faith-evans-kelly-price/1366602074"
            },
            {
                title: "I Believe in You and Me (Live on The Lottery 1997)",
                src: "https://embed.music.apple.com/us/music-video/i-believe-in-you-and-me-live-on-the-lottery-1997/1735793697"
            },
            {
                title: "I Believe In You and Me",
                src: "https://embed.music.apple.com/us/music-video/i-believe-in-you-and-me/279018592"
            },
            {
                title: "Exhale (Shoop Shoop)",
                src: "https://embed.music.apple.com/us/music-video/exhale-shoop-shoop/277641014"
            },
            {
                title: "I'm Every Woman (Live from The Concert for a New South Africa)",
                src: "https://embed.music.apple.com/us/music-video/im-every-woman-live-from-the-concert-for-a-new-south-africa/1538601068"
            },
            {
                title: "Run to You",
                src: "https://embed.music.apple.com/us/music-video/run-to-you/328071843"
            },
            {
                title: "I Have Nothing",
                src: "https://embed.music.apple.com/us/music-video/i-have-nothing/328073256"
            },
            {
                title: "Queen of the Night",
                src: "https://embed.music.apple.com/us/music-video/queen-of-the-night/328071676"
            },
            {
                title: "I Will Always Love You",
                src: "https://embed.music.apple.com/us/music-video/i-will-always-love-you/504263989"
            },
            {
                title: "Miracle",
                src: "https://embed.music.apple.com/us/music-video/miracle/288610348"
            },
            {
                title: "All the Man That I Need",
                src: "https://embed.music.apple.com/us/music-video/all-the-man-that-i-need/284014544"
            },
            {
                title: "Where Do Broken Hearts Go",
                src: "https://embed.music.apple.com/us/music-video/where-do-broken-hearts-go/277342382"
            },
            {
                title: "So Emotional",
                src: "https://embed.music.apple.com/us/music-video/so-emotional/278338149"
            },
            {
                title: "How Will I Know (Live on BRIT Awards 1987)",
                src: "https://embed.music.apple.com/us/music-video/how-will-i-know-live-on-brit-awards-1987/1732142278"
            },
            {
                title: "Greatest Love of All",
                src: "https://embed.music.apple.com/us/music-video/greatest-love-of-all/278170476"
            },
            {
                title: "How Will I Know",
                src: "https://embed.music.apple.com/us/music-video/how-will-i-know/328071887"
            },
            {
                title: "Saving All My Love for You",
                src: "https://embed.music.apple.com/us/music-video/saving-all-my-love-for-you/277343607"
            },
        ]
    },
    {
        artist: "Whitney Houston & CeCe Winans",
        birthday: [{ month: "August", day: 9, year: 1963 }, { month: "October", day: 8, year: 1964 }],
        songs: [
            {
                title: "Count On Me (from Waiting to Exhale)",
                src: "https://embed.music.apple.com/us/music-video/count-on-me-from-waiting-to-exhale/1437690097"
            },
        ]
    },
    {
        artist: "Whitney Houston & Jordin Sparks",
        birthday: [{ month: "August", day: 9, year: 1963 }, { month: "December", day: 22, year: 1989 }],
        songs: [
            {
                title: "Celebrate (From 'Sparkle')",
                src: "https://embed.music.apple.com/us/music-video/celebrate-from-sparkle/1281289589"
            },
        ]
    },
    {
        artist: "Will Smith & Big Sean",
        birthday: [{ month: "September", day: 25, year: 1968 }, { month: "March", day: 25, year: 1988 }],
        songs: [
            {
                title: "BEAUTIFUL SCARS (feat. OBanga)",
                src: "https://embed.music.apple.com/us/music-video/beautiful-scars-feat-obanga/1794090542"
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
            {
                title: "Scream & Shout (feat. Britney Spears, Hit-Boy, Waka Flocka Flame, Lil Wayne & Diddy) [Remix] [Remix]",
                src: "https://embed.music.apple.com/us/music-video/scream-shout-feat-britney-spears-hit-boy-waka-flocka/1445014267"
            },
            {
                title: "Scream & Shout (feat. Britney Spears)",
                src: "https://embed.music.apple.com/us/music-video/scream-shout-feat-britney-spears/1422696277"
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
            {
                title: "You and Your Friends (feat. Snoop Dogg & Ty Dolla $ign)",
                src: "https://embed.music.apple.com/us/music-video/you-and-your-friends-feat-snoop-dogg-ty-dolla-%24ign/1010869370"
            },
            {
                title: "Black and Yellow (feat. Juicy J, Snoop Dogg & T-Pain) [G-Mix Video]",
                src: "https://embed.music.apple.com/us/music-video/black-and-yellow-feat-juicy-j-snoop-dogg-t-pain-g-mix-video/418044421"
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
            {
                title: "Kese (Dance)",
                src: "https://embed.music.apple.com/us/music-video/kese-dance/1799858152"
            },
        ]
    },
     {
        artist: "Wolf Alice",
        songs: [
            {
                title: "Bloom Baby Bloom",
                src: "https://embed.music.apple.com/us/music-video/bloom-baby-bloom/1813862739"
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
        birthday: [{ month: "January", day: 17, year: 2002 }, { month: "June", day: 11, year: 2002 }, { month: "June", day: 19, year: 2002 }, { month: "December", day: 18, year: 2002 }, { month: "November", day: 28, year: 2004 }, { month: "August", day: 10, year: 2005 }, { month: "December", day: 6, year: 2005 }],
        songs: [
            {
                title: "HOWLING",
                src: "https://embed.music.apple.com/us/music-video/howling/1779006172"
            },
            {
                title: "IYKYK",
                src: "https://embed.music.apple.com/us/music-video/iykyk/1773480118"
            },
            {
                title: "WOKE UP",
                src: "https://embed.music.apple.com/us/music-video/woke-up/1747262281"
            },
            {
                title: "WINTER WITHOUT YOU",
                src: "https://embed.music.apple.com/us/music-video/winter-without-you/1720684254"
            },
            {
                title: "NEW DANCE",
                src: "https://embed.music.apple.com/us/music-video/new-dance/1703750173"
            },
            {
                title: "TGIF",
                src: "https://embed.music.apple.com/us/music-video/tgif/1700669647"
            },
        ]
    },
    {
        artist: "Xscape",
        songs: [
            {
                title: "Can't Hang",
                src: "https://embed.music.apple.com/us/music-video/cant-hang/253987574"
            },
        ]
    },
     {
        artist: "Yeat",
        birthday: [{ month: "February", day: 26, year: 2000 }],
        songs: [
            {
                title: "Breathe",
                src: "https://embed.music.apple.com/us/music-video/breathe/1737537616"
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
            {
                title: "Scared Money (feat. J. Cole & Moneybagg Yo)",
                src: "https://embed.music.apple.com/us/music-video/scared-money-feat-j-cole-moneybagg-yo/1607908984"
            },
             {
                title: "Pop It, Shake It (feat. DJ Mustard)",
                src: "https://embed.music.apple.com/us/music-video/pop-it-shake-it-feat-dj-mustard/1445005794"
            },
        ]
    },
    {
        artist: "YG & Mozzy",
        birthday: [{ month: "March", day: 9, year: 1990 }, { month: "June", day: 24, year: 1987 }],
        songs: [
            {
                title: "Vibe With You (feat. Ty Dolla $ign)",
                src: "https://embed.music.apple.com/us/music-video/vibe-with-you-feat-ty-dolla-%24ign/1572503966"
            },
            {
                title: "Bompton to Oak Park",
                src: "https://embed.music.apple.com/us/music-video/bompton-to-oak-park/1564290834"
            },
        ]
    },
    {
        artist: "YG, Mozzy & Blxst",
        birthday: [{ month: "March", day: 9, year: 1990 }, { month: "June", day: 24, year: 1987 }, { month: "September", day: 17, year: 1992 }],
        songs: [
            {
                title: "Perfect Timing",
                src: "https://embed.music.apple.com/us/music-video/perfect-timing/1565823538"
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
        artist: "YK Osiris",
        birthday: [{ month: "September", day: 7, year: 1998 }],
        songs: [
            {
                title: "Ride (feat. Kehlani)",
                src: "https://embed.music.apple.com/us/music-video/ride-feat-kehlani/1482040011"
            },
        ]
    },
    {
        artist: "YNW BSlime",
        songs: [
            {
                title: "Citi Trends (feat. NLE Choppa)",
                src: "https://embed.music.apple.com/us/music-video/citi-trends-feat-nle-choppa/1590597364"
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
            {
                title: "King Shit (feat. T.I.)",
                src: "https://embed.music.apple.com/us/music-video/king-shit-feat-t-i/724704858" 
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
        artist: "Young Nudy",
        birthday: [{ month: "December", day: 17, year: 1992 }],
        songs: [
            {
                title: "Peaches & Eggplants (feat. Latto & Sexyy Red) [Official Video]",
                src: "https://embed.music.apple.com/us/music-video/peaches-eggplants-feat-latto-sexyy-red-official-video/1709543906"
            },
        ]
    },
    {
        artist: "YoungBoy Never Broke Again",
        birthday: [{ month: "October", day: 20, year: 1999 }],
        songs: [
            {
                title: "Callin (feat. Snoop Dogg)",
                src: "https://embed.music.apple.com/us/music-video/callin-feat-snoop-dogg/1531848956"
            },
        ]
    },
      {
        artist: "Young Thug",
        birthday: [{ month: "August", day: 16, year: 1991 }],
        songs: [
            {
                title: "Money On Money (feat. Future)",
                src: "https://embed.music.apple.com/us/music-video/money-on-money-feat-future/1810775301"
            },
        ]
    },
    {
        artist: "Yummy Bingham",
        birthday: [{ month: "January", day: 7, year: 1986 }],
        songs: [
            {
                title: "Come Get It (feat. Jadakiss)",
                src: "https://embed.music.apple.com/us/music-video/come-get-it-feat-jadakiss/1445727460"
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
        birthday: [{ month: "April", day: 4, year: 1994 }, { month: "May", day: 5, year: 1989 }, { month: "September", day: 12, year: 1977 }],
        songs: [
            {
                title: "Baddest",
                src: "https://embed.music.apple.com/us/music-video/baddest/1575637463"
            },
        ]
    },
    {
        artist: "Yung Bleu & Kehlani",
        birthday: [{ month: "April", day: 4, year: 1994 }, { month: "April", day: 24, year: 1995 }],
        songs: [
            {
                title: "Beautiful Lies",
                src: "https://embed.music.apple.com/us/music-video/beautiful-lies/1598408409"
            },
        ]
    },
    {
        artist: "Yung L.A., Young Dro & T.I.",
        birthday: [{ month: "March", day: 26, year: 1986 }, { month: "January", day: 15, year: 1979 }, { month: "September", day: 25, year: 1980 }],
        songs: [
            {
                title: "Ain't I",
                src: "https://embed.music.apple.com/us/music-video/aint-i/1446737074" 
            },
        ]
    },
    {
        artist: "Yung Wun",
        birthday: [{ month: "May", day: 5, year: 1982 }],
        songs: [
            {
                title: "Tear It Up (feat. DMX, Lil' Flip & David Banner) [Radio Edit]",
                src: "https://embed.music.apple.com/us/music-video/tear-it-up-feat-dmx-lil-flip-david-banner-radio-edit/1406567725"
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
            {
                title: "The Healing (Venus Pawn Shop Sessions)",
                src: "https://embed.music.apple.com/us/music-video/the-healing-venus-pawn-shop-sessions/1735823975"
            },
            {
                title: "You Love Who You Love (Venus Pawn Shop Sessions)",
                src: "https://embed.music.apple.com/us/music-video/you-love-who-you-love-venus-pawn-shop-sessions/1733549209"
            },
            {
                title: "Can't Tame Her (Venus Pawn Shop Sessions)",
                src: "https://embed.music.apple.com/us/music-video/cant-tame-her-venus-pawn-shop-sessions/1732372020"
            },
            {
                title: "Never Forget You (Orchestral Version - Performance Video)",
                src: "https://embed.music.apple.com/us/music-video/never-forget-you-orchestral-version-performance-video/1573480351"
            },
            {
                title: "Ruin My Life (Orchestral Version - Performance Video)",
                src: "https://embed.music.apple.com/us/music-video/ruin-my-life-orchestral-version-performance-video/1573309240"
            },
            {
                title: "Talk About Love (Live from Good Morning America)",
                src: "https://embed.music.apple.com/us/music-video/talk-about-love-live-from-good-morning-america/1557487636"
            },
            {
                title: "Talk About Love (Performance Music Video)",
                src: "https://embed.music.apple.com/us/music-video/talk-about-love-performance-music-video/1557813594"
            },
            {
                title: "Look What You've Done (Performance Music Video)",
                src: "https://embed.music.apple.com/us/music-video/look-what-youve-done-performance-music-video/1557377926"
            },
            {
                title: "WOW",
                src: "https://embed.music.apple.com/us/music-video/wow/1557813334"
            },
            {
                title: "I Need Love",
                src: "https://embed.music.apple.com/us/music-video/i-need-love/1557676571"
            },
            {
                title: "Love Me Land",
                src: "https://embed.music.apple.com/us/music-video/love-me-land/1557752323"
            },
            {
                title: "Right Here",
                src: "https://embed.music.apple.com/us/music-video/right-here/1557672067"
            },
            {
                title: "Poster Girl",
                src: "https://embed.music.apple.com/us/music-video/poster-girl/1557694199"
            },
            {
                title: "Ruin My Life",
                src: "https://embed.music.apple.com/us/music-video/ruin-my-life/1557696629"
            },
            {
                title: "Talk About Love (feat. Young Thug)",
                src: "https://embed.music.apple.com/us/music-video/talk-about-love-feat-young-thug/1547712010"
            },
            {
                title: "WOW",
                src: "https://embed.music.apple.com/us/music-video/wow/1536169094"
            },
            {
                title: "Love Me Land (Live from Gröna Lund)",
                src: "https://embed.music.apple.com/us/music-video/love-me-land-live-from-gr%C3%B6na-lund/1526485783"
            },
            {
                title: "Uncover",
                src: "https://embed.music.apple.com/us/music-video/uncover/960095606"
            },
            {
                title: "Pretty Ugly",
                src: "https://embed.music.apple.com/us/music-video/pretty-ugly/1809855283"
            },
             {
                title: "Midnight Sun",
                src: "https://embed.music.apple.com/us/music-video/midnight-sun/1822361454"
            },
        ]
    },
    {
        artist: "Zara Larsson & David Guetta",
        birthday: [{ month: "December", day: 16, year: 1997 }, { month: "November", day: 7, year: 1967 }],
        songs: [
            {
                title: "On My Love",
                src: "https://embed.music.apple.com/us/music-video/on-my-love/1707089724"
            },
            {
                title: "On My Love (Venus Pawn Shop Sessions)",
                src: "https://embed.music.apple.com/us/music-video/on-my-love-venus-pawn-shop-sessions/1734698254"
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
            {
                title: "Lose My Cool (feat. NLE Choppa)",
                src: "https://embed.music.apple.com/us/music-video/lose-my-cool-feat-nle-choppa/1598606064"
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
            {
                title: "Quarantine Thick (feat. Latto)",
                src: "https://embed.music.apple.com/us/music-video/quarantine-thick-feat-latto/1539010648"
            },
            {
                title: "It's a Vibe (feat. Ty Dolla $ign, Trey Songz & Jhené Aiko)",
                src: "https://embed.music.apple.com/us/music-video/its-a-vibe-feat-ty-dolla-%24ign-trey-songz-jhen%C3%A9-aiko/1444845168"
            },
        ]
    },
    {
        artist: "2 Chainz, Lil Wayne & USHER",
        birthday: [{ month: "September", day: 12, year: 1977 }, { month: "September", day: 27, year: 1982 }, { month: "October", day: 14, year: 1978 }],
        songs: [
            {
                title: "Transparency",
                src: "https://embed.music.apple.com/us/music-video/transparency/1716804527"
            },
        ]
    },
      {
        artist: "2 Chainz, Ronald Isley & The Isley Brothers",
        songs: [
            {
                title: "THE ATL EXPERIENCE",
                src: "https://embed.music.apple.com/us/music-video/the-atl-experience/1812522614"
            },
        ]
    },
     {
        artist: "2 Chainz & Ne-Yo",
        birthday: [{ month: "September", day: 12, year: 1977 }, { month: "October", day: 18, year: 1979 }],
        songs: [
            {
                title: "NOT THE SAME",
                src: "https://embed.music.apple.com/us/music-video/not-the-same/1819108232"
            },
        ]
    },
     {
        artist: "2 Chainz & Lil Yachty",
        birthday: [{ month: "September", day: 12, year: 1977 }, { month: "August", day: 23, year: 1997 }],
        songs: [
            {
                title: "Sista Wives",
                src: "https://embed.music.apple.com/us/music-video/sista-wives/1814759976"
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
            {
                title: "How Do U Want It (feat. K-Ci & JoJo)",
                src: "https://embed.music.apple.com/us/music-video/how-do-u-want-it-feat-k-ci-jojo/1715044991"
            },
            {
                title: "I Wonder If Heaven Got a Ghetto",
                src: "https://embed.music.apple.com/us/music-video/i-wonder-if-heaven-got-a-ghetto/1445868286"
            },
            {
                title: "California Love (feat. Dr. Dre)",
                src: "https://embed.music.apple.com/us/music-video/california-love-feat-dr-dre/1715553050"
            },
            {
                title: "Letter 2 My Unborn",
                src: "https://embed.music.apple.com/us/music-video/letter-2-my-unborn/1445892373"
            },
            {
                title: "If My Homie Calls",
                src: "https://embed.music.apple.com/us/music-video/if-my-homie-calls/1445863453"
            },
            {
                title: "Never Call U Bitch Again (Live) [feat. Outlawz]",
                src: "https://embed.music.apple.com/us/music-video/never-call-u-bitch-again-live-feat-outlawz/382584382"
            },
            {
                title: "Troublesome '96 (feat. Outlawz) [Live]",
                src: "https://embed.music.apple.com/us/music-video/troublesome-96-feat-outlawz-live/382584473"
            },
            {
                title: "2 of Americaz Most Wanted (Live)",
                src: "https://embed.music.apple.com/us/music-video/2-of-americaz-most-wanted-live/349460357"
            },
           
        ]
    },
    {
        artist: "2Pac featuring T.I. & Ashanti",
        birthday: [{ month: "June", day: 16, year: 1971 }, { month: "September", day: 25, year: 1980 },{ month: "October", day: 13, year: 1980 }],
        songs: [
            {
                title: "Pac's Life (feat. Ashanti & T.I.)",
                src: "https://embed.music.apple.com/us/music-video/pacs-life-feat-ashanti-t-i/1445852646" 
            },
        ]
    },
     {
        artist: "21 Lil Harold & 21 Savage",
        songs: [
            {
                title: "Nookie (Pu$$y) [feat. Sexyy Red]",
                src: "https://embed.music.apple.com/us/music-video/nookie-pu%24%24y-feat-sexyy-red/1823105629"
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
        artist: "3LW featuring Jermaine Dupri",
        songs: [
            {
                title: "Feelin' You",
                src: "https://embed.music.apple.com/us/music-video/feelin-you/212242119"
            },
        ]
    },
    {
        artist: "450 & NLE Choppa",
        songs: [
            {
                title: "Bad Gyal Remix",
                src: "https://embed.music.apple.com/us/music-video/bad-gyal-remix/1751836044"
            },
        ]
    },
    {
        artist: "4batz & Lil Baby",
        birthday: [{ month: "November", day: 5, year: 2003 }, { month: "December", day: 3, year: 1994 }],
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
                title: "In da Club (International Version) [International Version]",
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
            {
                title: "Chase The Paper (feat. Prodigy, Kidd Kidd & Styles P)",
                src: "https://embed.music.apple.com/us/music-video/chase-the-paper-feat-prodigy-kidd-kidd-styles-p/1445317055"
            },
        ]
    },
    {
        artist: "50 Cent & Ne-Yo",
        birthday: [{ month: "July", day: 6, year: 1975 }, { month: "October", day: 18, year: 1979 }],
        songs: [
            {
                title: "Baby By Me (Edited Version)",
                src: "https://embed.music.apple.com/us/music-video/baby-by-me-edited-version/1446735071"
            },
        ]
    },
    {
        artist: "50 Cent & Olivia",
        birthday: [{ month: "July", day: 6, year: 1975 }, { month: "February", day: 15, year: 1981 }],
        songs: [
            {
                title: "Candy Shop (Director's Version)",
                src: "https://embed.music.apple.com/us/music-video/candy-shop-directors-version/1445737548"
            },
        ]
    },
    {
        artist: "50 Cent featuring Mobb Deep",
        birthday: [{ month: "July", day: 6, year: 1975 },{ month: "May", day: 21, year: 1974 }, { month: "November", day: 2, year: 1974 }],
        songs: [
            {
                title: "Outta Control (Remix) [Alternate Version]",
                src: "https://embed.music.apple.com/us/music-video/outta-control-remix-alternate-version/1445839479"
            },
        ]
    },
    {
        artist: "50 Cent featuring Nate Dogg",
        birthday: [{ month: "July", day: 6, year: 1975 }, { month: "August", day: 19, year: 1969 }],
        songs: [
            {
                title: "21 Questions",
                src: "https://embed.music.apple.com/us/music-video/21-questions/1445739540"
            },
        ]
    },
];


/////////////////////////////////////


function attachEventListeners() {
    const FINDtxt = document.querySelectorAll("._c_Apple-Music-Video-refresh");
    FINDtxt.forEach(x => x.addEventListener("click", () => {
        location.reload();
    }));
}

attachEventListeners();

const observer = new MutationObserver(() => {
    attachEventListeners();
});

observer.observe(document.body, { childList: true, subtree: true });


/////////////////////////////////////




//Function to log all artist names from appleMusic array
function logArtistNames(appleMusic) {
    const id_frame = document.getElementById('_id_frame');
    id_frame.innerHTML = ''; // Clears previous content
    appleMusic.forEach(artist => {
        const artistElement = document.createElement('p');
        artistElement.innerHTML = artist.artist;
        artistElement.addEventListener('click', () => {
            listArtistSongs(artist.songs);
        });
        id_frame.appendChild(artistElement);
    });
}

// Function to list all songs of an artist
///add event listener to each song element
function listArtistSongs(songs) {
    const id_frame = document.getElementById('_id_frame');
    id_frame.innerHTML = ''; // Clear previous content
    songs.forEach(song => { // List all songs
        const songElement = document.createElement('p');
        console.log(song.title);
        songElement.innerHTML = song.title;
        songElement.addEventListener('click', () => {
            // Code to handle song click event
            console.log(`Song clicked: ${song.title}`);
            // Call goToArtistSongPage when song is clicked
            goToArtistSongPage(song.src);
        });
        id_frame.appendChild(songElement);
    });
}


// Function to take user to an artist on the index.html page to a specific artist and a specific song when song is clicked on 
function goToArtistSongPage(src) {
    window.open(`../index.html?iframeSrc=${encodeURIComponent(src)}`, '_blank');
    console.log(src);
}


logArtistNames(appleMusic);



//////////////////////////////////////////////////////////////////

const scrollUpButtons = document.querySelectorAll('._c_Scroll-Up');
const scrollDownButtons = document.querySelectorAll('._c_Scroll-Down');

if (!id_frame) {
    console.error("id_frame element not found. Please check the selector or ensure the element exists in the DOM.");
}

let scrollInterval;
let isHolding = false;

function startScrolling(direction) {
    if (id_frame) {
        isHolding = true;
        scrollInterval = setInterval(() => {
            id_frame.scrollBy({ top: direction === 'up' ? -500 : 500, behavior: 'smooth' }); // Faster scrolling for holding
        }, 500); // Faster interval for holding
    }
}

function stopScrolling() {
    isHolding = false;
    clearInterval(scrollInterval);
}

scrollUpButtons.forEach(button => {
    button.addEventListener('mousedown', () => startScrolling('up'));
    button.addEventListener('mouseup', stopScrolling);
    button.addEventListener('mouseleave', stopScrolling); // Stop scrolling if the mouse leaves the button
    button.addEventListener('click', () => {
        if (!isHolding) id_frame.scrollBy({ top: -300, behavior: 'smooth' }); // Slower scroll for clicking
    });
});

scrollDownButtons.forEach(button => {
    button.addEventListener('mousedown', () => startScrolling('down'));
    button.addEventListener('mouseup', stopScrolling);
    button.addEventListener('mouseleave', stopScrolling); // Stop scrolling if the mouse leaves the button
    button.addEventListener('click', () => {
        if (!isHolding) id_frame.scrollBy({ top: 300, behavior: 'smooth' }); // Slower scroll for clicking
    });
});



// setInterval(() => {
//     const currentSecond = new Date().getSeconds();
//     document.documentElement.style.setProperty('--current-second', currentSecond);
// }, 1000);


//////////////////////////////////////////////////////////////////




function buttonClick(value) {
    const alphabet_number = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

    if (!alphabet_number.includes(value)) {
        return;
    }

    if (isNaN(value)) {
        // this is not a number
        handleLetter(value);
    } else {
        // this is a number
        handleNumber(value);
    }
}

function handleLetter(value) {
    const artists = appleMusic.filter((item) => item.artist.startsWith(value));
    const frame = document.getElementById("_id_frame");
    frame.innerHTML = ''; // Clear previous content
    if (artists.length > 0) {
        artists.forEach(artist => {
            const artistElement = document.createElement('p');
            artistElement.innerHTML = artist.artist;
            artistElement.addEventListener('click', () => listArtistSongs(artist.songs));
            frame.appendChild(artistElement);
        });
    } else {
        frame.innerHTML = ` <h4> not found <h4>`;
    }
}

function handleNumber(value) {
    const artists = appleMusic.filter((item) => item.artist.startsWith(Number(value)));
    const frame = document.getElementById("_id_frame");
    frame.innerHTML = ''; // Clear previous content
    if (artists.length > 0) {
        artists.forEach(artist => {
            const artistElement = document.createElement('p');
            artistElement.innerHTML = artist.artist;
            artistElement.addEventListener('click', () => listArtistSongs(artist.songs));
            frame.appendChild(artistElement);
        });
    } else {
        frame.innerHTML = ` <h4> not found <h4> `;
    }
}

function valueInit() {
    document.querySelector("._c_Apple-Music-grid").addEventListener("click", function (event) {
        let value = event.target.innerText;
        buttonClick(value);
    });
}

valueInit();



//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE
//SPECIAL THANKS TO MICROSOFT COPILOT FOR HELPING ME WITH THIS CODE

//ALSO SPECIAL THANKS TO GOOGLE.COM FOR HELPING ME WITH THIS CODE
//ALSO SPECIAL THANKS TO GOOGLE.COM FOR HELPING ME WITH THIS CODE
//ALSO SPECIAL THANKS TO GOOGLE.COM FOR HELPING ME WITH THIS CODE
//ALSO SPECIAL THANKS TO GOOGLE.COM FOR HELPING ME WITH THIS CODE
//ALSO SPECIAL THANKS TO GOOGLE.COM FOR HELPING ME WITH THIS CODE

//ALSO SPECIAL THANKS TO FrontendMasters.COM FOR Teaching ME HOW TO CODE
//ALSO SPECIAL THANKS TO FrontendMasters.COM FOR Teaching ME HOW TO CODE
//ALSO SPECIAL THANKS TO FrontendMasters.COM FOR Teaching ME HOW TO CODE
//ALSO SPECIAL THANKS TO FrontendMasters.COM FOR Teaching ME HOW TO CODE
//ALSO SPECIAL THANKS TO FrontendMasters.COM FOR Teaching ME HOW TO CODE

