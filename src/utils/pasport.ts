import VKStrategy from "passport-vkontakte"
import passport from "passport"
const VK = VKStrategy.Strategy

const vkAuth = (passport: passport.PassportStatic) => {
	passport.serializeUser((user: any, done) => {
		done(null, user)
	})
	passport.deserializeUser((obj: any, done) => {
		done(null, obj.id)
	})
	/**
	 * VK
	 */
	passport.use(
		"vkontakte",
		new VK(
			{
				clientID: "7547126",
				clientSecret: "ipS3DXUDHNiLMeHxjRoe",
				callbackURL: "/registration/vkontakte/callback",
			},
			(
				accessToken: any,
				refreshToken: any,
				params: any,
				profile: any,
				done,
			) => {
				const _profile = JSON.parse(JSON.stringify(profile))
				_profile.emails = [{ value: params.email }]
				process.nextTick(() => {
					done(null, _profile)
				})
			},
		),
	)
}

export default vkAuth
