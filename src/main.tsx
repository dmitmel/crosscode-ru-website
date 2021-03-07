import * as jsx from './jsx';
import cc from 'classcat';

const SITE_NAME = 'crosscode.ru';
const SITE_ROOT = `https://${SITE_NAME}`;
const MOD_URL = 'https://github.com/CCDirectLink/crosscode-ru#readme';
const VK_URL = 'https://vk.com/crusscode';

function Emote(props: { name: string; big?: boolean }): JSX.Element {
  return (
    <img
      class={cc(['emote', { big: props.big }])}
      src={`${SITE_ROOT}/${props.name}.png`}
      alt={`:${props.name}:`}
      aria-label={`:${props.name}:`}
    />
  );
}

let page = (
  <>
    <jsx.DOCTYPE content="html" />
    <html lang="ru" prefix="og: https://ogp.me/ns#">
      <head>
        <meta charset="utf-8" />
        <jsx.COMMENT content="hello!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_ROOT}/`} />
        <meta property="og:title" content="Русский перевод и сообщество CrossCode" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta
          property="og:description"
          content="Комьюнити-модпак русского перевода игры CrossCode, который мы все заслужили."
        />
        <meta property="og:image" content={`${SITE_ROOT}/logo.png?v=1`} />
        <meta property="og:locale" content="ru_RU" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{SITE_NAME} - Русский перевод и сообщество CrossCode</title>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href={`${SITE_ROOT}/style.css`} />
      </head>

      <body>
        <main>
          <h1 class="text-align-center">Здравствуй, Искатель!</h1>
          <p>
            <strong>Наш сайт находится в разработке!</strong> Верстальщик сайтов у нас в команде
            есть (он, собсна, и сделал эту страничку <Emote name="SanCheese" />
            ), но он - не веб-дизайнер, поэтому мы ищем <s>источник вдохновения</s> дизайн и/или
            макет для нового сайта. Тем временем, ты можешь посетить страничку нашего проекта
            перевода <a href="https://store.steampowered.com/app/368340/CrossCode/">CrossCode</a> на
            GitHub:
          </p>
          <p>
            <a href={MOD_URL}>{MOD_URL}</a>
          </p>
          <p>
            Ещё у нас есть <a href={`${SITE_ROOT}/discord?from=web`}>Discord-сервер</a> (честно
            говоря, скучно там не бывает, особенно команде переводчиков <Emote name="dogroflan" />)
            и <a href={VK_URL}>группа в VK</a>!
          </p>
          <p>
            {[
              'shar',
              'downer',
              'dogroflan',
              'SanCheese',
              'papa_can_in_c',
              'ultimatelul',
              'geee',
            ].map((emote) => [<Emote name={emote} big />, ' '])}
          </p>
        </main>
      </body>
    </html>
  </>
);

console.log(jsx.renderToString(page));
