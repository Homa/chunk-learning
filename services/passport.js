const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

// when write test, it may think we have included multiple version
// of mongoose
const mongoose = require('mongoose');
const User = mongoose.model('users')

// create cookie to be saved in user's browser
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// read the cookie that has been sent by user's browser
passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(new GoogleStrategy(
	{
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback',
		proxy: true
	},
	async (accessToken, refreshToken, profile, done) => {
		const existingUser = await User.findOne({ googleId: profile.id });
		 if(existingUser) {
			 return done(null, existingUser);
		 }

		 const user = await new User({ googleId: profile.id }).save();
		 done(null, user);
	}
));
