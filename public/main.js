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
        clipUrl: "..."
      },
      {
        id: "dark-ages",
        title: "דיבוק",
        period: "ימי הביניים",
        desc: "יְמֵי הַבֵּינַיִם (בלטינית: Medium Aevum) הם תקופה במהלך ההיסטוריה האירופית שתחילתה עם סיום העת העתיקה וסופה עם הופעת הרנסאנס ותחילתה של העת החדשה. המונח הופיע לראשונה באיטליה במהלך המאה ה-15, לציון העידן שבין נפילתה של הקיסרות הרומית בשנת 476 במאה החמישית, עד 1492 שנת גילוי יבשת אמריקה במאה ה-15 (או התקופה הנוכחית, לטינית: praesens tempus).",
        clipUrl: "..."
      },
      {
        id: "enlightment",
        title: "משקולת",
        period: "עידן הנאורות",
        desc: "עידן הנאורות או עידן האורות (באנגלית: Age of Enlightenment) הוא כינוי לתנועה אינטלקטואלית באירופה, ששמה לעצמה למטרה לבסס מוסר, אסתטיקה וידע הנשענים על רציונליות והנחת יסוד לוגוצנטרית. מנהיגי התנועה ראו בעצמם אליטה אמיצה של אינטלקטואלים המובילים את העולם לעבר קידמה מתוך תקופה ארוכה של חוסר רציונליות, חוסר בגרות ועריצות, שהחלה בתקופת ימי הביניים, אותה כינו העת החשוכה. התנועה סיפקה את הבסיס הפילוסופי למהפכה האמריקאית ולמהפכה הצרפתית, כמו גם לעליית הקפיטליזם והבורגנות.",
        clipUrl: "..."
      },
      {
        id: "victorian",
        title: "מגיפה",
        period: "התקופה הוויקטוריאנית",
        desc: "התקופה הוויקטוריאנית (באנגלית: Victorian era) בבריטניה הייתה תקופת השיא במהפכה התעשייתית הבריטית ואף שיאה של האימפריה הבריטית. אף על פי שבדרך כלל המושג מתייחס לתקופת מלכותה של המלכה ויקטוריה, בין השנים 1837 ועד 1901, היסטוריונים אחדים סוברים כי התקופה הוויקטוריאנית – על פי מאפייניה הייחודיים מבחינה חברתית – התחילה עם קבלת חוק הרפורמה משנת 1832. לתקופה הוויקטוריאנית קדמה התקופה הג'ורג'יאנית ולאחריה באה התקופה האדוארדית.",
        clipUrl: "..."
      },
      {
        id: "modern-times",
        title: "זיכרון",
        period: "העידן המודרני",
        desc: "העת החדשה (או העידן המודרני), היא התקופה השלישית והנוכחית בתיקוף ההיסטוריה, על פי המקובל בהיסטוריוגרפיה המערבית. ראשיתה של העת החדשה נקבעה בחלק ניכר מההיסטוריוגרפיה המערבית בשנת 1492, השנה בה גילה קולומבוס את יבשת אמריקה.",
        clipUrl: "..."
      }
    ]
  };

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
    keyboard: true,
    transition: 'slide',
    center: false,
    overview: false
  });
  
  /**************
        MENU
  **************/
  
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
  
  /*
  $('.owl-carousel').owlCarousel({
    rtl: true,
    items: 1,
    nav: true,
    URLhashListener: true,
    startPosition: 'URLHash',
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    onInitialize: menuHighlight,
    onChanged: menuHighlight,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  });
    
  function menuHighlight(event) {
    $('.menu-item.active').removeClass('active');
    var activeSlideId = $('.owl-item.active section').attr('id');
    var respectiveMenuItem = '.menu-item a[href=#' + activeSlideId + ']';
    $('.menu-item a[href=#' + activeSlideId + ']').parent().addClass('active');
  }
  */
  
  /*****************************
      HACKY VIDEO INTERACTION
  *****************************/
  
  var playButton = '<button class="action play"><i class="fa fa-play fa-flip-horizontal"></i> נגן סרטון</button>'
  var videoStub = '<i class="action fa fa-circle-o-notch fa-spin"></i>';
  var nextButton = '<button class="action next">לסרטון הבא <i class="fa fa-arrow-right fa-flip-horizontal"></i></button>'
  
  $('.video')
    .on('click', '.action.play', function() {
      $(this).replaceWith(videoStub);
      $('i.fa-spin').wait(2500).replaceWith(nextButton);
    });
  $('.video')
    .on('click', '.action.next', function() {
      Reveal.next();
      $(this).replaceWith(playButton);
    });
});
