module['exports'] = function(options, callback) {

  var $ = this.$,
      self = this,
      resource = require('resource'),
      async = require('async'),
      html = require('html-lang'),
      creature = resource.use('creature'),
      forms = resource.use('forms'),
      space = resource.use('space');

  forms.generate({
    resource: 'creature',
    method: 'get',
    id: options.data.id
  }, function(err, result) {
    return callback(err, result);
  });
  /*
  // get the creature we are viewing
  creature.get(options.data.id, function(err, creatureInst) {
    if (err) { return callback(err); }

    // generate creature's html from "detailed" template
    $.root().html(html.render({
      'creatureName': creatureInst.name,
      'creatureName.href': "creature?id=" + creatureInst.id,
      'creatureDescription': creatureInst.description
    }, self.template));

    // list this creature's spaces
    space.view.get.index.present({
      data: {
        id: creatureInst.spaces,
        type: 'min'
      }
    }, function(err, result) {
      if (err) { return callback(err); }

      // append rendered space with part button to dom
      $('.creatureSpaces').append('<li>' + result + '</li>');

      // return
      return callback(null, $.html());
    });
  });
*/
};