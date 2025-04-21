---
title: useFetchedData
description: Generated API documentation for useFetchedData.
---

`Hook` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/hooks/use-fetched-data.hook.ts#L58)

---

useFetchedData(fetcher: _Function_, deps: _DependencyList_): _UseFetchDataResult<T>_

---

Allows you to safely fetch data asynchronously. Tracks whether the call is out, the
data that was returned, and any error that occurred while trying to perform the task.

This hook ensures that only the call from the latest call of the `fetcher` is used. This
avoids race conditions caused by responses coming back out of order. Any stale responses
are ignored.

While not required, it's recommended you use this hook alongside some kind of API client
that manages the actual network calls. That keeps data fetching logic out of your view
and gives you a logical place to implement any caching (should you want it).

### Returns
Whether the data fetch is pending, the current fetched data, and the error if there was one
on the last call.

### Example
```tsx
interface Blog {
  text: string;
}
class BlogApi {
  getBlog(blogId: string): Promise<Blog> {
      return Promise.resolve({ text: 'hello world!' });
  }
}

const blogApi = new BlogApi();

const BlogPage = ({ blogId }: { blogId: string }) => {
  const [isBlogLoading, blog, loadBlogError] = useFetchedData(() => blogApi.getBlog(blogId), [blogId]);

  // Note that when `isBlogLoading` would be `false`, either `blog` or `loadBlogError` could
  // be populated, based on whether the provided `fetcher` encountered an error.
  return <p>{isBlogLoading ? 'Loading...' : blog?.text}</p>
}
```

### Parameters

#### fetcher: _Function_

The async function to invoke to retrieve the data.

---

#### deps: _DependencyList_

Any information `fetcher` depends on. Similarly to the `useEffect`
hook, you should list any reactive values you use in the body of the `fetcher`
function as dependencies. If any of the dependencies change between
renders, the `fetcher` will be re-invoked with the new values. Keep this in mind
if you're providing object deps. In that situation, you may want to use objects
with stable references or find a way to use primitives.