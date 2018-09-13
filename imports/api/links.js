import { Metoer }   from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Mongo }    from 'meteor/mongo';
import shortid      from 'shortid';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
    Meteor.publish('links', function () {
        const userId = this.userId;
        return Links.find({ userId });
    });
}

Meteor.methods({
    'links.insert'(url) {
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        new SimpleSchema({
        url: {
            type: String,
            label: 'Your link',
            regEx: SimpleSchema.RegEx.Url
        }
        }).validate({ url });

        Links.insert({
            _id: shortid.generate(),
            url,
            userId: this.userId
        });
    }
});