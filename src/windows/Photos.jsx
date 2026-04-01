import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import { gallery } from "#constants";
import useWindowStore from "#store/window.js";

const Photos = () => {
    const { openWindow } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <h2>Gallery</h2>
            </div>

            <div className="preview">
                {gallery.map(({ id, img }) => (
                    <img
                        key={id}
                        src={img}
                        alt={`Gallery item ${id}`}
                        onClick={() =>
                            openWindow("imgfile", {
                                name: `Gallery item ${id}`,
                                imageUrl: img,
                            })
                        }
                        className="cursor-pointer"
                    />
                ))}
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
