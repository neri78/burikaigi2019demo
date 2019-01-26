import { Url } from 'url';

export class Tweet {
    public created_At: Date;
    public full_text: string;
    public Photo_Image: string;
    public entities: Entity;
    public user: User;
    public favorite_count: number;
    public retweet_count: number;
    public total_count: number;
    public rank: number;
  }

  export class User {
    public id: string;
    public name: string;
    public screen_name: string;
    public profile_url: Url;
    public profile_image_url_https: Url;
  }

  export class Entity {
    public media: Media[];
  }

  export class Media {
    media_url_https: string;

  }

