import {defineMiddleware} from 'astro:middleware';
export const onRequest = defineMiddleware(async (context,next) => {
 const url=new URL(context.url);
 if(url.protocol==='http:'&&url.hostname==='plazasargento.com'){url.protocol='https:';return Response.redirect(url.href,308);}
 if(['/404','/404.html'].includes(url.pathname))return context.rewrite('/404/');
 const response=await next();
 if(response.status===404||url.pathname==='/404/'){const headers=new Headers(response.headers);headers.delete('location');headers.set('x-robots-tag','noindex');headers.set('cache-control','no-store');return new Response(context.request.method==='HEAD'?null:response.body,{status:404,headers});}
 return response;
});
