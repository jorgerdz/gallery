const url = `https://studio.plasmic.app/api/v1/cms/databases/${import.meta.env.VITE_CMS_ID}/tables/${import.meta.env.VITE_CMS_MODEL_ID}/query`
const headers = {
  'x-plasmic-api-cms-tokens': `${import.meta.env.VITE_CMS_ID}:${import.meta.env.VITE_CMS_PUBLIC_TOKEN}`
}
export async function getOne(slug) {
  let search = new URLSearchParams({
    q: JSON.stringify({
      where: {
        slug: slug
      },
      limit: 1
    })
  }).toString();

  const response = await fetch(url + '?' + search, {headers});
  const parsedResponse = await response.json();
  const item = parsedResponse.rows[0];
  return item;
}

export async function getAll() {
  const response = await fetch(
    `${url}?q=%7B%7D`,
    { headers }
  );

  const parsedResponse = await response.json();
  const items = parsedResponse.rows;
  return items;
}