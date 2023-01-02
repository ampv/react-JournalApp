import { ImageList, ImageListItem } from "@mui/material";

export const ImageGalery = ({ images = [] }) => {
  return (
    <ImageList
      sx={{ width: '100%', height: 500 }}
      variant="quilted"
      cols={5}
      rowHeight={200}>

      {images.map((image) => (


        <ImageListItem key={image} cols={image.cols || 1} rows={image.rows || 1}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={(image, 200, image.rows, image.cols)}
            alt='memzoo'
            loading="lazy"
          />
        </ImageListItem>


      ))}

    </ImageList>
  );
}