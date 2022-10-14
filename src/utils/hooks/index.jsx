import { useEffect, useState, useContext } from 'react';
import { SortCelebritiesContext } from '../context';

export function useJson(jsonFile) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if(!jsonFile) return;
        setData(jsonFile);
    }, [jsonFile]);
    return { data };
};

export function useFetch(url) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { isLoading, data, error }
}

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
            case 'spr':
                setThemeType('Spiritualités');
                break;
            case 'en':
                setThemeType('Energétique');
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
            case 'soc':
                setThemeType('Sociétal');
                break;
            default:
                setThemeType('Actualités');
                break;
        }
    }, [theme]);
    return { themeType };
};

export function useMediaTypes(media) {
    const [mediaType, setMediaType] = useState([]);

    useEffect(() => {
        if (!media) return;
        switch (media) {
            case 'rs':
                setMediaType('Réseau social');
                break;
            case 'b':
                setMediaType('Blog');
                break;
            case 'rv':
                setMediaType('Revue');
                break;
            case 'j':
                setMediaType('Journal');
                break;
            case 'tv':
                setMediaType('TV');
                break;
            case 'ctv':
                setMediaType('Chaîne TV');
                break;
            case 'wtv':
                setMediaType('Web TV');
                break;
            case 'wr':
                setMediaType('Web radio');
                break;
            case 'r':
                setMediaType('Radio');
                break;
            default:
                setMediaType('');
                break;
        }
    }, [media]);
    return { mediaType };
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

export function useSortCelebrities() {
  const { sortCelebrities, toggleSortCelebrities } = useContext(SortCelebritiesContext);
  return { sortCelebrities, toggleSortCelebrities };
}