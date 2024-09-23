function changeFavIcon() {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const favIcon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
	if (favIcon) {
		favIcon.href = isDarkMode ? "/fav-icon-light.svg" : "/fav-icon.svg";
	}
}

document.addEventListener("load", changeFavIcon);
document.addEventListener("visibilitychange", changeFavIcon);
