import {FieldModels, Fields} from 'kentico-cloud-delivery';

export function getImageUrl(field: Fields.AssetsField) {
  const assets = field && field.assets;
  if (!assets || !assets.length) {
    return '';
  }

  return assets[0].url;
}

export function getText(field: Fields.TextField) {
  return field ? field.text : '';
}