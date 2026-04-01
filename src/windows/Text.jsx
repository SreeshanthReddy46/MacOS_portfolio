import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import useWindowStore from "#store/window.js";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <article className="p-5 space-y-4 bg-white text-gray-800">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                ) : null}

                {subtitle ? (
                    <p className="text-sm font-semibold text-gray-500">{subtitle}</p>
                ) : null}

                {Array.isArray(description)
                    ? description.map((paragraph, index) => (
                        <p key={`${name}-${index}`} className="text-sm leading-6">
                            {paragraph}
                        </p>
                    ))
                    : null}
            </article>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
