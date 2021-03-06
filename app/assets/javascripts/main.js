$(document).on("ready", () => {
	Dropzone.autoDiscover = false;
});

$(document).on("turbolinks:load", () => {

	////////// USER INTERFACE - GENERAL  //////////

	//######## SECTIONS ########//

	let successSection = $("#success-sect");
	let errorsSection = $(".errors-sect");

	//######## MENU ########//

	let menu = $("#navbar");
	let homeMenuItem = $("#home-menu-item");
	let rateMenuItem = $("#rate-menu-item");
	let ratedItemsMenuItem = $("#rated-items-menu-item");
	let aboutMenuItem = $("#about-menu-item");
	let userMenuItem = $("#user-menu-item");
	let loginMenuItem = $("#login-menu-item");
	let signUpMenuItem = $("#sign-up-menu-item");
	let bugMenuItem = $("#bug-menu-item");

	let homeButton = $("#home-btn");
	let rateButton = $("#rate-btn");
	let publicationListButton = $("#publication-list-btn");
	let readersListButton = $("#readers-list-btn");
	let goToPasswordEditButton = $("#go-to-password-edit-btn");
	let goToProfileUpdateButton = $("#go-to-profile-update-btn");
	let logoutButton = $("#logout-btn");
	let loginButton = $("#login-btn");
	let signUpButton = $("#sign-up-btn");
	let bugButton = $("#bug-btn");

	//######## PROFILE MODAL ########//

	let firstNameValue = $("#first-name-val");
	let lastNameValue = $("#last-name-val");
	let emailValue = $("#email-val");
	let orcidValue = $("#orcid-val");
	let subscribeValue = $("#subscribe-val");
	let userScoreRSMValue = $("#user-score-rsm-val");
	let userScoreTRMValue = $("#user-score-trm-val");

	//######## ALERTS ########//

	let alert = $(".alert");
	let alertSuccess = $(".alert-success");

	//######## ICONS ########//

	let homeIcons = $(".home-icon");
	let pdfIcon = $("#pdf-icon");
	let signUpIcons = $(".sign-up-icon");
	let signInIcons = $(".sign-in-icon");
	let bugIcon = $("#bug-icon");
	let reloadIcons = $(".reload-icon");

	////////// USER INTERFACE - LOGIN  //////////

	let loginForm = $("#login-form");

	let emailField = $("#email");
	let passwordField = $("#password");

	let doLoginButton = $("#do-login-btn");
	let errorButtons = $(".error-btn");

	////////// USER INTERFACE - SIGN UP  //////////

	let signUpForm = $("#sign-up-form");

	let firstNameField = $("#first-name");
	let lastNameField = $("#last-name");
	// let emailField = $("#email");
	let orcidField = $("#orcid");
	// let passwordField = $("#password");
	let passwordConfirmationField = $("#password-confirmation");
	let subscribeCheckbox = $("#subscribe");
	let doSignUpButton = $("#do-sign-up-btn");

	////////// USER INTERFACE - PASSWORD FORGOT  //////////

	let passwordForgotForm = $("#password-forgot-form");

	//let emailField = $("#email");

	let passwordForgotButton = $("#password-forgot-btn");
	//let errorButton = $(".error-btn");

	//let alert = $(".alert");

	let checkIcon = $("#check-icon");

	////////// USER INTERFACE - CONTACT  //////////

	let contactForm = $("#contact-form");
	//let successSection = $("#success-sect");
	//let errorsSection = $(".errors-sect");

	let messageField = $("#message");
	//let emailField = $("#email");
	let bugReportCheckbox = $("#bug-report");

	let doContactButton = $("#do-contact-btn");
	//let errorButton = $(".error-btn");

	let messageIcon = $("#message-icon");

	//let alert = $(".alert");
	//let alertSuccess = $(".alert-success");

	////////// USER INTERFACE - RATING WEB  //////////

	let body = $("body");

	//######## SECTIONS ########//

	let ratingSection = $("#rating-sect");
	let ratingControls = $(".rating-controls");
	let undetectedPublicationSection = $("#undetected-publication-sect");
	let undetectedPublicationDetails = $(".undetected-publication-details");
	//let errorsSection = $(".errors-sect");
	let loadingSection = $("#loading-sect");

	//######## MODALS ########//

	let modalConfigure = $("#modal-configuration");
	let modalRefresh = $("#modal-refresh");
	let modalAllow = $("#modal-allow");

	//######## UI COMPONENTS ########//

	let rateForm = $("#rate-form");

	let loadRateButton = $("#load-rate-btn");
	let doRateButton = $("#do-rate-btn");
	let doRateSuccessButton = $("#do-rate-success-btn");
	let editRateButton = $("#edit-rate-btn");
	let updateRateButton = $("#update-rate-btn");
	let configureButton = $("#configure-btn");
	let configureSaveButton = $("#configuration-save-btn");
	let loadSaveButton = $("#load-save-btn");
	let downloadButton = $("#download-btn");
	let openButton = $("#open-btn");
	let refreshButton = $("#refresh-btn");
	let reloadButton = $("#reload-btn");
	let ratingButtons = $(".rating-button");
	let goToRatingButton = $("#go-to-rating-btn");
	let modalRefreshButton = $("#modal-refresh-btn");
	let modalAllowButton = $("#modal-allow-btn");

	//let alert = $(".alert");

	let publicationUrlField = $("#publication-url");

	let annotatedPublicationDropzone = $("#annotated-publication-dropzone");
	let annotatedPublicationDropzoneSuccess = $("#dropzone-success");
	let annotatedPublicationDropzoneError = $("#dropzone-error");

	let ratingCaptionFirst = $("#rating-caption-first");
	let ratingCaptionSecond = $("#rating-caption-second");
	let ratingCaptionThird = $("#rating-caption-third");
	let ratingSlider = $("#rating-slider");

	let ratingText = $("#rating-text");

	let anonymizeCheckbox = $("#anonymize-check");

	let saveForLaterSection = $("#save-for-later-section");

	let saveForLaterCaptionFirst = $("#save-for-later-caption-first");
	let saveForLaterCaptionSecond = $("#save-for-later-caption-second");

	let extractCaptionFirst = $("#extract-caption-first");
	let extractCaptionSecond = $("#extract-caption-second");

	let goToRatingIcon = $("#go-to-rating-icon");

	////////// USER INTERFACE - RATING PAPER  //////////

	let ratePaperForm = $("#new_rating");

	let votePaperButton = $("#vote-paper-btn");

	//let ratingSlider = $("#rating-slider");

	//let ratingText = $("#rating-text");

	let authTokenUserField = $("#authTokenUser");

	////////// USER INTERFACE - PASSWORD UPDATE  //////////

	let passwordEditForm = $("#password-edit-form");

	//let errorsSection = $(".errors-sect");

	let currentPasswordField = $("#current-password");
	let newPasswordField = $("#new-password");
	let newPasswordConfirmationField = $("#new-password-confirmation");

	let doPasswordEditButton = $("#do-password-edit-btn");
	//let errorButton = $(".error-btn");

	//let alert = $(".alert");

	//let checkIcon = $("#check-icon");

	////////// USER INTERFACE - PROFILE UPDATE  //////////

	let profileUpdatePage = $("#profile-update-page");

	//let signUpForm = $("#sign-up-form");

	//let errorsSection = $(".errors-sect");

	//let firstNameField = $("#first-name");
	//let lastNameField = $("#last-name");
	//let orcidField = $("#orcid");

	//let subscribeCheckbox = $("#subscribe");

	let backButton = $("#back-btn");
	let updateButton = $("#update-btn");
	//let errorButton = $(".error-btn");

	//let alert = $(".alert");

	//let checkIcon = $("#check-icon");

	////////// USER INTERFACE - PUBLICATION LIST //////////

	let publicationsTable = $("#publications-table");
	let publicationIdentifier = $(".publication-identifier");
	let downloadListButtons = $(".download-list-btn");
	let openListButton = $(".open-list-btn");
	let refreshListButton = $(".refresh-list-btn");
	let errorListButton = $(".error-list-btn");

	////////// USER INTERFACE - SUCCESS, ERRORS & HALTED  //////////

	let goToHomeButton = $("#go-to-home-btn");
	let goToLoginButton = $("#go-to-login-btn");

	////////// USER INTERFACE - SETUP //////////

	//######### GENERAL #########//

	let authToken = fetchToken();
	let message = localStorage.getItem('message');

	reloadIcons.hide();

	errorsSection.hide();
	errorButtons.hide();

	if (authToken != null) {
		ratedItemsMenuItem.find('ul').addClass("logged");
		aboutMenuItem.find('ul').addClass("logged");
		userMenuItem.find('ul').addClass("logged");
		signUpMenuItem.hide();
		loginMenuItem.hide();
	} else {
		ratedItemsMenuItem.find('ul').removeClass("logged");
		aboutMenuItem.find('ul').removeClass("logged");
		userMenuItem.find('ul').removeClass("logged");
		rateMenuItem.hide();
		ratedItemsMenuItem.hide();
		userMenuItem.hide();
	}

	if (authToken != null) {
		let successCallback = (data, status, jqXHR) => {
			firstNameValue.text(data["first_name"]);
			lastNameValue.text(data["last_name"]);
			emailValue.text(data["email"]);
			orcidValue.text(data["orcid"]);
			(data["subscribe"]) ? subscribeValue.text("Yes") : subscribeValue.text("No");
			userScoreRSMValue.text((data["score"] * 100).toFixed(2));
			userScoreTRMValue.text((data["bonus"] * 100).toFixed(2));
		};
		let errorCallback = (jqXHR, status) => {
			firstNameValue.text("...");
			firstNameValue.text("...");
			lastNameValue.text("...");
			emailValue.text("...");
			orcidValue.text("...");
			subscribeValue.text("...");
			userScoreRSMValue.text("...");
			userScoreTRMValue.text("...");
		};
		let promise = emptyAjax("POST", "/users/info.json", "application/json; charset=utf-8", "json", true, successCallback, errorCallback);
	}

	if (message == null) {
		if (successSection.find(alertSuccess).find("span").text().length === 0) {
			successSection.hide();
		}
	} else {
		successSection.show();
		successSection.find(alertSuccess).append(message);
		localStorage.removeItem('message')
	}

	//######### RATING WEB #########//

	loadingSection.hide();
	undetectedPublicationSection.hide();

	ratingCaptionSecond.hide();
	ratingCaptionThird.hide();
	ratingText.text("50");
	ratingText.show();
	ratingSlider.slider({});
	ratingSlider.on("slide", slideEvt => ratingText.text(slideEvt.value));
	doRateSuccessButton.hide();
	editRateButton.hide();
	updateRateButton.hide();
	loadRateButton.hide();
	doRateButton.prop("disabled", true);
	configureButton.prop("disabled", true);

	refreshButton.hide();
	loadSaveButton.hide();
	openButton.hide();
	downloadButton.prop("disabled", true);
	saveForLaterCaptionSecond.hide();

	extractCaptionSecond.hide();
	annotatedPublicationDropzoneSuccess.hide();
	annotatedPublicationDropzoneError.hide();
	goToRatingButton.hide();

	//errorButtons.hide();
	errorsSection.hide();

	Dropzone.autoDiscover = false;

	//######### RATING PAPER #########//

	ratingText.text("50");
	ratingText.show();
	ratingSlider.slider({});

	//######### PROFILE UPDATE #########//

	if (profileUpdatePage.is(":visible")) {

		signUpForm.find(reloadIcons).toggle();

		firstNameField.hide();
		lastNameField.hide();
		orcidField.hide();
		subscribeCheckbox.hide();
		backButton.find(reloadIcons).hide();
		updateButton.find(reloadIcons).hide();

		updateButton.prop("disabled", true);

		signUpForm.submit(event => event.preventDefault());

		if (authToken != null) {
			let thirdSuccessCallback = (data, status, jqXHR) => {
				firstNameField.val(data["first_name"]);
				firstNameField.show();
				firstNameField.parent().parent().find(reloadIcons).hide();
				lastNameField.val(data["last_name"]);
				lastNameField.show();
				lastNameField.parent().parent().find(reloadIcons).hide();
				orcidField.val(data["orcid"]);
				orcidField.show();
				orcidField.parent().parent().find(reloadIcons).hide();
				(data["subscribe"]) === true ? subscribeCheckbox.prop('checked', true) : subscribeCheckbox.prop('checked', false);
				subscribeCheckbox.show();
				subscribeCheckbox.parent().parent().find(reloadIcons).hide();
				updateButton.prop("disabled", false);
				removePreloader();
			};
			let thirdErrorCallback = (jqXHR, status) => {
				firstNameField.val();
				lastNameField.val();
				orcidField.val();
				subscribeCheckbox.prop('checked', false);
				updateButton.prop("disabled", false);
				removePreloader();
			};
			let thirdPromise = emptyAjax("POST", "/users/info.json", "application/json; charset=utf-8", "json", true, thirdSuccessCallback, thirdErrorCallback);
		}
	}

	////////// FUNCTIONALITIES - APPLICATION   //////////

	//####### COOKIE HANDLING #########//

	let cookieStatus = fetchCookie("cookieConsentStatus");
	if (cookieStatus !== "dismiss") {
		window.cookieconsent.initialise({
			"cookie": {
				"name": "Readersourcing-Cookie-Consent",
				"domain": "readersourcing.org"
			},
			"content": {
				"href": "/privacy",
				"dismiss": "Dismiss"
			},
			"elements": {
				"dismiss": '<a aria-label="dismiss cookie message" tabindex="0" class="btn btn-primary cc-btn cc-dismiss">{{dismiss}}</a>',
				"link": '<a aria-label="learn more about cookies" tabindex="0" href="{{href}}" target="_blank">{{link}}</a>',
			},
			"palette": {
				"popup": {
					"background": "#333333",
					"text": "#ffffff"
				},
				"button": {
					"background": "#467fbf",
					"text": "#ffffff"
				}
			},
			"theme": "edgeless",
			onStatusChange: function (status) {
				setCookie("cookieConsentStatus", status)
			},
		});
	}

	////////// FUNCTIONALITIES - MENU   //////////

	//####### LOGOUT HANDLING #########//

	logoutButton.on("click", () => {
		let successCallback = (data, status, jqXHR) => {
			deleteToken();
			window.location.href = "/"
		};
		let errorCallback = (jqXHR, status) => {
		};
		let thirdPromise = emptyAjax("POST", "/logout.json", "application/json; charset=utf-8", "json", true, successCallback, errorCallback);
	});

	////////// FUNCTIONALITIES - LOGIN   //////////

	doLoginButton.on("click", () => {
		let validationInstance = loginForm.parsley();
		if (validationInstance.isValid()) {
			doLoginButton.find(signInIcons).toggle();
			doLoginButton.find(reloadIcons).toggle();
			let data = {email: emailField.val(), password: passwordField.val()};
			let successCallback = (data, status, jqXHR) => {
				//doLoginButton.find(signInIcon).toggle();
				//doLoginButton.find(reloadIcons).toggle();
				storeToken(data["auth_token"]);
				window.location.href = "/"
			};
			let errorCallback = (jqXHR, status) => {
				doLoginButton.find(signInIcons).toggle();
				doLoginButton.find(reloadIcons).toggle();
				if (jqXHR.responseText == null) {
					doLoginButton.hide();
					let button = doLoginButton.parent().find(errorButtons);
					button.show();
					button.prop("disabled", true)
				} else {
					let errorPromise = buildErrors(jqXHR.responseText).then(result => {
						doLoginButton.parent().find(errorsSection).find(alert).empty();
						doLoginButton.parent().find(errorsSection).find(alert).append(result);
						doLoginButton.parent().find(errorsSection).show();
					});
				}
			};
			// noinspection JSIgnoredPromiseFromCall
			ajax("POST", "/authenticate", "application/json; charset=utf-8", "json", true, data, successCallback, errorCallback);
		}
	});

	loginForm.submit(event => event.preventDefault());

	////////// FUNCTIONALITIES - SIGN UP   //////////

	//########## SIGN UP HANDLING ##########//

	signUpForm.submit(event => event.preventDefault());

	doSignUpButton.on("click", () => {
		let validationInstance = signUpForm.parsley();
		if (validationInstance.isValid()) {
			doSignUpButton.find(signUpIcons).toggle();
			doSignUpButton.find(reloadIcons).toggle();
			let data = {
				user: {
					first_name: firstNameField.val(),
					last_name: lastNameField.val(),
					email: emailField.val(),
					orcid: orcidField.val(),
					password: passwordField.val(),
					password_confirmation: passwordConfirmationField.val(),
					subscribe: !!subscribeCheckbox.is(":checked")
				},
			};
			let successCallback = (data, status, jqXHR) => {
				//doSignUpButton.find(reloadIcons).toggle();
				deleteToken();
				localStorage.setItem("message", data["message"]);
				window.location.href = "/login";
			};
			let errorCallback = (jqXHR, status) => {
				doSignUpButton.find(reloadIcons).toggle();
				doSignUpButton.find(signUpIcons).toggle();
				if (jqXHR.responseText == null) {
					doSignUpButton.hide();
					let button = doSignUpButton.parent().find(errorButtons);
					button.show();
					button.prop("disabled", true)
				} else {
					let errorPromise = buildErrors(jqXHR.responseText).then(result => {
						doSignUpButton.parent().find(errorsSection).find(alert).empty();
						doSignUpButton.parent().find(errorsSection).find(alert).append(result);
						doSignUpButton.parent().find(errorsSection).show();
					});
				}
			};
			// noinspection JSIgnoredPromiseFromCall
			ajax("POST", "/users.json", "application/json; charset=utf-8", "json", true, data, successCallback, errorCallback);
		}
	});

	////////// FUNCTIONALITIES - PASSWORD FORGOT   //////////

	//######## FORGOT HANDLING ########//

	passwordForgotForm.submit(event => event.preventDefault());

	passwordForgotButton.on("click", () => {
		let validationInstance = passwordForgotForm.parsley();
		if (validationInstance.isValid()) {
			passwordForgotButton.find(checkIcon).toggle();
			passwordForgotButton.find(reloadIcons).toggle();
			let data = {
				email: emailField.val(),
			};
			let successCallback = (data, status, jqXHR) => {
				//passwordForgotButton.find(reloadIcons).toggle();
				deleteToken();
				localStorage.setItem("message", data["message"]);
				window.location.href = "/login";
			};
			let errorCallback = (jqXHR, status) => {
				passwordForgotButton.find(checkIcon).toggle();
				passwordForgotButton.find(reloadIcons).toggle();
				if (jqXHR.responseText == null) {
					passwordForgotButton.hide();
					let button = passwordForgotButton.parent().find(errorButtons);
					button.show();
					button.prop("disabled", true)
				} else {
					let errorPromise = buildErrors(jqXHR.responseText).then(result => {
						passwordForgotButton.parent().find(errorsSection).find(alert).empty();
						passwordForgotButton.parent().find(errorsSection).find(alert).append(result);
						passwordForgotButton.parent().find(errorsSection).show();
					});
				}
			};
			// noinspection JSIgnoredPromiseFromCall
			ajax("POST", "/password/forgot.json", "application/json; charset=utf-8", "json", true, data, successCallback, errorCallback);
		}
	});

	////////// FUNCTIONALITIES - CONTACT   //////////

	//########## CONTACT HANDLING ##########//

	contactForm.submit(event => event.preventDefault());

	doContactButton.on("click", () => {
		let validationInstance = contactForm.parsley();
		if (validationInstance.isValid()) {
			doContactButton.find(messageIcon).toggle();
			doContactButton.find(reloadIcons).toggle();
			let data = {email: emailField.val(), message: messageField.val(), bug_report: bugReportCheckbox.is(':checked')};
			let successCallback = (data, status, jqXHR) => {
				doContactButton.text("Message Sent");
				doContactButton.prop("disabled", true);
				successSection.show();
				successSection.find(alertSuccess).append(data["message"]);
			};
			let errorCallback = (jqXHR, status) => {
				doContactButton.find(messageIcon).toggle();
				doContactButton.find(reloadIcons).toggle();
				if (jqXHR.responseText == null) {
					doContactButton.hide();
					let button = doContactButton.parent().find(errorButtons);
					button.show();
					button.prop("disabled", true)
				} else {
					let errorPromise = buildErrors(jqXHR.responseText).then(result => {
						doContactButton.parent().find(errorsSection).find(alert).empty();
						doContactButton.parent().find(errorsSection).find(alert).append(result);
						doContactButton.parent().find(errorsSection).show();
					});
				}
			};
			// noinspection JSIgnoredPromiseFromCall
			ajax("POST", "/message", "application/json; charset=utf-8", "json", true, data, successCallback, errorCallback);
		}
	});

	////////// FUNCTIONALITIES - RATING WEB   //////////

	////////// PUBLICATION //////////

	//#########  STATUS HANDLING (EXISTS ON THE DB, RATED BY THE LOGGED IN USER, SAVED FOR LATER...) #########//

	if (authToken != null) {
		publicationUrlField.change(() => {
			let validationInstance = rateForm.parsley();
			validationInstance.validate();
			if (validationInstance.isValid()) {
				loadingSection.show();
				// RATING SECTION
				ratingSection.hide();
				rateForm.parent().hide();
				ratingControls.hide();
				ratingText.hide();
				ratingButtons.prop("disabled", true);
				// SAVE FOR LATER SECTION
				saveForLaterCaptionFirst.show();
				saveForLaterCaptionSecond.hide();
				downloadButton.find('span').text("Download");
				downloadButton.show();
				openButton.hide();
				refreshButton.hide();
				let currentUrl = publicationUrlField.val();
				if (currentUrl !== "") {
					let data = {
						publication: {
							pdf_url: currentUrl
						}
					};
					// data ---> secondData because of visibility clash with "lookup" call.
					let successCallback = (secondData, status, jqXHR) => {
						// 1.2 Publication exists, so it may be rated by the user
						let successCallback = (data, status, jqXHR) => {
							// 2.2 Publication has been rated by the user, so it is not necessary to check if it has been annotated
							let secondSuccessCallback = (data, status, jqXHR) => {
								// RATING SECTION
								validationInstance.reset();
								loadingSection.hide();
								loadRateButton.hide();
								ratingSection.show();
								doRateButton.hide();
								configureButton.hide();
								rateForm.parent().show();
								ratingControls.show();
								doRateSuccessButton.show();
								doRateSuccessButton.prop("disabled", true);
								editRateButton.show();
								editRateButton.prop("disabled", false);
								updateRateButton.data('id', data["id"]);
								updateRateButton.hide();
								ratingText.parent().removeClass("mt-3");
								ratingText.show();
								ratingCaptionSecond.hide();
								ratingCaptionFirst.hide();
								ratingCaptionThird.show();
								ratingSlider.slider('destroy');
								ratingSlider.hide();
								ratingText.text(data["score"]);
								// SAVE FOR LATER SECTION
								saveForLaterSection.show();
							};
							// 2.3 Publication has not been rated by the user
							let secondErrorCallback = (jqXHR, status) => {
								// RATING SECTION
								validationInstance.reset();
								loadingSection.hide();
								loadRateButton.hide();
								doRateSuccessButton.hide();
								editRateButton.hide();
								updateRateButton.hide();
								doRateButton.show();
								doRateButton.prop("disabled", false);
								configureButton.show();
								configureButton.prop("disabled", false);
								ratingSection.show();
								rateForm.parent().show();
								ratingCaptionFirst.hide();
								ratingCaptionSecond.show();
								ratingCaptionThird.hide();
								ratingControls.show();
								ratingText.show();
								ratingSlider.slider({});
								ratingSlider.on("slide", slideEvt => ratingText.text(slideEvt.value));
								// 3.1 The rated publication was also annotated
								let thirdSuccessCallback = (data, status, jqXHR) => {
									// SAVE FOR LATER SECTION
									saveForLaterSection.show();
									loadSaveButton.hide();
									downloadButton.hide();
									saveForLaterCaptionFirst.hide();
									saveForLaterCaptionSecond.show();
									openButton.show();
									openButton.attr("href", data["pdf_download_url_link"]);
									openButton.on("click", () => window.open(data["pdf_download_url_link"], '_blank'));
									openButton.prop("disabled", false);
									refreshButton.show();
									refreshButton.prop("disabled", false);
								};
								// 3.2 The rated publication was not annotated
								let thirdErrorCallback = (jqXHR, status) => {
									// SAVE FOR LATER SECTION
									saveForLaterSection.show();
									saveForLaterCaptionFirst.show();
									saveForLaterCaptionSecond.hide();
									loadSaveButton.hide();
									openButton.hide();
									refreshButton.hide();
									downloadButton.prop("disabled", false);
									downloadButton.show();
								};
								// 3.1 Does the rated publication has been already annotated?
								let thirdPromise = emptyAjax("GET", `/publications/${data["id"]}/is_saved_for_later.json`, "application/json; charset=utf-8", "json", true, thirdSuccessCallback, thirdErrorCallback);
							};
							// 2.1 Does the publication has been rated by the logged user?
							let secondPromise = emptyAjax("GET", `/publications/${data["id"]}/is_rated.json`, "application/json; charset=utf-8", "json", true, secondSuccessCallback, secondErrorCallback);
						};
						// 1.3 Publication was never rated, so it does not exists on the database
						let errorCallback = (jqXHR, status) => {
							// RATING SECTION
							loadingSection.hide();
							loadRateButton.hide();
							doRateSuccessButton.hide();
							editRateButton.hide();
							updateRateButton.hide();
							doRateButton.show();
							doRateButton.prop("disabled", false);
							configureButton.show();
							configureButton.prop("disabled", false);
							ratingSection.show();
							rateForm.parent().show();
							ratingControls.show();
							ratingCaptionFirst.hide();
							ratingCaptionSecond.show();
							ratingCaptionThird.hide();
							ratingText.show();
							// SAVE FOR LATER SECTION
							saveForLaterCaptionFirst.show();
							saveForLaterCaptionSecond.hide();
							loadSaveButton.hide();
							downloadButton.prop("disabled", false);
							downloadButton.show();
							openButton.hide();
							openButton.prop("disabled", false);
							refreshButton.hide();
							refreshButton.prop("disabled", false);
						};
						// 1.1 Does the publication exists on the database?
						let promise = ajax("POST", "/publications/lookup.json", "application/json; charset=utf-8", "json", true, data, successCallback, errorCallback);
					};
					let errorCallback = (jqXHR, status) => {
						ratingSection.hide();
						ratingControls.hide();
						ratingButtons.hide();
						saveForLaterSection.hide();
						saveForLaterCaptionFirst.show();
						saveForLaterCaptionSecond.hide();
						undetectedPublicationSection.show();
						let errorPromise = buildErrors(jqXHR.responseText).then(result => {
							undetectedPublicationDetails.parent().find(errorsSection).find(alert).empty();
							undetectedPublicationDetails.parent().find(errorsSection).find(alert).append(result);
							undetectedPublicationDetails.parent().find(errorsSection).show();
							undetectedPublicationSection.show();
							loadingSection.hide()
						});
					};
					let promise = ajax("POST", "/publications/is_fetchable.json", "application/json; charset=utf-8", "json", true, data, successCallback, errorCallback);
				}
			}
		});
	}

	//########## RELOAD HANDLING #########//

	if (authToken != null) {
		reloadButton.on("click", () => {
			undetectedPublicationSection.hide();
			// RATING SECTION
			ratingSection.show();
			ratingCaptionFirst.show();
			ratingCaptionSecond.hide();
			ratingCaptionThird.hide();
			ratingText.show();
			ratingControls.show();
			rateForm.parent().show();
			doRateButton.show();
			configureButton.show();
			// SAVE FOR LATER SECTION
			saveForLaterSection.show();
			saveForLaterCaptionFirst.show();
			saveForLaterCaptionSecond.hide();
			downloadButton.show();
		});
	}

	//######### SAVE FOR LATER HANDLING #########//

	if (authToken != null) {
		downloadButton.on("click", () => {
			validationInstance.validate();
			if (validationInstance.isValid()) {
				let currentUrl = publicationUrlField.val();
				let data = {
					publication: {
						pdf_url: currentUrl
					}
				};
				downloadButton.find('span').text("Downloading...");
				downloadButton.find(reloadIcons).toggle();
				// 1.2 Publication fetched, hide save for later button and show the download one
				let successCallback = (data, status, jqXHR) => {
					saveForLaterCaptionFirst.hide();
					saveForLaterCaptionSecond.show();
					downloadButton.find(reloadIcons).toggle();
					downloadButton.hide();
					openButton.show();
					openButton.attr("href", data["pdf_download_url_link"]);
					openButton.on("click", () => window.open(data["pdf_download_url_link"], '_blank'));
					refreshButton.show();
					refreshButton.prop("disabled", false);
					let pdfWindow = window.open(data["pdf_download_url_link"], '_blank');
					if (pdfWindow) pdfWindow.focus(); else modalAllow.modal('show');
				};
				// 1.3 Error during publication fetching, hide save for later and download buttons
				let errorCallback = (jqXHR, status) => {
					saveForLaterCaptionFirst.show();
					saveForLaterCaptionSecond.hide();
					downloadButton.find(reloadIcons).toggle();
					downloadButton.hide();
					let errorButton = downloadButton.parent().find(errorButtons);
					errorButton.show();
					errorButton.prop("disabled", true);
					let errorPromise = buildErrors(jqXHR.responseText).then(result => {
						downloadButton.parent().find(errorsSection).find(alert).empty();
						downloadButton.parent().find(errorsSection).find(alert).append(result);
						downloadButton.parent().find(errorsSection).show();
					});
				};
				// 1.1 Fetch and annotate the publication
				let promise = ajax("POST", "/publications/fetch.json", "application/json; charset=utf-8", "json", true, data, successCallback, errorCallback);
			}
		});
	}

	modalAllowButton.on("click", () => {
		modalAllow.modal('hide')
	});

	///######### REFRESH HANDLING #########//

	modalRefreshButton.click(event => event.preventDefault());

	modalRefresh.on('show.bs.modal', function (e) {
		validationInstance.validate();
		if (!validationInstance.isValid()) {
			e.stopPropagation();
		}
	});

	refreshButton.on("click", () => {
		modalRefresh.modal("show");
	});

	modalRefreshButton.on("click", () => {
		modalRefresh.modal("hide");
		openButton.hide();
		refreshButton.hide();
		loadSaveButton.find('span').text("Downloading...");
		loadSaveButton.show();
		let currentUrl = publicationUrlField.val();
		let data = {
			publication: {
				pdf_url: currentUrl
			}
		};
		// 1.2 Publication exists, so it is safe to refresh it
		let successCallback = (data, status, jqXHR) => {
			// 2.2 Publication refreshed, so it it safe to show the download button
			let secondSuccessCallback = (data, status, jqXHR) => {
				loadSaveButton.hide();
				openButton.show();
				openButton.attr("href", data["pdf_download_url_link"]);
				openButton.on("click", () => window.open(data["pdf_download_url_link"], '_blank'));
				openButton.prop("disabled", false);
				refreshButton.show();
				let pdfWindow = window.open(data["pdf_download_url_link"], '_blank');
				if (pdfWindow) {
					pdfWindow.focus();
				} else {
					modalAllow.modal('show');
				}
			};
			// 2.3 Error during publication refresh, it is not safe to show the download button
			let secondErrorCallback = (jqXHR, status) => {
				loadSaveButton.hide();
				let errorButton = openButton.parent().find(errorButtons);
				errorButton.show();
				errorButton.prop("disabled", true);
				let errorPromise = buildErrors(jqXHR.responseText).then(result => {
					loadSaveButton.parent().find(errorsSection).find(alert).empty();
					loadSaveButton.parent().find(errorsSection).find(alert).append(result);
					loadSaveButton.parent().find(errorsSection).show();
				});
			};
			// 2.1 Refresh the publication
			let secondPromise = emptyAjax("GET", `/publications/${data["id"]}/refresh.json`, "application/json; charset=utf-8", "json", true, secondSuccessCallback, secondErrorCallback);
		};
		// 1.3 Publication was never rated, so it does not exists on the database
		let errorCallback = function (jqXHR, status) {
			loadSaveButton.hide();
			let errorButton = openButton.parent().find(errorButtons);
			errorButton.show();
			errorButton.prop("disabled", true);
			let errorPromise = buildErrors(jqXHR.responseText).then(result => {
				loadSaveButton.parent().find(errorsSection).find(alert).empty();
				loadSaveButton.parent().find(errorsSection).find(alert).append(result);
				loadSaveButton.parent().find(errorsSection).show();
			});
		};
		// 1.1 Does the publication exists on the database?
		let promise = ajax("POST", "/publications/lookup.json", "application/json; charset=utf-8", "json", true, data, successCallback, errorCallback);
	});

	//######### EXTRACT HANDLING #########//

	if (annotatedPublicationDropzone.is(":visible")) {
		$('.dropzone').each(function () {
			let dropzoneControl = $(this)[0].dropzone;
			if (dropzoneControl) dropzoneControl.destroy();
		});
		Dropzone.options.annotatedPublicationDropzone = {
			paramName: "file", // The name that will be used to transfer the file
			acceptedFiles: "application/pdf",
			maxFiles: 1,
			headers: {
				"Authorization": authToken
			}
		};
		annotatedPublicationDropzone = new Dropzone("#annotated-publication-dropzone");
		if (authToken != null) {
			annotatedPublicationDropzone.on("sending", (file, xhr, formData) => xhr.setRequestHeader("Authorization", authToken));
			annotatedPublicationDropzone.on("success", (file, data) => {
				extractCaptionFirst.hide();
				extractCaptionSecond.show();
				annotatedPublicationDropzoneSuccess.show();
				annotatedPublicationDropzoneSuccess.text(data["message"]);
				goToRatingButton.show();
				goToRatingButton.prop("href", data["baseUrl"]);
				let ratingPageWindow = window.open(data["baseUrl"], '_blank');
				if (ratingPageWindow) {
					ratingPageWindow.focus();
				} else {
					modalAllow.modal('show');
				}
			});
			annotatedPublicationDropzone.on('error', (file, response, xhr) => {
				if (response.hasOwnProperty('errors')) annotatedPublicationDropzoneError.text(response["errors"][0]); else annotatedPublicationDropzoneError.text(response)
				annotatedPublicationDropzoneError.show();
			});
		}
	}

	////////// RATING //////////

	//#######  SLIDER HANDLING #########//

	ratingSlider.on("slide", slideEvt => ratingText.text(slideEvt.value));

	//#######  ACTION HANDLING #########//

	let validationInstance = rateForm.parsley();

	rateForm.submit(event => event.preventDefault());

	if (authToken != null) {
		doRateButton.on("click", () => {
			validationInstance.validate();
			if (validationInstance.isValid()) {
				let currentUrl = publicationUrlField.val();
				doRateButton.find(reloadIcons).toggle();
				let score = ratingSlider.val();
				let data = {
					rating: {
						score: score,
						pdf_url: currentUrl,
						anonymous: anonymizeCheckbox.is(':checked')
					}
				};
				// 1.2 Rating created successfully
				let successCallback = (data, status, jqXHR) => {
					let id = data["id"];
					let secondData = {
						publication: {
							pdf_url: currentUrl
						}
					};
					let secondSuccessCallback = (data, status, jqXHR) => {
						// RATING SECTION
						doRateButton.find(reloadIcons).toggle();
						doRateButton.hide();
						configureButton.hide();
						ratingCaptionSecond.hide();
						ratingSlider.slider('destroy');
						ratingSlider.hide();
						ratingText.parent().removeClass("mt-3");
						ratingCaptionThird.show();
						doRateSuccessButton.show();
						doRateSuccessButton.prop("disabled", true);
						editRateButton.show();
						editRateButton.prop("disabled", false);
						updateRateButton.data('id', id);
						// SAVE FOR LATER SECTION
						downloadButton.prop("disabled", true);
						openButton.prop("disabled", true);
						refreshButton.prop("disabled", true);
					};
					let secondErrorCallback = (jqXHR, status) => {
						// RATING SECTION
						doRateButton.find(reloadIcons).toggle();
						doRateButton.hide();
						configureButton.hide();
						doRateSuccessButton.show();
						doRateSuccessButton.prop("disabled", true);
					};
					let secondPromise = ajax("POST", "/publications/lookup.json", "application/json; charset=utf-8", "json", true, secondData, secondSuccessCallback, secondErrorCallback);
					let thirdSuccessCallback = (data, status, jqXHR) => {
						userScoreRSMValue.text((data["score"] * 100).toFixed(2));
						userScoreTRMValue.text((data["bonus"] * 100).toFixed(2));
					};
					let thirdErrorCallback = (jqXHR, status) => {
						userScoreRSMValue.text("...");
						userScoreTRMValue.text("...");
					};
					let promise = emptyAjax("POST", "/users/info.json", "application/json; charset=utf-8", "json", true, thirdSuccessCallback, thirdErrorCallback);
				};
				// 1.3 Error during rating creation
				let errorCallback = (jqXHR, status) => {
					doRateButton.hide();
					configureButton.hide();
					let errorButton = doRateButton.parent().find(errorButtons);
					errorButton.show();
					errorButton.prop("disabled", true);
					let errorPromise = buildErrors(jqXHR.responseText).then(result => {
						doRateButton.parent().find(errorsSection).find(alert).empty();
						doRateButton.parent().find(errorsSection).find(alert).append(result);
						doRateButton.parent().find(errorsSection).show();
					});
				};
				// 1.1 Create a new rating with the selected score
				let promise = ajax("POST", "/ratings.json", "application/json; charset=utf-8", "json", true, data, successCallback, errorCallback);
			}
		});
	}

	//######### EDIT HANDLING #########//

	if (authToken != null) {
		editRateButton.on("click", () => {
			ratingSlider.slider({});
			ratingSlider.on("slide", slideEvt => ratingText.text(slideEvt.value));
			doRateSuccessButton.hide();
			editRateButton.prop("disabled", true);
			updateRateButton.find("span").text("Confirm");
			updateRateButton.prop("disabled", false);
			updateRateButton.show();
		});
	}

	//######### UPDATE HANDLING #########//

	if (authToken != null) {
		updateRateButton.on("click", () => {
			validationInstance.validate();
			if (validationInstance.isValid()) {
				updateRateButton.find(reloadIcons).toggle();
				let score = ratingSlider.val();
				let id = updateRateButton.data('id');
				let data = {
					rating: {
						score: score,
					}
				};
				let successCallback = (data, status, jqXHR) => {
					ratingSlider.slider('destroy');
					ratingSlider.hide();
					updateRateButton.find(reloadIcons).toggle();
					updateRateButton.find("span").text("Rating Updated");
					updateRateButton.prop("disabled", true);
					editRateButton.prop("disabled", false);
					editRateButton.show();
				};
				let errorCallback = (jqXHR, status) => {

				};
				let promise = ajax("PUT", `/ratings/${id}.json`, "application/json; charset=utf-8", "json", true, data, successCallback, errorCallback);
			}
		});
	}

	//######### CONFIGURATION HANDLING #########//

	configureSaveButton.on("click", () => modalConfigure.modal("hide"));

	////////// RATING //////////

	////////// FUNCTIONALITIES - RATING PAPER  //////////

	ratingSlider.on("slide", slideEvt => ratingText.text(slideEvt.value));

	//#######  ACTION HANDLING #########//

	votePaperButton.on("click", () => {
		let validationInstance = ratePaperForm.parsley();
		validationInstance.validate();
		if (validationInstance.isValid()) {
			votePaperButton.find(reloadIcons).toggle();
		}
	});

	////////// FUNCTIONALITIES - PASSWORD UPDATE  //////////

	passwordEditForm.submit(event => event.preventDefault());

	doPasswordEditButton.on("click", () => {
		let validationInstance = passwordEditForm.parsley();
		validationInstance.validate();
		if (validationInstance.isValid()) {
			doPasswordEditButton.find(checkIcon).toggle();
			doPasswordEditButton.find(reloadIcons).toggle();
			let data = {
				current_password: currentPasswordField.val(),
				new_password: newPasswordField.val(),
				new_password_confirmation: newPasswordConfirmationField.val()
			};
			let successCallback = (data, status, jqXHR) => {
				//doPasswordEditButton.find(reloadIcons).toggle();
				deleteToken();
				localStorage.setItem("message", data["message"]);
				window.location.href = "/login";
			};
			let errorCallback = (jqXHR, status) => {
				goToPasswordEditButton.find(checkIcon).toggle();
				goToPasswordEditButton.find(reloadIcons).toggle();
				if (jqXHR.responseText == null) {
					doPasswordEditButton.hide();
					let button = doPasswordEditButton.parent().find(errorButtons);
					button.show();
					button.prop("disabled", true)
				} else {
					let errorPromise = buildErrors(jqXHR.responseText).then(result => {
						doPasswordEditButton.parent().find(errorsSection).find(alert).empty();
						doPasswordEditButton.parent().find(errorsSection).find(alert).append(result);
						doPasswordEditButton.parent().find(errorsSection).show();
					});
				}
			};
			// noinspection JSIgnoredPromiseFromCall
			ajax("POST", "/password/update.json", "application/json; charset=utf-8", "json", true, data, successCallback, errorCallback);
		}
	});

	////////// FUNCTIONALITIES - PROFILE UPDATE  //////////

	if (authToken != null) {
		updateButton.on("click", () => {
			let validationInstance = signUpForm.parsley();
			validationInstance.validate();
			if (validationInstance.isValid()) {
				updateButton.find(checkIcon).toggle();
				updateButton.find(reloadIcons).toggle();
				let successCallback = (data, status, jqXHR) => {
					let secondData = {
						user: {
							first_name: firstNameField.val(),
							last_name: lastNameField.val(),
							orcid: orcidField.val(),
							subscribe: !!subscribeCheckbox.is(":checked")
						},
					};
					if (orcidField.val() === "")
						delete secondData.user.orcid;
					let secondSuccessCallback = (data, status, jqXHR) => {
						//updateButton.find(reloadIcons).toggle();
						deleteToken();
						localStorage.setItem("message", data["message"]);
						window.location.href = "/login";
					};
					let secondErrorCallback = (jqXHR, status) => {
						updateButton.find(reloadIcons).toggle();
						updateButton.find(checkIcon).toggle();
						if (jqXHR.responseText == null) {
							updateButton.hide();
							let button = updateButton.parent().find(errorButtons);
							button.show();
							button.prop("disabled", true)
						} else {
							let errorPromise = buildErrors(jqXHR.responseText).then(result => {
								updateButton.parent().find(errorsSection).find(alert).empty();
								updateButton.parent().find(errorsSection).find(alert).append(result);
								updateButton.parent().find(errorsSection).show();
							});
						}
					};
					let secondPromise = ajax("PUT", `/users/${data["id"]}.json`, "application/json; charset=utf-8", "json", true, secondData, secondSuccessCallback, secondErrorCallback);
				};
				let errorCallback = (jqXHR, status) => {
					updateButton.find(reloadIcons).toggle();
					updateButton.find(checkIcon).toggle();
					if (jqXHR.responseText == null) {
						updateButton.hide();
						let button = updateButton.parent().find(errorButtons);
						button.show();
						button.prop("disabled", true)
					} else {
						let errorPromise = buildErrors(jqXHR.responseText).then(result => {
							updateButton.parent().find(errorsSection).find(alert).empty();
							updateButton.parent().find(errorsSection).find(alert).append(result);
							updateButton.parent().find(errorsSection).show();
						});
					}
				};
				let promise = emptyAjax("POST", "/users/info.json", "application/json; charset=utf-8", "json", true, successCallback, errorCallback);
			}
		});
	}

	////////// FUNCTIONALITIES - PUBLICATION LIST  //////////

	//####### TABLE INITIALIZATION HANDLING #########//

	publicationsTable.DataTable({
		dom: 'frtipB',
		buttons: [
			'copyHtml5',
			'excelHtml5',
			'csvHtml5',
			'pdfHtml5'
		],
		language: {
			zeroRecords: "It appears this publication you are looking for has never been rated. <a href=\"/rate\"> Rate it for the first time</a>"
		},
		responsive: true
	});

	//#######  DOWNLOAD FROM TABLE HANDLING #########//

	if (authToken != null) {
		downloadListButtons.on("click", (event) => {
			if ($(event.target).is('span')) {
				downloadButton = $(event.target).parent();
			} else {
				downloadButton = $(event.target);
			}
			let currentIdentifier = downloadButton.parent().find(publicationIdentifier).val();
			downloadButton.find('span').text("");
			downloadButton.find(reloadIcons).toggle();
			// 1.2 Publication fetched, hide download and show the download one
			let successCallback = (data, status, jqXHR) => {
				downloadButton.find(reloadIcons).toggle();
				downloadButton.hide();
				openButton = downloadButton.parent().find(openListButton);
				openButton.removeClass("d-none");
				openButton.prop("disabled", false);
				openButton.attr("href", data["pdf_download_url_link"]);
				openButton.on("click", () => window.open(data["pdf_download_url_link"], '_blank'));
				let pdfWindow = window.open(data["pdf_download_url_link"], '_blank');
				if (pdfWindow) pdfWindow.focus(); else modalAllow.modal('show');
			};
			// 1.3 Error during publication fetching, hide download ad open button
			let errorCallback = (jqXHR, status) => {
				downloadButton.find(reloadIcons).toggle();
				downloadButton.hide();
				let errorButton = downloadButton.parent().find(errorListButton);
				errorButton.show();
				errorButton.prop("disabled", true);
			};
			// 1.1 Fetch and annotate the publication
			let promise = emptyAjax("GET", `/publications/${currentIdentifier}/refresh.json`, "application/json; charset=utf-8", "json", true, successCallback, errorCallback);
		});
	}

	////////// FUNCTIONALITIES - READERS LIST  //////////

	let usersTable = $("#users-table");
	usersTable.DataTable({
		dom: 'frtipB',
		buttons: [
			'copyHtml5',
			'excelHtml5',
			'csvHtml5',
			'pdfHtml5'
		],
		language: {
			zeroRecords: "The reader you are looking for is not present."
		},
		responsive: true
	});

	////////// FUNCTIONALITIES - SUCCESS, HALTED & ERRORS  //////////

	goToHomeButton.on("click", () => {
		goToHomeButton.find(homeIcons).toggle();
		goToHomeButton.find(reloadIcons).toggle();
	});

	goToLoginButton.on("click", () => {
		goToLoginButton.find(signInIcons).toggle();
		goToLoginButton.find(reloadIcons).toggle();
	});

});