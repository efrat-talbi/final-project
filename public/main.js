$(document).ready(function() {
  
  var content = {
    chapters:[
      {
        title: "הרחם המשוטט",
        period: "יוון העתיקה",
        desc: "...",
        clipUrl: "..."
      },
      {
        title: "דיבוק",
        period: "ימי הביניים",
        desc: "...",
        clipUrl: "..."
      },
      {
        title: "משקולת",
        period: "עידן הנאורות",
        desc: "...",
        clipUrl: "..."
      },
      {
        title: "מגיפה",
        period: "התקופה הויקטוריאנית",
        desc: "...",
        clipUrl: "..."
      },
      {
        title: "זיכרון",
        period: "העידן המודרני",
        desc: "...",
        clipUrl: "..."
      },
    ]
  }
  
  $('.owl-carousel').owlCarousel({
    rtl: true
  });
  
});
