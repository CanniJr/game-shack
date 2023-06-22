import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
	if (!url) return noImage;

	const target = "media/";
	const index = url.indexOf(target) + target.length;
	return url.slice(0, index) + "crop/600/400/" + url.slice(index);
	// some api allows optimized images by adding 'crop' to the url after media/.
	// this returns a smaller image compared to the original one fetched from the API.
};

export default getCroppedImageUrl;
