"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin(e) {
  console.debug("updateNavOnLogin", e);
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** When link is clicked, show story form. */

function navSubmitStoryClick(e){
  console.debug("navSubmitStoryClick", e);
  hidePageComponents();
  $submitStoryForm.show();
}

$navSubmitStory.on("click", navSubmitStoryClick)

/** Show favorites */

function navFavoritesClick(e){
  console.debug('navFavoritesClick', e);
  hidePageComponents();
  putFavoritesListOnPage();
}

$body.on("click", "#nav-favorites", navFavoritesClick);

/** Show my stories */

function navMyStories(e){
  console.debug("navMyStories", e);
  hidePageComponents();
  putUserStoriesOnPage();
  $ownStories.show();
}

/** show profile page */

function navProfileClick(e){
  console.debug("navProfileClick", e);
  hidePageComponents();
  $userProfile.show();
}

$navUserProfile.on("click", navProfileClick);

/** Update navbar after first login */

function updateNavOnLogin(){
  console.debug("updateNavOnLogin");
  $(".nav-story-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}