import {FieldModels, Fields} from 'kentico-cloud-delivery';

export function getImageUrl(assets: FieldModels.AssetModel[]) {
  if (!assets || !assets.length) {
    return '';
  }

  return assets[0].url;
}

export function getText(field: Fields.TextField) {
  return field ? field.text : '';
}