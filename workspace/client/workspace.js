Session.setDefault('input', '');

Template.body.helpers({
    input: function () {
        return Session.get('input');
    },
    output: function () {
        var input = Session.get('input');
        try {
            return grammar.parse(input);
        } catch (e) {
            return e;
        }
    },
    json: function (a) {
        return JSON.stringify(a, null, ' ');
    }

});
Template.registerHelper('fmt', function (date) {
    if(date) return date.format('YYYY.MM.DD HH:mm');
});

Template.body.events({
    'keyup input': function (e) {
        Session.set('input', e.target.value);
    }
});
