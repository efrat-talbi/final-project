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
        desc: "יוון העתיקה היא תקופה בהיסטוריה של יוון שנמשכה למעלה מאלף שנים במהלך העת העתיקה עד לעליית הנצרות ביוון. התרבות היוונית העתיקה ומורשתה נחשבת בעיני היסטוריונים רבים כערש התרבות המערבית אשר הייתה בעלת השפעה רבה על תרבות האימפריה הרומית ועל כלל התרבויות האירופאיות עד לימינו. ",
      },
      {
        id: "dark-ages",
        title: "דיבוק",
        period: "ימי הביניים",
        desc: "יְמֵי הַבֵּינַיִם (בלטינית: Medium Aevum) הם תקופה במהלך ההיסטוריה האירופית שתחילתה עם סיום העת העתיקה וסופה עם הופעת הרנסאנס ותחילתה של העת החדשה. המונח הופיע לראשונה באיטליה במהלך המאה ה-15, לציון העידן שבין נפילתה של הקיסרות הרומית בשנת 476 במאה החמישית, עד 1492 שנת גילוי יבשת אמריקה במאה ה-15 (או התקופה הנוכחית, לטינית: praesens tempus).",
      },
      {
        id: "enlightment",
        title: "משקולת",
        period: "עידן הנאורות",
        desc: "עידן הנאורות או עידן האורות (באנגלית: Age of Enlightenment) הוא כינוי לתנועה אינטלקטואלית באירופה, ששמה לעצמה למטרה לבסס מוסר, אסתטיקה וידע הנשענים על רציונליות והנחת יסוד לוגוצנטרית. מנהיגי התנועה ראו בעצמם אליטה אמיצה של אינטלקטואלים המובילים את העולם לעבר קידמה מתוך תקופה ארוכה של חוסר רציונליות, חוסר בגרות ועריצות, שהחלה בתקופת ימי הביניים, אותה כינו העת החשוכה. התנועה סיפקה את הבסיס הפילוסופי למהפכה האמריקאית ולמהפכה הצרפתית, כמו גם לעליית הקפיטליזם והבורגנות.",
      },
      {
        id: "victorian",
        title: "מגיפה",
        period: "התקופה הוויקטוריאנית",
        desc: "התקופה הוויקטוריאנית (באנגלית: Victorian era) בבריטניה הייתה תקופת השיא במהפכה התעשייתית הבריטית ואף שיאה של האימפריה הבריטית. אף על פי שבדרך כלל המושג מתייחס לתקופת מלכותה של המלכה ויקטוריה, בין השנים 1837 ועד 1901, היסטוריונים אחדים סוברים כי התקופה הוויקטוריאנית – על פי מאפייניה הייחודיים מבחינה חברתית – התחילה עם קבלת חוק הרפורמה משנת 1832. לתקופה הוויקטוריאנית קדמה התקופה הג'ורג'יאנית ולאחריה באה התקופה האדוארדית.",
      },
      {
        id: "modern-times",
        title: "זיכרון",
        period: "העידן המודרני",
        desc: "העת החדשה (או העידן המודרני), היא התקופה השלישית והנוכחית בתיקוף ההיסטוריה, על פי המקובל בהיסטוריוגרפיה המערבית. ראשיתה של העת החדשה נקבעה בחלק ניכר מההיסטוריוגרפיה המערבית בשנת 1492, השנה בה גילה קולומבוס את יבשת אמריקה.",
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
    transition: 'slide',
    center: false,
    overview: false,
    width: '100%',
    height: '100%',
    margin: 0
  });
  
  $('.slides').on('click', ' .next-chapter-btn', function (e) {
    Reveal.next();
  });
  
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
  
  Reveal.addEventListener( 'ready', function(event) {
    menuHighlight();
  });
  
  Reveal.addEventListener( 'slidechanged', function(event) {
    menuHighlight();
  });

  
  /************
      VIDEO
  ************/
  
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
  
  function resetActions() {
    $('.next-chapter-btn').addClass('hidden').removeClass('main-action sec-action');
    $('.open-video-btn').add('main-action').removeClass('sec-action');
  }
  
  // Handling slide changes
  
  $('.slide').on('slidechanged', function() {
    resetActions();
    var currentChapterId = $('.chapter.present').attr('id');
    var videoUrl = videosPath + currentChapterId + '.mp4';
    replaceVideoFile(videoUrl);
  });
  
  // Modal events trigger video behavior
  
  $('#video-player').on('shown.bs.modal', function (e) {
    $('#video-player video').get(0).play();
  });
  
  $('#video-player').on('hide.bs.modal', function (e) {
    $('#video-player video').get(0).pause();
  });
  
  // Video events re-order action buttons
  
  $('#video-player video').on('play', function (e) {
    $('.chapter.present .next-chapter-btn').removeClass('hidden').addClass('sec-action');
  })
  
  $('#video-player video').on('ended', function (e) {
    $('.chapter.present .open-video-btn').addClass('sec-action');
    $('.chapter.present .next-chapter-btn').removeClass('sec-action').addClass('main-action');
    $('#video-player').modal('hide');
  });
  
});
