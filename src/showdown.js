import showdown from 'showdown'

const converter = new showdown.Converter();

export const makeHtml = (text) => converter.makeHtml(text);
