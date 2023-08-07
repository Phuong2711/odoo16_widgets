/** @odoo-module **/

import { registry } from '@web/core/registry';
import { url } from "@web/core/utils/urls";
import { BinaryField } from "@web/views/fields/binary/binary_field";

export default class VideoPreview extends BinaryField {

    get url() {
        return url("/web/content", {
            model: this.props.record.resModel,
            id: this.props.record.data.id,
            field: this.props.name,
        })
    }
}

VideoPreview.defaultProps = {
    acceptedFileExtensions: "video/*",
};

VideoPreview.supportedTypes = ["binary"];

VideoPreview.template = "video_preview.video_preview";

registry.category("fields").add("video_preview", VideoPreview);
