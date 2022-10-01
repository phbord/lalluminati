import { useEffect, useState } from 'react';

export function useJson(jsonFile) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if(!jsonFile) return;
        setData(jsonFile);
    }, [jsonFile]);
    return { data };
};

export function useMediaCategories(media) {
    const [mediaType, setMediaType] = useState([]);

    useEffect(() => {
        if (!media) return;
        switch (media) {
            case 'p':
                setMediaType('Presse');
                break;
            case 'v':
                setMediaType('Vidéo');
                break;
            case 'a':
                setMediaType('Audio');
                break;
            default:
                setMediaType('Presse');
                break;
        }
    }, [media]);
    return { mediaType };
};

export function useThemeCategories(theme) {
    const [themeType, setThemeType] = useState([]);

    useEffect(() => {
        if (!theme) return;
        switch (theme) {
            case 'a':
                setThemeType('Actualités');
                break;
            case 'hgp':
                setThemeType('Histoire/géopolitique');
                break;
            case 'gp':
                setThemeType('Géopolitique');
                break;
            case 'h':
                setThemeType('Histoire');
                break;
            case 'sp':
                setThemeType('Sciences-politiques');
                break;
            case 's':
                setThemeType('Santé');
                break;
            case 'eco':
                setThemeType('Economie');
                break;
            case 'env':
                setThemeType('Environnement');
                break;
            case 'sf':
                setThemeType('Ufologie');
                break;
            case 'c':
                setThemeType('Culture');
                break;
            default:
                setThemeType('Actualités');
                break;
        }
    }, [theme]);
    return { themeType };
};

export function useSubstring(fullString, number) {
    const [text, setText] = useState('');

    useEffect(() => {
        if (!fullString) return;

        if (number && fullString.lenght <= number) {
            setText(fullString);
        }
        else if (!number && fullString.lenght <= 50) {
            setText(fullString);
        }
        else {
            setText(`${fullString.substring(0, number)}...`);
        }
    }, [fullString]);
    return { text };
};

export function useScrollToTop() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            (window.scrollY > 250)
                ? setShowTopBtn(true)
                : setShowTopBtn(false)
        });
    }, []);
    return { showTopBtn };
};