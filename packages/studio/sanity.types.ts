/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type Slug = {
  _type: 'slug'
  current: string
  source?: string
}

export type Techstackitem = {
  _id: string
  _type: 'techstackitem'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name: string
}

export type Section = {
  _id: string
  _type: 'section'
  _createdAt: string
  _updatedAt: string
  _rev: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  image_placement?: 'left' | 'center' | 'right'
  content?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'Content Item'
    _key: string
  }>
}

export type Quote = {
  _id: string
  _type: 'quote'
  _createdAt: string
  _updatedAt: string
  _rev: string
  quote?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  author?: string
}

export type Project = {
  _id: string
  _type: 'project'
  _createdAt: string
  _updatedAt: string
  _rev: string
  slug: string
  name: string
  colourset: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'colourset'
  }
  hero_banner?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  summary: string
  industry?: string
  website?: string
  company_image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  start_date: string
  end_date?: string
  tech_stack?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'techstackitem'
  }>
  sections?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'section'
  }>
  quotes?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'quote'
  }>
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type Colourset = {
  _id: string
  _type: 'colourset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  light: Color
  lighter: Color
  main: Color
  dark: Color
}

export type Color = {
  _type: 'color'
  hex?: string
  alpha?: number
  hsl?: HslaColor
  hsv?: HsvaColor
  rgb?: RgbaColor
}

export type RgbaColor = {
  _type: 'rgbaColor'
  r?: number
  g?: number
  b?: number
  a?: number
}

export type HsvaColor = {
  _type: 'hsvaColor'
  h?: number
  s?: number
  v?: number
  a?: number
}

export type HslaColor = {
  _type: 'hslaColor'
  h?: number
  s?: number
  l?: number
  a?: number
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Slug
  | Techstackitem
  | Section
  | Quote
  | Project
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Colourset
  | Color
  | RgbaColor
  | HsvaColor
  | HslaColor
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ../app/src/routes/(app)/+page.server.ts
// Variable: allProjectQuery
// Query: *[_type == "project"]{        slug,        name,        colourset->,        hero_banner,        summary,        start_date,		end_date,        tech_stack->,        sections->,        quotes->    }
export type AllProjectQueryResult = Array<{
  slug: string
  name: string
  colourset: {
    _id: string
    _type: 'colourset'
    _createdAt: string
    _updatedAt: string
    _rev: string
    light: Color
    lighter: Color
    main: Color
    dark: Color
  }
  hero_banner: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  } | null
  summary: string
  start_date: string
  end_date: string | null
  tech_stack: Array<{
    _id: string
    _type: 'techstackitem'
    _createdAt: string
    _updatedAt: string
    _rev: string
    name: string
  }> | null
  sections: Array<{
    _id: string
    _type: 'section'
    _createdAt: string
    _updatedAt: string
    _rev: string
    image?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    }
    image_placement?: 'center' | 'left' | 'right'
    content?: Array<{
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
      listItem?: 'bullet' | 'number'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'Content Item'
      _key: string
    }>
  }> | null
  quotes: Array<{
    _id: string
    _type: 'quote'
    _createdAt: string
    _updatedAt: string
    _rev: string
    quote?: Array<{
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
      listItem?: 'bullet' | 'number'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }>
    author?: string
  }> | null
}>
// Source: ../app/src/routes/(app)/projects/[slug]/+page.server.ts
// Variable: projectQuery
// Query: *[_type == "project" && slug == $slug]{        slug,        name,        colourset->,        hero_banner,        summary,        start_date,		end_date,        tech_stack[]->,        sections[]->,        quotes[]->,    }
export type ProjectQueryResult = Array<{
  slug: string
  name: string
  colourset: {
    _id: string
    _type: 'colourset'
    _createdAt: string
    _updatedAt: string
    _rev: string
    light: Color
    lighter: Color
    main: Color
    dark: Color
  }
  hero_banner: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  } | null
  summary: string
  start_date: string
  end_date: string | null
  tech_stack: Array<{
    _id: string
    _type: 'techstackitem'
    _createdAt: string
    _updatedAt: string
    _rev: string
    name: string
  }> | null
  sections: Array<{
    _id: string
    _type: 'section'
    _createdAt: string
    _updatedAt: string
    _rev: string
    image?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    }
    image_placement?: 'center' | 'left' | 'right'
    content?: Array<{
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
      listItem?: 'bullet' | 'number'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'Content Item'
      _key: string
    }>
  }> | null
  quotes: Array<{
    _id: string
    _type: 'quote'
    _createdAt: string
    _updatedAt: string
    _rev: string
    quote?: Array<{
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
      listItem?: 'bullet' | 'number'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }>
    author?: string
  }> | null
}>
