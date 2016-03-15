var options = {
  thumbnailData: [{
    title: 'see tutorials',
    number: 42,
    header: 'learn react',
    description: 'react is fantastic new library for making fast, dynamic pages.',
    imageUrl:'http://formatjs.io/img/react.svg'
  },{
    title: 'see tutorials',
    number: 13,
    header: 'learn Gulp',
    description: 'Gulp will speed up your development workflow.',
    imageUrl:'http://brunch.io/images/others/gulp.png'
  }]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.target'));
