$(document).ready(function() {
  
  /******************
        CONTENT
  ******************/
  
  var content = { 
    chapters: [
      {
        id: "ancient-greece",
        title: "הרחם המשוטט",
        period: "יוון העתיקה",
        desc: "את האזכור המוקדם ביותר להיסטריה נהוג לייחס לטקסטים ההיפוקרטים, שנחשבים לאבן היסוד של מדע הרפואה המודרני. היפוקרטס היה אמנם מדען, אבל זה לא הפך אותו לחף מפניות. כמו כל החברה היוונית סביבו, היפוקרטס הושפע מהתפיסה הרווחת של מהי אישה — מין מוטציה, גבר שהתקלקל. נקודת המוצא שלו הניחה שנשים אינן שוות ערך לגברים ולכן הגישה שלו לטיפול בנשים היתה שונה לחלוטין מהגישה לטיפול בגברים. בעוד לגבר הוא התייחס כמכלול של איברים, אם האישה היתה חולה היתה זו תמיד אשמת הרחם. אם אישה משתעלת, זה משום שהרחם נצמד לקיבה שלה, אם היא חווה לחץ בחזה הוא התיישב על הלב, וכן הלאה. הקו שהתווה היפוקרטס סלל את המסלול שליווה את רפואת הנשים במשך עידנים הלאה, ועד היום עולם הרפואה בפיגור משמעותי בכל הנוגע להבנת הגוף הנשי. ",
      },
      {
        id: "dark-ages",
        title: "כלי של השטן",
        period: "ימי הביניים",
        desc: "ימי הביניים של הנצרות התאפיינו בחדירה של הדת לכל היבטי החיים. וכך, ערכים נוצריים השתלטו גם על תחומי המדע והרפואה. התיאוריות ההיפקורטיות לא ננטשו, אלא הוכפפו למושגים מעולם הדת: טוהר וטומאה, חסד וחטא, אלוהים ושטן. התיאוריה על מחלת הרחם נלקחה צעד אחד קדימה — אישה אמנם חולה בגלל הרחם שלה, אבל הרחם חולה בגלל השטן. וכך, הפכו נשים לאויבות הציבור. כמאה אלף מהן הואשמו בכישוף והוצאו להורג.",
      },
      {
        id: "enlightment",
        title: "מחלה של השכל",
        period: "עידן הנאורות",
        desc: "תקופת הרנסנס הביאה למהפכה בכל תחומי הידע האנושי. תיאוריות דתיות ירדו מקרנן, ואת מקומן תפסו הגישה הרציונלית והחשיבה הביקורתית. גם בתחום הרפואה הושגה התקדמות רבה, אך בכל הנוגע להיסטריה, תיאוריה מטופשת אחת הוחלפה באחרת. אמנם היסטריה כבר לא נחשבה למחלה של הרחם, אלא למחלה של המוח, ולכן גם גברים עלולים ללקות בה. אך המוח של נשים חלש יותר, ולכן מועד יותר להיסטריה. ומדוע הוא חלש יותר? נכון, בגלל הרחם. ",
      },
      {
        id: "modern-times",
        title: "נשים הן משוגעות",
        period: "העידן המודרני",
        desc: "במאה ה-20, היסטריה חדלה להיות אבחנה רפואית. אלפי התסמינים שיוחסו בעבר להיסטריה זכו לאבחנת נפרדות כמחלות בזכות עצמם. ולמרות זאת, היסטריה היא עדיין חלק מחיינו היומיומיים. אנחנו כבר לא חושבים ברצינות שנשים נשלטות על-ידי הרחם שלהן, אבל עדיין יש לנו דעות קדומות לגבי יכולותיהן השכליות של נשים  — דעות נפוצות ומקובלות בחברה, שמונעות מנשים להגיע לשוויון אמיתי."
      }
    ]
  };
  
  var chapterList = content.chapters;

  /*********************
        HANDLEBARS
  *********************/
  
  // Takes an item’s array index and offsets it by 1
  Handlebars.registerHelper('chapterNumber', function(index) {
    return index + 1;
  });
  
  var chaptersSource   = $('#chapter-template').html();
  var menuSource   = $('#menu-template').html();
  
  var chaptersTemplate = Handlebars.compile(chaptersSource);
  var menuTemplate = Handlebars.compile(menuSource);
  
  $('.slides').html(chaptersTemplate(content));
  $('#menu').html(menuTemplate(content));
  
    
  /******************
        SLIDER
  ******************/
  
  Reveal.initialize({
    rtl: true,
    controls: false,
    touch: false,
    keyboard: false,
    progress: false,
    transition: 'slide',
    transitionSpeed: 'fast',
    backgroundTransition: 'slide',
    backgroundTransitionSpeed: 'slow',
    loop: true,
    center: false,
    overview: false,
    width: '100%',
    height: '100%',
    viewDistance: 6,
    margin: 0
  });
  
  $('.slides').on('click', '.next-chapter-btn, .start-btn, .back-to-start-btn', function (e) {
    Reveal.next();
  });
  
  Reveal.addEventListener( 'ready', function(e) {
    toggleNavbar();
    menuHighlight();
    loadCurrentVideo();
  });
  
  Reveal.addEventListener( 'slidechanged', function(e) {
    toggleNavbar();
    menuHighlight();
    resetActions();
    loadCurrentVideo();
  });
  
  /***************
       NAVBAR
  ***************/
  
  function toggleNavbar() {
    var isChapter = $('section.present').hasClass('chapter');
    if (isChapter) {
      $('.navbar').removeClass('hidden');
    }
    else {
      $('.navbar').addClass('hidden');
    }
  }
  
  
  /*************
       MENU
  *************/
  
  function menuHighlight() {
    // Remove existing highlight
    $('#menu li.present').removeClass('present');
    // Find present slide
    var presentSlideId = $('section.present').attr('id');
    var respectiveMenuItem = $('a[href="#/' + presentSlideId + '"]');
    $(respectiveMenuItem).parent().addClass('present');
  }

  
  /********************
      CHAPTER VIDEOS
  ********************/
  
  videojs('chapter-video', {
      width: '100%',
      height: '100%'
    }, function(){
    // Player (this) is initialized and ready.
  });
  
  // Auxilury vars and functions
  
  var videosPath = 'public/videos/';
  
  function replaceVideoFile(videoUrl) {
    videojs('chapter-video').src(videoUrl);
  }
  
  function loadCurrentVideo() {
    var currentChapterId = $('.chapter.present').attr('id');
    var videoUrl = videosPath + currentChapterId + '.mp4';
    replaceVideoFile(videoUrl);
  }
  
  function resetActions() {
    $('.next-chapter-btn').addClass('hidden').removeClass('main-action sec-action');
    $('.open-video-btn').add('main-action').removeClass('sec-action');
  }
  
  // Modal events trigger video behavior
  
  $('#video-player').on('shown.bs.modal', function (e) {
    $('#video-player video').get(0).play();
  });
  
  $('#video-player').on('hide.bs.modal', function (e) {
    $('#video-player video').get(0).pause();
  });
  
  // Video events configure action buttons
  
  $('#video-player video').on('play', function (e) {
    $('.chapter.present .next-chapter-btn').removeClass('hidden').addClass('sec-action');
  })
  
  $('#video-player video').on('ended', function (e) {
    $('.chapter.present .open-video-btn').addClass('sec-action');
    $('.chapter.present .next-chapter-btn').removeClass('sec-action').addClass('main-action');
    $('#video-player').modal('hide');
  });
  
});
