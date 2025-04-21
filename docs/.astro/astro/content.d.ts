declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"api/browser/Classes/ImageUtil.md": {
	id: "api/browser/Classes/ImageUtil.md";
  slug: "api/browser/classes/imageutil";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/browser/Classes/UserActivityService.md": {
	id: "api/browser/Classes/UserActivityService.md";
  slug: "api/browser/classes/useractivityservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/browser/Classes/UserInputService.md": {
	id: "api/browser/Classes/UserInputService.md";
  slug: "api/browser/classes/userinputservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/browser/Enums/ActivityState.md": {
	id: "api/browser/Enums/ActivityState.md";
  slug: "api/browser/enums/activitystate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/browser/Enums/ImageConversionType.md": {
	id: "api/browser/Enums/ImageConversionType.md";
  slug: "api/browser/enums/imageconversiontype";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/browser/Type Aliases/OnActivityListener.md": {
	id: "api/browser/Type Aliases/OnActivityListener.md";
  slug: "api/browser/type-aliases/onactivitylistener";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/browser/Type Aliases/OnChangeActivityStateListener.md": {
	id: "api/browser/Type Aliases/OnChangeActivityStateListener.md";
  slug: "api/browser/type-aliases/onchangeactivitystatelistener";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/browser/Type Aliases/UserInputKeyEventHandler.md": {
	id: "api/browser/Type Aliases/UserInputKeyEventHandler.md";
  slug: "api/browser/type-aliases/userinputkeyeventhandler";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/browser/index.md": {
	id: "api/browser/index.md";
  slug: "api/browser";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/data/Classes/Cache.md": {
	id: "api/data/Classes/Cache.md";
  slug: "api/data/classes/cache";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/data/Classes/LinkedList.md": {
	id: "api/data/Classes/LinkedList.md";
  slug: "api/data/classes/linkedlist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/data/Classes/LinkedListNode.md": {
	id: "api/data/Classes/LinkedListNode.md";
  slug: "api/data/classes/linkedlistnode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/data/Classes/Queue.md": {
	id: "api/data/Classes/Queue.md";
  slug: "api/data/classes/queue";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/data/Classes/Stack.md": {
	id: "api/data/Classes/Stack.md";
  slug: "api/data/classes/stack";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/data/Interfaces/CacheEntry.md": {
	id: "api/data/Interfaces/CacheEntry.md";
  slug: "api/data/interfaces/cacheentry";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/data/Interfaces/CacheOptions.md": {
	id: "api/data/Interfaces/CacheOptions.md";
  slug: "api/data/interfaces/cacheoptions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/data/Interfaces/ILinkedList.md": {
	id: "api/data/Interfaces/ILinkedList.md";
  slug: "api/data/interfaces/ilinkedlist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/data/Interfaces/ILinkedListNode.md": {
	id: "api/data/Interfaces/ILinkedListNode.md";
  slug: "api/data/interfaces/ilinkedlistnode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/data/Interfaces/INormalizedCollection.md": {
	id: "api/data/Interfaces/INormalizedCollection.md";
  slug: "api/data/interfaces/inormalizedcollection";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/data/Interfaces/IQueue.md": {
	id: "api/data/Interfaces/IQueue.md";
  slug: "api/data/interfaces/iqueue";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/data/Interfaces/IStack.md": {
	id: "api/data/Interfaces/IStack.md";
  slug: "api/data/interfaces/istack";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/data/index.md": {
	id: "api/data/index.md";
  slug: "api/data";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/event/Classes/Event.md": {
	id: "api/event/Classes/Event.md";
  slug: "api/event/classes/event";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/event/index.md": {
	id: "api/event/index.md";
  slug: "api/event";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/index.md": {
	id: "api/index.md";
  slug: "api";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/networking/Classes/FetchHttpClient.md": {
	id: "api/networking/Classes/FetchHttpClient.md";
  slug: "api/networking/classes/fetchhttpclient";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/networking/Enums/HttpProtocol.md": {
	id: "api/networking/Enums/HttpProtocol.md";
  slug: "api/networking/enums/httpprotocol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/networking/Enums/HttpStatus.md": {
	id: "api/networking/Enums/HttpStatus.md";
  slug: "api/networking/enums/httpstatus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/networking/Interfaces/BasicHttpRequestData.md": {
	id: "api/networking/Interfaces/BasicHttpRequestData.md";
  slug: "api/networking/interfaces/basichttprequestdata";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/networking/Interfaces/BasicHttpResponseData.md": {
	id: "api/networking/Interfaces/BasicHttpResponseData.md";
  slug: "api/networking/interfaces/basichttpresponsedata";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/networking/Interfaces/FetchHttpClientOptions.md": {
	id: "api/networking/Interfaces/FetchHttpClientOptions.md";
  slug: "api/networking/interfaces/fetchhttpclientoptions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/networking/Interfaces/IHttpClient.md": {
	id: "api/networking/Interfaces/IHttpClient.md";
  slug: "api/networking/interfaces/ihttpclient";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/networking/Type Aliases/NetworkErrorHandler.md": {
	id: "api/networking/Type Aliases/NetworkErrorHandler.md";
  slug: "api/networking/type-aliases/networkerrorhandler";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/networking/Type Aliases/ReceiveResponseHandler.md": {
	id: "api/networking/Type Aliases/ReceiveResponseHandler.md";
  slug: "api/networking/type-aliases/receiveresponsehandler";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/networking/Type Aliases/SendRequestHandler.md": {
	id: "api/networking/Type Aliases/SendRequestHandler.md";
  slug: "api/networking/type-aliases/sendrequesthandler";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/networking/Variables/FetchService.md": {
	id: "api/networking/Variables/FetchService.md";
  slug: "api/networking/variables/fetchservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/networking/index.md": {
	id: "api/networking/index.md";
  slug: "api/networking";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/AcknowledgmentDialog.md": {
	id: "api/react/Components/AcknowledgmentDialog.md";
  slug: "api/react/components/acknowledgmentdialog";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/AsyncButton.md": {
	id: "api/react/Components/AsyncButton.md";
  slug: "api/react/components/asyncbutton";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Button.md": {
	id: "api/react/Components/Button.md";
  slug: "api/react/components/button";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Carousel.md": {
	id: "api/react/Components/Carousel.md";
  slug: "api/react/components/carousel";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/CarouselWithFullView.md": {
	id: "api/react/Components/CarouselWithFullView.md";
  slug: "api/react/components/carouselwithfullview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Checkbox.md": {
	id: "api/react/Components/Checkbox.md";
  slug: "api/react/components/checkbox";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Collapsible.md": {
	id: "api/react/Components/Collapsible.md";
  slug: "api/react/components/collapsible";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/ColorInput.md": {
	id: "api/react/Components/ColorInput.md";
  slug: "api/react/components/colorinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/ConfirmationDialog.md": {
	id: "api/react/Components/ConfirmationDialog.md";
  slug: "api/react/components/confirmationdialog";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Contentbox.md": {
	id: "api/react/Components/Contentbox.md";
  slug: "api/react/components/contentbox";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Dialog.md": {
	id: "api/react/Components/Dialog.md";
  slug: "api/react/components/dialog";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/EmailLink.md": {
	id: "api/react/Components/EmailLink.md";
  slug: "api/react/components/emaillink";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/FileInput.md": {
	id: "api/react/Components/FileInput.md";
  slug: "api/react/components/fileinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Flexbox.md": {
	id: "api/react/Components/Flexbox.md";
  slug: "api/react/components/flexbox";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/FormDialog.md": {
	id: "api/react/Components/FormDialog.md";
  slug: "api/react/components/formdialog";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/FormGroup.md": {
	id: "api/react/Components/FormGroup.md";
  slug: "api/react/components/formgroup";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/FullImageFileInput.md": {
	id: "api/react/Components/FullImageFileInput.md";
  slug: "api/react/components/fullimagefileinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Grid.md": {
	id: "api/react/Components/Grid.md";
  slug: "api/react/components/grid";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/GridArea.md": {
	id: "api/react/Components/GridArea.md";
  slug: "api/react/components/gridarea";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Heading.md": {
	id: "api/react/Components/Heading.md";
  slug: "api/react/components/heading";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Icon.md": {
	id: "api/react/Components/Icon.md";
  slug: "api/react/components/icon";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/ImageCarouselWithFullView.md": {
	id: "api/react/Components/ImageCarouselWithFullView.md";
  slug: "api/react/components/imagecarouselwithfullview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/ImageFileInput.md": {
	id: "api/react/Components/ImageFileInput.md";
  slug: "api/react/components/imagefileinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/InlineFeedbackMessage.md": {
	id: "api/react/Components/InlineFeedbackMessage.md";
  slug: "api/react/components/inlinefeedbackmessage";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/InlineText.md": {
	id: "api/react/Components/InlineText.md";
  slug: "api/react/components/inlinetext";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Input.md": {
	id: "api/react/Components/Input.md";
  slug: "api/react/components/input";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Label.md": {
	id: "api/react/Components/Label.md";
  slug: "api/react/components/label";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LabelledCheckbox.md": {
	id: "api/react/Components/LabelledCheckbox.md";
  slug: "api/react/components/labelledcheckbox";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LabelledCheckboxGroup.md": {
	id: "api/react/Components/LabelledCheckboxGroup.md";
  slug: "api/react/components/labelledcheckboxgroup";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LabelledColorInput.md": {
	id: "api/react/Components/LabelledColorInput.md";
  slug: "api/react/components/labelledcolorinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LabelledFileInput.md": {
	id: "api/react/Components/LabelledFileInput.md";
  slug: "api/react/components/labelledfileinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LabelledImageFileInput.md": {
	id: "api/react/Components/LabelledImageFileInput.md";
  slug: "api/react/components/labelledimagefileinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LabelledInput.md": {
	id: "api/react/Components/LabelledInput.md";
  slug: "api/react/components/labelledinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LabelledMaskedMultilineTextInput.md": {
	id: "api/react/Components/LabelledMaskedMultilineTextInput.md";
  slug: "api/react/components/labelledmaskedmultilinetextinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LabelledMaskedTextInput.md": {
	id: "api/react/Components/LabelledMaskedTextInput.md";
  slug: "api/react/components/labelledmaskedtextinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LabelledMultilineTextInput.md": {
	id: "api/react/Components/LabelledMultilineTextInput.md";
  slug: "api/react/components/labelledmultilinetextinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LabelledRadio.md": {
	id: "api/react/Components/LabelledRadio.md";
  slug: "api/react/components/labelledradio";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LabelledRadioGroup.md": {
	id: "api/react/Components/LabelledRadioGroup.md";
  slug: "api/react/components/labelledradiogroup";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LabelledSelect.md": {
	id: "api/react/Components/LabelledSelect.md";
  slug: "api/react/components/labelledselect";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LabelledTextInput.md": {
	id: "api/react/Components/LabelledTextInput.md";
  slug: "api/react/components/labelledtextinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LabelledToggle.md": {
	id: "api/react/Components/LabelledToggle.md";
  slug: "api/react/components/labelledtoggle";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Link.md": {
	id: "api/react/Components/Link.md";
  slug: "api/react/components/link";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LoadIndicator.md": {
	id: "api/react/Components/LoadIndicator.md";
  slug: "api/react/components/loadindicator";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/LoadView.md": {
	id: "api/react/Components/LoadView.md";
  slug: "api/react/components/loadview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/MaskedMultilineTextInput.md": {
	id: "api/react/Components/MaskedMultilineTextInput.md";
  slug: "api/react/components/maskedmultilinetextinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/MaskedTextInput.md": {
	id: "api/react/Components/MaskedTextInput.md";
  slug: "api/react/components/maskedtextinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/MultilineTextInput.md": {
	id: "api/react/Components/MultilineTextInput.md";
  slug: "api/react/components/multilinetextinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/PhoneLink.md": {
	id: "api/react/Components/PhoneLink.md";
  slug: "api/react/components/phonelink";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Radio.md": {
	id: "api/react/Components/Radio.md";
  slug: "api/react/components/radio";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Select.md": {
	id: "api/react/Components/Select.md";
  slug: "api/react/components/select";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/StructuredDialog.md": {
	id: "api/react/Components/StructuredDialog.md";
  slug: "api/react/components/structureddialog";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Table.md": {
	id: "api/react/Components/Table.md";
  slug: "api/react/components/table";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Text.md": {
	id: "api/react/Components/Text.md";
  slug: "api/react/components/text";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/TextInput.md": {
	id: "api/react/Components/TextInput.md";
  slug: "api/react/components/textinput";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/ThemeToggle.md": {
	id: "api/react/Components/ThemeToggle.md";
  slug: "api/react/components/themetoggle";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Toggle.md": {
	id: "api/react/Components/Toggle.md";
  slug: "api/react/components/toggle";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Components/Tooltipped.md": {
	id: "api/react/Components/Tooltipped.md";
  slug: "api/react/components/tooltipped";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Enums/HideBehaviour.md": {
	id: "api/react/Enums/HideBehaviour.md";
  slug: "api/react/enums/hidebehaviour";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Enums/InlineFeedbackMessageType.md": {
	id: "api/react/Enums/InlineFeedbackMessageType.md";
  slug: "api/react/enums/inlinefeedbackmessagetype";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Enums/LabelPosition.md": {
	id: "api/react/Enums/LabelPosition.md";
  slug: "api/react/enums/labelposition";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Enums/ThemeMode.md": {
	id: "api/react/Enums/ThemeMode.md";
  slug: "api/react/enums/thememode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Functions/buildClassName.md": {
	id: "api/react/Functions/buildClassName.md";
  slug: "api/react/functions/buildclassname";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Functions/closeDialog.md": {
	id: "api/react/Functions/closeDialog.md";
  slug: "api/react/functions/closedialog";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Functions/generateSelectOptions.md": {
	id: "api/react/Functions/generateSelectOptions.md";
  slug: "api/react/functions/generateselectoptions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Functions/isBreakpointBiggerThan.md": {
	id: "api/react/Functions/isBreakpointBiggerThan.md";
  slug: "api/react/functions/isbreakpointbiggerthan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Functions/isBreakpointSmallerThan.md": {
	id: "api/react/Functions/isBreakpointSmallerThan.md";
  slug: "api/react/functions/isbreakpointsmallerthan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Functions/isBreakpointWithin.md": {
	id: "api/react/Functions/isBreakpointWithin.md";
  slug: "api/react/functions/isbreakpointwithin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Functions/maskText.md": {
	id: "api/react/Functions/maskText.md";
  slug: "api/react/functions/masktext";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Functions/parseGridLayoutArray.md": {
	id: "api/react/Functions/parseGridLayoutArray.md";
  slug: "api/react/functions/parsegridlayoutarray";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Functions/parseGridLayoutObject.md": {
	id: "api/react/Functions/parseGridLayoutObject.md";
  slug: "api/react/functions/parsegridlayoutobject";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Functions/parseGridLayoutString.md": {
	id: "api/react/Functions/parseGridLayoutString.md";
  slug: "api/react/functions/parsegridlayoutstring";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Hooks/useBreakpoint.md": {
	id: "api/react/Hooks/useBreakpoint.md";
  slug: "api/react/hooks/usebreakpoint";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Hooks/useChordDown.md": {
	id: "api/react/Hooks/useChordDown.md";
  slug: "api/react/hooks/usechorddown";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Hooks/useFetchedData.md": {
	id: "api/react/Hooks/useFetchedData.md";
  slug: "api/react/hooks/usefetcheddata";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Hooks/useIsMountedRef.md": {
	id: "api/react/Hooks/useIsMountedRef.md";
  slug: "api/react/hooks/useismountedref";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Hooks/useKeyDown.md": {
	id: "api/react/Hooks/useKeyDown.md";
  slug: "api/react/hooks/usekeydown";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Hooks/useKeyPressed.md": {
	id: "api/react/Hooks/useKeyPressed.md";
  slug: "api/react/hooks/usekeypressed";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Hooks/useKeyUp.md": {
	id: "api/react/Hooks/useKeyUp.md";
  slug: "api/react/hooks/usekeyup";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Hooks/useTheme.md": {
	id: "api/react/Hooks/useTheme.md";
  slug: "api/react/hooks/usetheme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Hooks/useUserActive.md": {
	id: "api/react/Hooks/useUserActive.md";
  slug: "api/react/hooks/useuseractive";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Hooks/useWindowDimensions.md": {
	id: "api/react/Hooks/useWindowDimensions.md";
  slug: "api/react/hooks/usewindowdimensions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Interfaces/Breakpoints.md": {
	id: "api/react/Interfaces/Breakpoints.md";
  slug: "api/react/interfaces/breakpoints";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Interfaces/CheckboxOption.md": {
	id: "api/react/Interfaces/CheckboxOption.md";
  slug: "api/react/interfaces/checkboxoption";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Interfaces/ChordInputOptions.md": {
	id: "api/react/Interfaces/ChordInputOptions.md";
  slug: "api/react/interfaces/chordinputoptions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Interfaces/ComplexTableColumnHeader.md": {
	id: "api/react/Interfaces/ComplexTableColumnHeader.md";
  slug: "api/react/interfaces/complextablecolumnheader";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Interfaces/DialogButton.md": {
	id: "api/react/Interfaces/DialogButton.md";
  slug: "api/react/interfaces/dialogbutton";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Interfaces/Option.md": {
	id: "api/react/Interfaces/Option.md";
  slug: "api/react/interfaces/option";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Interfaces/SelectOptionGroup.md": {
	id: "api/react/Interfaces/SelectOptionGroup.md";
  slug: "api/react/interfaces/selectoptiongroup";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Interfaces/TableCell.md": {
	id: "api/react/Interfaces/TableCell.md";
  slug: "api/react/interfaces/tablecell";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Interfaces/TableRow.md": {
	id: "api/react/Interfaces/TableRow.md";
  slug: "api/react/interfaces/tablerow";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Interfaces/WindowDimensions.md": {
	id: "api/react/Interfaces/WindowDimensions.md";
  slug: "api/react/interfaces/windowdimensions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/AcknowledgmentDialogButton.md": {
	id: "api/react/Type Aliases/AcknowledgmentDialogButton.md";
  slug: "api/react/type-aliases/acknowledgmentdialogbutton";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/BreakpointName.md": {
	id: "api/react/Type Aliases/BreakpointName.md";
  slug: "api/react/type-aliases/breakpointname";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/CarouselItemIteratee.md": {
	id: "api/react/Type Aliases/CarouselItemIteratee.md";
  slug: "api/react/type-aliases/carouselitemiteratee";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/ConfirmationDialogButton.md": {
	id: "api/react/Type Aliases/ConfirmationDialogButton.md";
  slug: "api/react/type-aliases/confirmationdialogbutton";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/FormDialogButton.md": {
	id: "api/react/Type Aliases/FormDialogButton.md";
  slug: "api/react/type-aliases/formdialogbutton";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/GridLayout.md": {
	id: "api/react/Type Aliases/GridLayout.md";
  slug: "api/react/type-aliases/gridlayout";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/GridLayoutArray.md": {
	id: "api/react/Type Aliases/GridLayoutArray.md";
  slug: "api/react/type-aliases/gridlayoutarray";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/GridLayoutSizingObject.md": {
	id: "api/react/Type Aliases/GridLayoutSizingObject.md";
  slug: "api/react/type-aliases/gridlayoutsizingobject";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/GridLayoutString.md": {
	id: "api/react/Type Aliases/GridLayoutString.md";
  slug: "api/react/type-aliases/gridlayoutstring";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/HorizontalAlignment.md": {
	id: "api/react/Type Aliases/HorizontalAlignment.md";
  slug: "api/react/type-aliases/horizontalalignment";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/ImageCarouselItemType.md": {
	id: "api/react/Type Aliases/ImageCarouselItemType.md";
  slug: "api/react/type-aliases/imagecarouselitemtype";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/RadioOption.md": {
	id: "api/react/Type Aliases/RadioOption.md";
  slug: "api/react/type-aliases/radiooption";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/SelectOption.md": {
	id: "api/react/Type Aliases/SelectOption.md";
  slug: "api/react/type-aliases/selectoption";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/TableColumnHeader.md": {
	id: "api/react/Type Aliases/TableColumnHeader.md";
  slug: "api/react/type-aliases/tablecolumnheader";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/UseFetchDataResult.md": {
	id: "api/react/Type Aliases/UseFetchDataResult.md";
  slug: "api/react/type-aliases/usefetchdataresult";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Type Aliases/VerticalAlignment.md": {
	id: "api/react/Type Aliases/VerticalAlignment.md";
  slug: "api/react/type-aliases/verticalalignment";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/Variables/defaultBreakpoints.md": {
	id: "api/react/Variables/defaultBreakpoints.md";
  slug: "api/react/variables/defaultbreakpoints";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/react/index.md": {
	id: "api/react/index.md";
  slug: "api/react";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/view/Classes/ThemeService.md": {
	id: "api/view/Classes/ThemeService.md";
  slug: "api/view/classes/themeservice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/view/Functions/hexToHsl.md": {
	id: "api/view/Functions/hexToHsl.md";
  slug: "api/view/functions/hextohsl";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/view/Functions/hexToRgb.md": {
	id: "api/view/Functions/hexToRgb.md";
  slug: "api/view/functions/hextorgb";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/view/Functions/hslToHex.md": {
	id: "api/view/Functions/hslToHex.md";
  slug: "api/view/functions/hsltohex";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/view/Functions/hslToRgb.md": {
	id: "api/view/Functions/hslToRgb.md";
  slug: "api/view/functions/hsltorgb";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/view/Functions/rgbToHex.md": {
	id: "api/view/Functions/rgbToHex.md";
  slug: "api/view/functions/rgbtohex";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/view/Functions/rgbToHsl.md": {
	id: "api/view/Functions/rgbToHsl.md";
  slug: "api/view/functions/rgbtohsl";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/view/Interfaces/Hsl.md": {
	id: "api/view/Interfaces/Hsl.md";
  slug: "api/view/interfaces/hsl";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/view/Interfaces/Rgb.md": {
	id: "api/view/Interfaces/Rgb.md";
  slug: "api/view/interfaces/rgb";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/view/Interfaces/Theme.md": {
	id: "api/view/Interfaces/Theme.md";
  slug: "api/view/interfaces/theme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/view/Type Aliases/OnChangeThemeListener.md": {
	id: "api/view/Type Aliases/OnChangeThemeListener.md";
  slug: "api/view/type-aliases/onchangethemelistener";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"api/view/index.md": {
	id: "api/view/index.md";
  slug: "api/view";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/01-getting-started.md": {
	id: "guides/01-getting-started.md";
  slug: "guides/01-getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"guides/02-advanced.md": {
	id: "guides/02-advanced.md";
  slug: "guides/02-advanced";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/01-what-is-jtjs.md": {
	id: "introduction/01-what-is-jtjs.md";
  slug: "introduction/01-what-is-jtjs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"introduction/02-next-steps.md": {
	id: "introduction/02-next-steps.md";
  slug: "introduction/02-next-steps";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"modules/browser.md": {
	id: "modules/browser.md";
  slug: "modules/browser";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"modules/data.md": {
	id: "modules/data.md";
  slug: "modules/data";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"modules/event.md": {
	id: "modules/event.md";
  slug: "modules/event";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"modules/networking.md": {
	id: "modules/networking.md";
  slug: "modules/networking";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"modules/react.md": {
	id: "modules/react.md";
  slug: "modules/react";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"modules/theme.md": {
	id: "modules/theme.md";
  slug: "modules/theme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"modules/view.md": {
	id: "modules/view.md";
  slug: "modules/view";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
